import firebaseApp from "./firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// Inicializar FireStore
const db = getFirestore(firebaseApp);

const createCategory = async ({ title, description, type }) => {
  try {
    const categoryResponse = await addDoc(collection(db, "categories"), {
      title,
      description,
      type,
    });
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
