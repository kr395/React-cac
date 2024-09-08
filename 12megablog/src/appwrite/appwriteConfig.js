import config from "../config/config";
import { Client, Account, ID,Databases,Query,Storage } from "appwrite";



export class Service{
  client = new Client();
  databases;
  bucket;
  constructor(){
    this.client
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({title,slug, content, featuredImage, status, userId}){
      try {
         await this.databases.createDocument()
        
      } catch (error) {
        console.log("Appwrite Error:: Create Post Error", error);
        
      }
  }
}

const service = new Service();

export default service