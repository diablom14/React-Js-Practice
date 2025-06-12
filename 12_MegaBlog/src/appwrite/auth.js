import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    constructor(){
        this.client = new Client()
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.projectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name})
    {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                //call login function
                await this.login({email, password})
                return userAccount
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log("Error creating account:", error);
            return null;
        }
        
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Error logging in:", error);
            return null;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Error getting current user:", error);
            return null;
        }
    }
    async logout(){
        try {
            return await this.account.deleteSession('current')
        } catch (error) {
            console.log("Error logging out:", error);
            throw error
            
        }
    }

}

const authService = new AuthService()

export default authService  