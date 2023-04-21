import firebaseApp from "./firebase";
import { getFireStore, addDoc, collection } from "firebase";

// Inicializar FireStore
const db = getFireStore(firebaseApp);

const createCategory = async ({ title, description, type }) => {
  try {
    const categoryResponse = await addDoc(
      collection(db, "categories", { title, description, type })
    );
    return categoryResponse.id;
  } catch (e) {
    console.log(e);
  }
};

const getCategories = () => {};
const getCategoryById = () => {};

export default {
  createCategory,
  getCategories,
  getCategoryById,
};
