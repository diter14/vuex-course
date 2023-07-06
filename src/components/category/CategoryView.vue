<template>
  <div>
    <h1 class="is-size-1">Categorias</h1>
    <CategoryForm
      :category-form="categoryForm"
      :loading="isLoading"
      :handle-submit="createCategory"
    />
    <CategoryList :category-list="categoryList" />
  </div>
</template>
<script>
import CategoryForm from "@/components/category/CategoryForm.vue";
import CategoryList from "@/components/category/CategoryList.vue";
import useCategory from "@/composables/useCategory";
// import { useStore } from "vuex";
// import { computed, onMounted, reactive } from "vue";
import { onMounted } from "vue";

export default {
  components: {
    CategoryForm,
    CategoryList,
  },
  setup() {
    // Hooks - Composable
    const {
      categoryForm,
      isLoading,
      categoryList,
      createCategory,
      fetchCategories,
    } = useCategory();

    // Reactive variables

    // Lifeclycle events
    onMounted(() => {
      fetchCategories();
    });

    return {
      categoryForm,
      categoryList,
      createCategory,
      isLoading,
    };
  },
};
</script>
