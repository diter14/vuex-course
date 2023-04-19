<template>
  <div>
    <h1>Categorias</h1>
    <input v-model="vMessage" type="text" />
    <button @click="setMessage">Update message</button>
    <br />
    <p>{{ message }}</p>
    <p>Mensaje invertido: {{ messageReversed }}</p>
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
      showMessage: computed(() => store.getters["categories/getShowMessage"]),
      message: computed(() => store.getters["categories/getMessage"]), // Es una buena práctica acceder a la información del state mediante getters, no se recomienda acceder de forma directa
      messageReversed: computed(() =>
        store.getters["categories/getMessage"].split("").reverse().join("")
      ),
      setMessage: () => {
        // store.commit("setMessage", vMessage.value); // No es buena práctica mutar los valores del state directamente. Es mejor usar actions mediante el método "dispatch"
        store.dispatch("categories/setMessage", vMessage.value);
      },
    };
  },
};
</script>
