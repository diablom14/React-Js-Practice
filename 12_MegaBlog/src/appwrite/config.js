import conf from "../conf/conf";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class DataBaseService{
    client;
    databases;
    storage;
    constructor(){
        this.client = new Client()
                    .setEndpoint(conf.appwriteURL)
                    .setProject(conf.projectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId})
    {
        try {
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title: title,
                    content: content,
                    featuredImage: featuredImage,
                    status: status,
                    userId: userId
                }
            );
        } catch (error) {
            console.log("Error creating post:", error);
            return null;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title: title,
                    content: content,
                    featuredImage: featuredImage,
                    status: status,
                }
            );
        } catch (error) {
            console.log("Error updating post:", error);
            return null;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            );
            return true
        } catch (error) {
            console.log("Error deleting post:", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            );
        } catch (error) {
            console.log("Error while retrieving post", error);
            return null
        }
    }

    async getPosts(queries=[Query.equal("status", "Active")])
    {
        try {
            return await this.databases.listDocuments(
                conf.databaseId, 
                conf.collectionId,
                queries,
            )
        } catch (error) {
            console.log("Error while getting all posts:", error);
            return null
        }
    }

    //uploading files
    async createFile(file){
        try {
            return await this.storage.createFile(
                conf.bucketId, 
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Error uploading file:", error);
            return false;
        }
    }
    

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.bucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Error deleting file:", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.bucketId,
            fileId
        );
    }
    
    getFileDownload(fileId){
        return this.storage.getFileDownload(
            conf.bucketId,
            fileId
        );
    }
}

const appwriteService = new DataBaseService()

export default appwriteService