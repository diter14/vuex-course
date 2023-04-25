import { firebaseApp } from "./firebase";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDocs,
} from "firebase/firestore";
// Inicializar FireStore
const db = getFirestore(firebaseApp);

const createTransaction = async ({
  description,
  amount,
  type,
  category,
  date,
}) => {
  try {
    const categoryReference = doc(db, "categories", category);
    const transactionResponse = await addDoc(collection(db, "transactions"), {
      description,
      amount,
      type,
      category: categoryReference,
      date,
    });
    return transactionResponse.id;
  } catch (e) {
    console.log(e);
  }
};

const getTransactions = async () => {
  let transactions = [];
  const transactionsResponse = await getDocs(collection(db, "transactions"));
  transactionsResponse.forEach((transaction) => {
    transactions.push({ id: transaction.id, ...transaction.data() });
  });
  return transactions;
};

export default {
  createTransaction,
  getTransactions,
};
