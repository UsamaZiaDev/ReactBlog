import { Client, Account, ID } from "appwrite";
import config from "../config/config"


export class AuthService {

    client = new Client();
    account;
  
    constructor(){

        this.client
        .setEndpoint(config?.appwriteURL)
        .setProject(config?.appwriteProjectID)

        this.account = new Account(this.client);
    }  

    async createAccount({email, password}){

        try{
            
            const userAccount = await  this.account.create(ID.unique(), email, password)

            if(userAccount){
                alert("user Account created successfully")
                this.loginAccount({email, password})
            }else{
                return userAccount;
            }               
        }
        catch(error){
            console.log("appwrite service :: createAccount :: error: " , error );
        }

    }

    async loginAccount({email, password}){
        try{
            const userlogin = await this.account.createEmailSession(email, password)
            alert("user sucessfully logged in")
            return userlogin
        }
        catch(error){
            console.log("appwrite service :: loginUser :: error: " , error );
        }
    }

    async logout(){
        try{
            return await this.account.deleteSession()
        }
        catch(error){
            console.log("appwrite service :: logout :: error: " , error );
        }
    }

    async currentUser(){
        try{
            return await this.account.get()
        }
        catch(error){
            console.log("appwrite service :: currentUser :: error: " , error );
        }

        return null;
    }

}


const authService = new AuthService() 

export default authService;
