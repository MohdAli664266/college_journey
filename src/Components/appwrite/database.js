import { Client, Databases, Storage, ID } from "appwrite";
import conf from "../../conf/conf";

export class DatabaseClass
{
    client = new Client();
    databases;
    storage;
    constructor()
    {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectId);
        this.databases =new Databases(this.client);
        this.storage = new Storage(this.client)
    }

    async addData(name, year, course, file, description)
    {
      try
      {
        await this.databases.createDocument(conf.databaseId,
          conf.collectionId,
          ID.unique(),
          {
            imagePath:file,
            name:name,
            year:year,
            course:course,
            description:description,
          }
        ).then((resp)=>
        {
          alert("Registration success");
        })
      }catch (error)
      {
        alert("Sorry! document is not added");
        console.log(error);
      }
    }
    async registration(name, year, course, file, description) 
    {
        await this.storage.createFile
        (
            conf.bucketId,
            ID.unique(),
            file
          ).then((uploaded)=>
          {
            this.addData(name, year, course, uploaded.$id, description);
          }).catch((error)=>
          {
            alert("Sorry Image is not uploaded");
            console.log(error);
          }
        ) 
    }

    async getAllBatches()
    {
      try
      {
        console.log(conf.collectionId);
        return await this.databases.listDocuments(conf.databaseId, conf.collectionId)
      }catch (error)
      {
        console.log("Get AllBatches function error")
        console.log(error)
      }
    }
}
const database = new DatabaseClass();
export default database;