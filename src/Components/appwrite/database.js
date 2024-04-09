import { Client, Databases, Storage, ID } from "appwrite";
import conf from "../../conf/conf";
import toast from 'react-hot-toast';

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
          toast.success("Registration success");
        })
      }catch (error)
      {
        toast.error("Error in registration");
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
            toast.error("Sorry Image is not uploaded");
          }
        ) 
    }

    async getAllBatches()
    {
      try
      {
        return await this.databases.listDocuments(conf.databaseId, conf.collectionId)
      }catch (error)
      {
        throw error;
      }
    }
}
const database = new DatabaseClass();
export default database;