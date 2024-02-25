import { Client, Databases, Storage, ID } from "appwrite";
import conf from "../../conf/conf";

export class DatabaseClass
{
    client = new Client();
    database;
    storage;
    constructor()
    {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectId);
        this.database =new Databases(this.client);
        this.storage = new Storage(this.client)
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
            this.database.createDocument
            (
                conf.databaseId,
                conf.collectionId,
                ID.unique(),
                {
                  imagePath:uploaded.$id,
                  name:name,
                  year:year,
                  course:course,
                  description:description,
                }
            ).then((res)=>alert("Your registration has been successfully"))
            .catch((error)=>alert("Sorry! something went wrong"))
          }).catch((error)=>alert("Sorry Image is not uploaded")
        ) 
    }

    async getAllBatches()
    {
      try
      {
        return await this.database.listDocuments(conf.databaseId, conf.collectionId)
      }catch (error)
      {
        console.log("You have to login first ")
      }
    }
}
const database = new DatabaseClass();
export default database;