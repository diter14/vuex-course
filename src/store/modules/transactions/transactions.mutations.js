const CREATE_TRANSACTION_REQUEST = (state) => {
  state.transactionRequest.loading = true;
  state.transactionRequest.error = false;
  state.transactionRequest.message = "";
};

const CREATE_TRANSACTION_ERROR = (state, error) => {
  state.transactionRequest.loading = false;
  state.transactionRequest.error = true;
  state.transactionRequest.message = error;
  state.transactionRequest.id = null;
};

const CREATE_TRANSACTION_SUCCESS = (state, transactionCreatedId) => {
  state.transactionRequest.loading = false;
  state.transactionRequest.error = false;
  state.transactionRequest.message = "";
  state.transactionRequest.id = transactionCreatedId;
};

const GET_TRANSACTIONS_REQUEST = (state) => {
  state.transactionRequest.loading = true;
  state.transactionRequest.error = false;
  state.transactionRequest.message = "";
  state.transactions = [];
};

const GET_TRANSACTIONS_ERROR = (state, error) => {
  state.transactionRequest.loading = false;
  state.transactionRequest.error = true;
  state.transactionRequest.message = error;
  state.GE.id = null;
};

const GET_TRANSACTIONS_SUCCESS = (state, transactions) => {
  state.transactionRequest.loading = false;
  state.transactionRequest.error = false;
  state.transactionRequest.message = "";
  state.transactions = transactions;
};

export default {
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_ERROR,
  CREATE_TRANSACTION_SUCCESS,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_SUCCESS,
};
