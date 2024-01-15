


// import {Client,Account,ID} from 'appwrite';
// import conf from '../src/config/conf';

// const client = new Client().setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

// const account = new Account(client);

// const user =  account.create(ID.unique(),"xyz.gmail.com","xyz@123");
import {Client,Account,ID} from 'appwrite'
import conf from '../src/config/conf';

class AuthService{
        client = new Client();
        account;

        constructor(){
            this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);

        }
        async createAccount({email,password,name}){
                try{
                const userAccount = await this.account.create(ID.unique(),email,password,name);
                if(userAccount){
                    //if account is created then we can do two thig 1. logedIn or 2.show the message that account is created but here i am using 1st option
                    this.login(email,password);
                    return userAccount;

                }else{
                    return null
                }

                }catch(error){
                    throw error;
                }

        }

        login({email,password}){
                try {
                    return this.account.createEmailSession(email,password);
                } catch (error) {
                    throw(error)  
                }
        }

        async logout(){
                try {
                    return this.account.deleteSessions();
                    
                } catch (error) {
                    throw(error)
                    
                }
        }
        async getCurrentUser(){
            try {
                return await this.account.get();
                
            } catch (error) {
                throw error;
            }
        }
}

const authService = new AuthService();

export default authService;