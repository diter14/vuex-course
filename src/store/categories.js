const state = () => {
  return {
    categories: [],
    message: "Hello from store",
    showMessage: true,
  };
};

const getters = {
  getMessage: (state) => state.message,
  getShowMessage: (state) => state.showMessage,
};

const actions = {
  setMessage: ({ commit }, message) => {
    commit("SET_MESSAGE", message);
  },
};

const mutations = {
  SET_MESSAGE: (state, message) => {
    state.message = message;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
