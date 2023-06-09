import CategoryService from "../../../services/CategoryService";
import {
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "./categories.types";
const setMessage = ({ commit }, message) => {
  commit("SET_MESSAGE", message);
};

const createCategory = async ({ commit }, { title, description, type }) => {
  try {
    commit(CREATE_CATEGORY_REQUEST);
    let categoryCreatedId = await CategoryService.createCategory({
      title,
      description,
      type,
    });
    commit(CREATE_CATEGORY_SUCCESS, categoryCreatedId);
  } catch (e) {
    console.log(e);
    commit(CREATE_CATEGORY_ERROR, e);
  }
};

const fetchCategories = async ({ commit }) => {
  try {
    commit(GET_CATEGORIES_REQUEST);
    let categories = await CategoryService.getCategories();
    console.log(categories);
    commit(GET_CATEGORIES_SUCCESS, categories);
  } catch (e) {
    console.log(e);
    commit(GET_CATEGORIES_ERROR, e);
  }
};

export default {
  setMessage,
  createCategory,
  fetchCategories,
};
