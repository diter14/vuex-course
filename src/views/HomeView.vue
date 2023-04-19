<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="storeMessage" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();

    return {
      storeMessage: computed(() => store.state.message),
    };
  },
};
</script>
