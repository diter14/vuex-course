import getters from "./categories.getters";
import mutations from "./categories.mutations";
import actions from "./categories.actions";

const state = () => {
  return {
    categories: [],
    message: "Hello from store",
    showMessage: true,
  };
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
