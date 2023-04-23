const getters = {
  getMessage: (state) => state.message,
  getShowMessage: (state) => state.showMessage,
  getCategoryLoadingRequest: (state) => state.categoryRequest.loading,
  getCategories: (state) => state.categories,
};

export default getters;
