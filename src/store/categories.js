const state = () => {
  return {
    categories: [],
    message: "Hello from store",
    showMessage: true,
  };
};

const getters = {
  getMessage: (state) => state.message,
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
  state,
  getters,
  actions,
  mutations,
};
