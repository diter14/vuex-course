import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  state() {
    return {
      categories: [],
      message: "Hello from store",
      showMessage: false,
    };
  },
  actions: {
    setMessage: ({ commit }, message) => {
      commit("SET_MESSAGE", message);
    },
  },
  mutations: {
    SET_MESSAGE: (state, message) => {
      state.message = message;
    },
  },
  plugins: debug ? [createLogger()] : [],
});
