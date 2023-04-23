import getters from "./categories.getters";
import mutations from "./categories.mutations";
import actions from "./categories.actions";

const state = () => {
  return {
    categories: [],
    message: "Hello from store",
    showMessage: true,
    categoryRequest: {
      loading: false,
      error: false,
      message: "",
      id: null,
    },
  };
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
