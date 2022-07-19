import { createStore } from "vuex";
import { actions } from "./action";

// const getDocuments = (id: string): any => {
//   const response: any = new Promise((resolve, reject) => {
//     OvaDB.listDocuments(id)
//       .then((res: any) => {
//         resolve(res.documents);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
//   response.then((res: any) => {
//     return res;
//   });
// };

export const store = createStore({
  state: {
    playerlist: [
      {
        id: 1,
        name: "Auston Matthews",
        position: "Center",
        team: "Toronto Maple Leafs",
        points: 20,
      },
      {
        id: 9,
        name: "Jack Eichel",
        position: "Wing",
        team: "Buffalo Sabres",
        points: 2,
      },
      {
        id: 2,
        name: "Carey Price",
        position: "Goalie",
        team: "Montreal Canadiens",
      },
      {
        id: 3,
        name: "William Nylander",
        position: "Wing",
        team: "Toronto Maple Leafs",
        points: 8,
      },
      {
        id: 8,
        name: "Connor McDavid",
        position: "Center",
        team: "Edmonton Oilers",
        points: 16,
      },
      {
        id: 6,
        name: "Erik Karlsson",
        position: "Defenceman",
        team: "San Jose Sharks",
        points: 9,
      },
      {
        id: 4,
        name: "John Tavares",
        position: "Center",
        team: "Toronto Maple Leafs",
        points: 4,
      },
      {
        id: 5,
        name: "Mitch Marner",
        position: "Wing",
        team: "Toronto Maple Leafs",
        points: 12,
      },
      {
        id: 10,
        name: "Brendan Gallagher",
        position: "Wing",
        team: "Montreal Canadiens",
        points: 8,
      },
    ],
    polls: [],
    participants: [],
    blogs: [],
    blog: {},
  },
  getters: {
    playerlist: (state) => {
      return state.playerlist;
    },
    player: (state) => (id: string) => {
      return state.playerlist.find((player: any) => player.id === id);
    },
    pollList: (state) => {
      return state.polls;
    },
    participantsList: (state) => {
      return state.participants;
    },
    poll: (state) => (id: string) => {
      if (state.polls.length === 0) {
        store.dispatch("getPolls");
      }
      return state.polls.find((poll: { id: string }) => poll.id === id);
    },
    blogsList: (state) => {
      return state.blogs;
    },
    blog: (state) => (path: string) => {
      if (state.blogs.length === 0) {
        store.dispatch("getBlogs");
      }
      return state.blogs.find(
        (blog: { path: string }) => blog.path.split("/")[2] === path
      );
    },
    blogData: (state) => {
      return state.blog;
    },
  },
  actions,
  mutations: {
    SET_POLLS(state, data) {
      state.polls = data;
    },
    SET_PARTICIPANTS(state, data) {
      state.participants = data;
    },
    SET_BLOGS(state, data) {
      state.blogs = data;
    },
    SET_BLOG(state, data) {
      state.blog = data;
    },
  },
});
