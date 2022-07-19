import { Account, Databases, Client } from "appwrite";

const client = new Client();

client.setEndpoint(import.meta.env.VITE_ENDPOINT);
client.setProject(import.meta.env.VITE_PROJECT);

export const account = new Account(client);

export const OvaDB = new Databases(client, import.meta.env.VITE_DATABASE);
