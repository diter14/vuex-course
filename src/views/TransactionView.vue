<template>
  <div>
    <h1 class="is-size-1">Transacciones</h1>
    <TransactionForm
      :transaction-form="transactionForm"
      :handle-submit="createTransaction"
      :categories-list="categories"
    />
  </div>
</template>
<script>
import TransactionForm from "@/components/transaction/TransactionForm.vue";
import { useStore } from "vuex";
import { computed, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    TransactionForm,
  },
  setup() {
    // Reactive variables
    const store = useStore();
    const router = useRouter();
    const transactionForm = reactive({
      description: "",
      amount: 0,
      type: "",
      category: "",
      date: "",
    });

    // Lifeclycle events
    onMounted(() => {
      fetchCategories();
    });

    // Computed properties
    const categories = computed(() => {
      return store.getters["categories/getCategories"] || [];
    });

    // Methods
    const createTransaction = () => {
      store.dispatch("transactions/createTransaction", {
        description: transactionForm.description,
        amount: transactionForm.amount,
        type: transactionForm.type,
        category: transactionForm.category,
        date: transactionForm.date,
      });
      router.push({ name: "home" });
    };

    const fetchCategories = () => {
      store.dispatch("categories/fetchCategories");
    };

    return {
      transactionForm,
      createTransaction,
      categories,
    };
  },
};
</script>
