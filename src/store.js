import { createStore, createLogger } from "vuex";
import categories from "./store/categories";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    categories,
  },
  plugins: debug ? [createLogger()] : [],
});
