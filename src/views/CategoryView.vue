<template>
  <div>
    <h1>Categorias</h1>
    <input v-model="vMessage" type="text" />
    <button @click="setMessage">Update message</button>
    <br />
    <p v-if="showMessage">{{ message }}</p>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const vMessage = ref("");

    return {
      vMessage,
      showMessage: computed(() => store.state.showMessage),
      message: computed(() => store.state.message),
      setMessage: () => {
        store.commit("setMessage", vMessage.value);
      },
    };
  },
};
</script>
