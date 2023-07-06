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
import { useStore } from "vuex";
import { computed, onMounted, reactive } from "vue";

export default {
  components: {
    CategoryForm,
    CategoryList,
  },
  setup() {
    // Reactive variables
    const store = useStore();
    const categoryForm = reactive({
      title: "",
      description: "",
      type: "",
    });

    // Lifeclycle events
    onMounted(() => {
      fetchCategories();
    });

    // Computed properties
    const isLoading = computed(() => {
      return store.getters["categories/getCategoryLoadingRequest"];
    });
    const categoryList = computed(() => {
      return store.getters["categories/getCategories"];
    });

    // Methods
    const createCategory = () => {
      store.dispatch("categories/createCategory", {
        title: categoryForm.title,
        description: categoryForm.description,
        type: categoryForm.type,
      });
    };

    const fetchCategories = () => {
      store.dispatch("categories/fetchCategories");
    };

    return {
      categoryForm,
      categoryList,
      createCategory,
      isLoading,
    };
  },
};
</script>
