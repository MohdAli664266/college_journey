import { Client, Databases, Storage, ID, Query } from "appwrite";
import conf from "../../conf/conf";
import toast from "react-hot-toast";

export class DatabaseClass {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async addData(name, year, course, file, description) {
    try {
      await this.databases
        .createDocument(conf.databaseId, conf.collectionId, ID.unique(), {
          imagePath: file,
          name: name,
          year: year,
          course: course,
          description: description,
        })
        .then((resp) => {
          toast.success("Registration success");
        });
    } catch (error) {
      toast.error("Error in registration");
    }
  }
  async addPost(obj) {
    try {
      await this.databases
        .createDocument(conf.databaseId, conf.postId, ID.unique(), {
          batchId: obj.batchId,
          studentId: obj.studentId,
          name: obj.name,
          heading: obj.heading,
          description: obj.description,
          imagePath: obj.imagePath,
        })
        .then((resp) => {
          toast.success("Posted successfully");
        });
    } catch (error) {
      toast.error("Error in registration");
    }
  }

  async post(obj) {
    await this.storage
      .createFile(conf.bucketId, ID.unique(), obj.imagePath)
      .then((uploaded) => {
        obj.imagePath = uploaded.$id;
        this.addPost(obj);
      })
      .catch((error) => {
        toast.error("Sorry Image is not uploaded");
      });
  }

  async getAllPost(batchId) {
    try {
      return await this.databases.listDocuments(conf.databaseId, conf.postId, [
        Query.equal("batchId", [batchId]),
      ]);
    } catch (error) {
      throw error;
    }
  }
  async registerStudent(object) {
    await this.storage
      .createFile(conf.bucketId, ID.unique(), object.image)
      .then((uploaded) => {
        const new_obj = { ...object, image: uploaded.$id };
        this.addStudent(new_obj);
      })
      .catch((error) => {
        toast.error("Sorry Image is not uploaded");
      });
  }
  async addStudent(obj) {
    try {
      await this.databases.createDocument(
        conf.databaseId,
        conf.studentId,
        ID.unique(),
        {
          name: obj.name,
          email: obj.email,
          phone: obj.phone,
          batchname: obj.batchname,
          batchId: obj.batchId,
          batchPassword: obj.batchPassword,
          city: obj.city,
          state: obj.state,
          courseName: obj.courseName,
          highestQualification: obj.highestQualification,
          intermediate: obj.intermediate,
          certificateName: obj.certificateName,
          achievement: obj.achievement,
          loginId: obj.loginId,
          pin: obj.pin,
          skills: obj.skills,
          projects: obj.projects,
          githubLink: obj.githubLink,
          image: obj.image,
        }
      );
    } catch (e) {
      throw e;
    }
  }
  async registerStudentUpdate(object, documentID) {
    await this.storage
      .createFile(conf.bucketId, ID.unique(), object.image)
      .then((uploaded) => {
        const new_obj = { ...object, image: uploaded.$id };
        this.addStudentUpdate(new_obj, documentID);
      })
      .catch((error) => {
        toast.error("Sorry Image is not uploaded");
      });
  }
  async addStudentUpdate(obj, documentID) {
    try {
      await this.databases.updateDocument(
        conf.databaseId,
        conf.studentId,
        documentID,
        {
          name: obj.name,
          email: obj.email,
          phone: obj.phone,
          batchname: obj.batchname,
          batchId: obj.batchId,
          batchPassword: obj.batchPassword,
          city: obj.city,
          state: obj.state,
          courseName: obj.courseName,
          highestQualification: obj.highestQualification,
          intermediate: obj.intermediate,
          certificateName: obj.certificateName,
          achievement: obj.achievement,
          loginId: obj.loginId,
          pin: obj.pin,
          skills: obj.skills,
          projects: obj.projects,
          githubLink: obj.githubLink,
          image: obj.image,
        }
      );
    } catch (e) {
      throw e;
    }
  }
  async updateStudent(obj) {
    try {
        await this.databases.listDocuments(
        conf.databaseId,
        conf.studentId,
        [Query.equal("loginId", [obj.loginId])]
        ).then((res)=>
          this.registerStudentUpdate(obj, res.documents[0].$id)
        );
    } catch (error) {
      throw error;
    }
  }

  async registration(name, year, course, file, description) {
    await this.storage
      .createFile(conf.bucketId, ID.unique(), file)
      .then((uploaded) => {
        this.addData(name, year, course, uploaded.$id, description);
      })
      .catch((error) => {
        toast.error("Sorry Image is not uploaded");
      });
  }

  async getAllBatches() {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.collectionId
      );
    } catch (error) {
      throw error;
    }
  }

  async getStudent(userId) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.studentId,
        [Query.equal("loginId", [userId])]
      );
    } catch (error) {
      throw error;
    }
  }
  async getAllBatchStudent(batchId) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.studentId,
        [Query.equal("batchId", [batchId])]
      );
    } catch (error) {
      throw error;
    }
  }
}
const database = new DatabaseClass();
export default database;
