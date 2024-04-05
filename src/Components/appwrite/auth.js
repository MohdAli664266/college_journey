import { Client, Account, ID } from "appwrite";
import conf from '../../conf/conf';

export class AuthService{
    client = new Client();
    account;
    sessionId;

    constructor()
    {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectId);

        this.account = new Account(this.client)
    }

    async creatAccount({email, password, name, phone})
    {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name, phone);
            const promise = await this.account.createVerification('http://localhost:5173/verification');
            console.log("Promise content ", promise);
            
            // this.login({email, password})
            return userAccount;
        } catch (error) {
            console.log(error)
        }
    }

    async login({email, password})
    {
        try
        {
            const login = await this.account.createEmailPasswordSession(email, password);
            localStorage.setItem('sessionId', login.$id);
            return login;
        }catch(error)
        {
            throw error;
        }
    }

    async getCurrentUser()
    {
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
    }

    async logout()
    {
        try {
            return await this.account.deleteSession(localStorage.getItem('sessionId'));
        } catch (error) {
            throw error;            
        }
    }
}

const authService = new AuthService();
export default authService;