import { computed, reactive } from "vue";
import { useStore } from "vuex";

const useCategory = () => {
  // Reactive variables
  const store = useStore();
  const categoryForm = reactive({
    title: "",
    description: "",
    type: "",
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
    isLoading,
    categoryList,
    createCategory,
    fetchCategories,
  };
};

export default useCategory;
