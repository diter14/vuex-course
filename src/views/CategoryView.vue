<template>
  <div>
    <h1>Categorias</h1>
    <p v-if="showMessage">{{ message }}</p>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      showMessage: computed(() => store.state.showMessage),
      message: computed(() => store.state.message),
    };
  },
};
</script>
