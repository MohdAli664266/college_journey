import { Client, Account, ID } from "appwrite";
import conf from '../../conf/conf';

export class AuthService{
    client = new Client();
    account;

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
            const userAccount = await this.account.create(ID.unique(), email, password, name, phone)
            return userAccount;
        } catch (error) {
            console.log(error)
        }
    }

    async login({email, password})
    {
        try
        {
            return await this.account.createEmailSession(email, password);
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
            return await this.account.deleteSession();
        } catch (error) {
            throw error;            
        }
    }
}

const authService = new AuthService();
export default authService;