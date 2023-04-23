const SET_MESSAGE = (state, message) => {
  state.message = message;
};

const CREATE_CATEGORY_REQUEST = (state) => {
  state.categoryRequest.loading = true;
  state.categoryRequest.error = false;
  state.categoryRequest.message = "";
  // console.log(`CREATE_CATEGORY_REQUEST:`, state.categoryRequest);
};

const CREATE_CATEGORY_ERROR = (state, error) => {
  state.categoryRequest.loading = false;
  state.categoryRequest.error = true;
  state.categoryRequest.message = error;
  state.categoryRequest.id = null;
  // console.log(`CREATE_CATEGORY_ERROR:`, state.categoryRequest);
};

const CREATE_CATEGORY_SUCCESS = (state, categoryCreatedId) => {
  state.categoryRequest.loading = false;
  state.categoryRequest.error = true;
  state.categoryRequest.message = "";
  state.categoryRequest.id = categoryCreatedId;
  // console.log(`CREATE_CATEGORY_SUCCESS:`, state.categoryRequest);
};
export default {
  SET_MESSAGE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_SUCCESS,
};
