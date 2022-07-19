import { Query } from "appwrite";
import { account, OvaDB } from "../appwrite/config";
import { v4 as uuid } from "uuid";

export const actions = {
  async getPolls({ commit }: { commit: any }) {
    try {
      const data = await OvaDB.listDocuments("62caa4ba8f5491cbeabe");
      commit("SET_POLLS", data.documents);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async getParticipants({ commit }: { commit: any }, { id }: { id: string }) {
    try {
      const data = await OvaDB.listDocuments("62cab92f078028cd4940", [
        Query.equal("poll_id", id),
      ]);
      commit("SET_PARTICIPANTS", data.documents);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async getBlogs({ commit }: { commit: any }) {
    try {
      const response = await fetch(
        "https://dev.to/api/articles?username=gautamjha"
      );
      const data = await response.json();
      commit("SET_BLOGS", data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async getBlog({ commit }: { commit: any }, { id }: { id: number }) {
    try {
      const response = await fetch(`https://dev.to/api/articles/${id}`);
      const data = await response.json();
      commit("SET_BLOG", data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async login(
    _: any,
    { email, password }: { email: string; password: string }
  ) {
    try {
      const response = await account.createEmailSession(email, password);
      return response;
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async signup(
    _: any,
    { email, password, name }: { email: string; password: string; name: string }
  ) {
    try {
      const userId = uuid();
      const response = await account.create(userId, email, password, name);
      return response;
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async logout() {
    try {
      const response = await account.deleteSession("current");
      return response;
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
};
