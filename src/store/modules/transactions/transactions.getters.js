const getters = {
  getTransactions: (state) => state.transactions,
  getSaldo: (state) => {
    let saldo = 0;
    state.transactions.forEach((transaction) => {
      saldo =
        saldo + transaction.amount * (transaction.type == "gasto" ? -1 : 1);
    });
    return saldo;
  },
};

export default getters;
