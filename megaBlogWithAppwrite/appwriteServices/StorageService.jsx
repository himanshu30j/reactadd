import conf from "../src/config/conf";
import {Client,Databases ,ID, Query, Storage } from "appwrite";

class StorageService {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        

    }
//slug is like document id 
    async createPost ({title, slug,content,featuredImage,staus,userId}){
        try {
           return await this.databases.createDocument(conf.appwriteDatabaseId,
            conf.appwriteCollectionId,slug,{
                title,
                content,
                featuredImage,
                staus,
                userId

            })
            
        } catch (error) {
            throw error;
            
        }
    }
   
    async updatePost(slug,{title,content,featuredImage,staus}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,content,featuredImage,staus
            })
            
        } catch (error) {
            
        }
    }
    async deletePost(slug){
        try {
             this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
             return true;
            
        } catch (error) {
            throw error;
            return false;

        }
    }
    async getPost(slug){
        try {
            return this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
            
        } catch (error) {
            throw error;
            return false;
            
        }
    }
    async getPosts(){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,
                [Query.equal("status","active"),]
            )
            
        } catch (error) {
            throw error;
            return false;
            
        }

    }

    // flile uploading services

    


}
const storageService = new StorageService();

export default storageService;

