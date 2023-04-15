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
  actions: {},
  mutations: {},
  plugins: debug ? [createLogger()] : [],
});
