const SET_MESSAGE = (state, message) => {
  state.message = message;
};

const CREATE_CATEGORY = (state, categoryCreatedId) => {
  state.categories.push(categoryCreatedId);
};

export default {
  SET_MESSAGE,
  CREATE_CATEGORY,
};
