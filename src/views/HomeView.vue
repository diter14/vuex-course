<template>
  <div class="block is-flex is-justify-content-center">
    <h1 class="title is-size-1">
      Saldo: <span class="has-text-primary">{{ saldo }}</span>
    </h1>
  </div>
  <h2 class="title is-size-2">Transacciones</h2>
  <template v-if="transactions.length == 0">
    <p class="has-text-centered">Obteniendo transacciones ...</p>
  </template>
  <div v-else class="table-container">
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Monto</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.id }}</td>
          <td>{{ transaction.description }}</td>
          <td>
            {{ transaction.amount * (transaction.type == "gasto" ? -1 : 1) }}
          </td>
          <td>
            <span
              class="tag"
              :class="{
                'is-danger': transaction.type == 'gasto',
                'is-primary': transaction.type != 'gasto',
              }"
              >{{ transaction.type }}</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const store = useStore();

    onMounted(() => {
      fetchTransactions();
    });

    // Computed properties
    const saldo = computed(() => {
      return store.getters["transactions/getSaldo"] || 0;
    });
    const transactions = computed(() => {
      return store.getters["transactions/getTransactions"] || [];
    });

    // Methods
    const fetchTransactions = () => {
      store.dispatch("transactions/fetchTransactions");
    };

    return {
      saldo,
      transactions,
    };
  },
};
</script>
