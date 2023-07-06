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

  getGastos: (state) => {
    return state.transactions
      .filter((transaction) => {
        return transaction.type == "gasto";
      })
      .map((transaction) => transaction.amount);
  },
  getIngresos: (state) => {
    return state.transactions
      .filter((transaction) => {
        return transaction.type == "ingreso";
      })
      .map((transaction) => transaction.amount);
  },

  getGastoTotal: (state) => {
    let gastoTotal = 0;
    state.transactions.forEach((transaction) => {
      gastoTotal += transaction.type == "gasto" ? transaction.amount : 0;
    });
    return gastoTotal;
  },
  getIngresoTotal: (state) => {
    let ingresoTotal = 0;
    state.transactions.forEach((transaction) => {
      ingresoTotal += transaction.type == "ingreso" ? transaction.amount : 0;
    });
    return ingresoTotal;
  },
};

export default getters;
