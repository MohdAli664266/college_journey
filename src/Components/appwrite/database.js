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
    }

    async registration(name, year, course, file, description) 
    {
        this.storage = new Storage(this.client)
        await this.storage.createFile(
            conf.bucketId,
            ID.unique(),
            file
          ).then((uploaded)=>
          {
            this.databases =new Databases(this.client);
            this.databases.createDocument
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
            ).then((res)=>alert("Your registration has been successfully")).catch((error)=>alert("Sorry! something went wrong"))
          }).catch((error)=>alert("Sorry Image is not uploaded")) 
    }
}
const database = new DatabaseClass();
export default database;