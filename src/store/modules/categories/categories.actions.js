import CategoryService from "../../../services/CategoryService";
const setMessage = ({ commit }, message) => {
  commit("SET_MESSAGE", message);
};

const createCategory = async ({ commit }, { title, description, type }) => {
  try {
    let categoryCreatedId = await CategoryService.createCategory({
      title,
      description,
      type,
    });
    commit("CREATE_CATEGORY", categoryCreatedId);
  } catch (e) {
    console.log(e);
  }
};
export default {
  setMessage,
  createCategory,
};
