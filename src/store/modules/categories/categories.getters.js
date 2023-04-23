const getters = {
  getMessage: (state) => state.message,
  getShowMessage: (state) => state.showMessage,
  getCategoryLoadingRequest: (state) => state.categoryRequest.loading,
};

export default getters;
