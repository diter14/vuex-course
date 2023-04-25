import getters from "./transactions.getters";
import mutations from "./transactions.mutations";
import actions from "./transactions.actions";

const state = () => {
  return {
    transactions: [],
    transactionRequest: {
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
