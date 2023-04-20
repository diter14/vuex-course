<template>
  <div>
    <h1 class="is-size-1">Categorias</h1>
    <CategoryForm />
  </div>
</template>
<script>
import CategoryForm from "@/components/category/CategoryForm.vue";
// import { computed, ref } from "vue";
// import { useStore } from "vuex";

export default {
  components: {
    CategoryForm,
  },
  setup() {
    // const store = useStore();

    return {};
  },
};
</script>
