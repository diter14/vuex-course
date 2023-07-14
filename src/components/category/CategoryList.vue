<template>
  <h2 class="is-size-2">Lista de categorías</h2>
  <div class="table-container">
    <table class="table is-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.title }}</td>
          <td>
            <span
              class="tag"
              :class="{
                'is-danger': category.type == 'gasto',
                'is-primary': category.type != 'gasto',
              }"
              >{{ category.type }}</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { toRefs } from "vue";
export default {
  props: {
    categoriesList: {
      type: Function,
      default() {
        return [];
      },
    },
  },
  setup(props) {
    const { categoryList } = toRefs(props);

    return {
      categories: categoryList,
    };
  },
};
</script>
