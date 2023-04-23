const SET_MESSAGE = (state, message) => {
  state.message = message;
};

const CREATE_CATEGORY_REQUEST = (state) => {
  state.categoryRequest.loading = true;
  state.categoryRequest.error = false;
  state.categoryRequest.message = "";
};

const CREATE_CATEGORY_ERROR = (state, error) => {
  state.categoryRequest.loading = false;
  state.categoryRequest.error = true;
  state.categoryRequest.message = error;
  state.categoryRequest.id = null;
};

const CREATE_CATEGORY_SUCCESS = (state, categoryCreatedId) => {
  state.categoryRequest.loading = false;
  state.categoryRequest.error = false;
  state.categoryRequest.message = "";
  state.categoryRequest.id = categoryCreatedId;
};

const GET_CATEGORIES_REQUEST = (state) => {
  state.categoryRequest.loading = true;
  state.categoryRequest.error = false;
  state.categoryRequest.message = "";
};

const GET_CATEGORIES_ERROR = (state, error) => {
  state.categoryRequest.loading = false;
  state.categoryRequest.error = true;
  state.categoryRequest.message = error;
  state.GE.id = null;
};

const GET_CATEGORIES_SUCCESS = (state, categories) => {
  state.categoryRequest.loading = false;
  state.categoryRequest.error = false;
  state.categoryRequest.message = "";
  state.categories = categories;
};

export default {
  SET_MESSAGE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS,
};
