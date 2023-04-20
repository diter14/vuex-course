<template>
  <div class="home">
    <h1>{{ storeMessage }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const store = useStore();

    return {
      storeMessage: computed(() => store.getters["categories/getMessage"]),
    };
  },
};
</script>
