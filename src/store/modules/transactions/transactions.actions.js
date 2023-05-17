import TransactionService from "@/services/TransactionService";
import {
  CREATE_TRANSACTION_ERROR,
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
} from "./transactions.types";

const createTransaction = async (
  { commit },
  { description, amount, type, category, date }
) => {
  try {
    commit(CREATE_TRANSACTION_REQUEST);
    let transactionCreatedId = await TransactionService.createTransaction({
      description,
      amount,
      type,
      category,
      date,
    });
    commit(CREATE_TRANSACTION_SUCCESS, transactionCreatedId);
  } catch (error) {
    commit(CREATE_TRANSACTION_ERROR, error);
  }
};

const fetchTransactions = async ({ commit }) => {
  try {
    commit(GET_TRANSACTIONS_REQUEST);
    let transactions = await TransactionService.getTransactions();
    commit(GET_TRANSACTIONS_SUCCESS, transactions);
  } catch (error) {
    commit(GET_TRANSACTIONS_ERROR);
  }
};
export default {
  createTransaction,
  fetchTransactions,
};
