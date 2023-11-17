import { ID } from "appwrite";

import { account, avatars } from "./config";

export async function createUserAccount(email, password, name) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            name
        );

        if (!newAccount) throw Error;
        return newAccount;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function signInAccount(email, password) {
    try {
        const session = await account.createEmailSession(email, password);

        return session;
    } catch (error) {
        console.log(error);
    }
}

export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;
    } catch (error) {
        console.log(error);
    }
}

export async function signOutAccount() {
    try {
        const session = await account.deleteSession("current");

        return session;
    } catch (error) {
        console.log(error);
    }
}