import firebaseApp from "./firebase";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
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

const getCategories = async () => {
  try {
    let categories = [];
    const categoriesResponse = await getDocs(collection(db, "categories"));
    categoriesResponse.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() });
    });
    return categories;
  } catch (e) {
    console.log(e);
  }
};

const getCategoryById = () => {};

export default {
  createCategory,
  getCategories,
  getCategoryById,
};
