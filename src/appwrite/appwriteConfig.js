import { Client, Storage, ID, Databases, Query } from "appwrite";
import config from "../config/config"



export class Service{

    client  = Client()
    databases;
    bucket;


    constructor(){
        this.client
        .setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectID)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);
    }

    async createPost( {title, slug, content, featuredImage, status, userID }){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title, 
                    content, 
                    featuredImage, 
                    status, 
                    userID
                }
            )
        } 
        catch (error) {
            console.log("appwrite sevice :: createPost :: error: ",  error);
        }
    }

    async updatePost( slug,{title, content, featuredImage, status }){
        try {
            this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title, 
                    content, 
                    featuredImage, 
                    status
                }
            )    
        } 
        catch (error) {
            console.log("appwrite sevice :: createPost :: error: ",  error);
        }
    }

    async deletePost( slug ){
        try {
                await this.databases.deleteDocument(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    slug
                )
                return true    
        } 
        catch (error) {
            console.log("appwrite sevice :: deletePost :: error: ",  error);
            return false
        }
    }

    async getPost( slug ){
        try {
                return await this.databases.getDocument(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    slug
                )
        } 
        catch (error) {
            console.log("appwrite sevice :: getPost :: error: ",  error);
            return false;
        }
    }

    async getPosts( queries = Query.equal("status", "active") ){
            try {
                    return await this.databases.listDocuments( 
                        config.appwriteDatabaseId,
                        config.appwriteCollectionId,
                        queries
                    )    
            } 
            catch (error) {
                console.log("appwrite sevice :: getPosts :: error: ",  error);
                return false;
            }
    }

    
    // **************************
    //      Upload File
    // **************************

    async uploadFile(file){
        try {
                return await this.bucket.createFile(
                    config.appwriteBucketId,
                    ID.unique(),
                    file
                )
        } 
        catch (error) {
            console.log("appwrite sevice :: uploadFile :: error: ",  error);
            return false;
        }
    }


    async deleteFile(fileId){
        try {
                await this.bucket.deleteFile(
                    config.appwriteBucketId,
                    fileId
                )    
                return true;
        } 
        catch (error) {
            console.log("appwrite sevice :: deleteFile :: error: ",  error);
            return false;
        }
    }


    async getFilePreview(fileId){
        try {
                return await this.bucket.getFilePreview(
                    config.appwriteBucketId,
                    fileId
                )    
        } 
        catch (error) {
            console.log("appwrite sevice :: getFilePreview :: error: ",  error);
            return false;
        }
    }


}



const Service = new Service()

export default Service;