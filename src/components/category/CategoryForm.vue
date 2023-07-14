<template>
  <form class="box">
    <div class="field">
      <label class="label">Título</label>
      <div class="control">
        <input
          v-model="category.title"
          class="input"
          type="text"
          placeholder="Título"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea
          v-model="category.description"
          class="textarea"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <label class="radio">
        <input v-model="category.type" type="radio" name="type" value="gasto" />
        Gasto
      </label>
      <label class="radio">
        <input
          v-model="category.type"
          type="radio"
          name="type"
          value="ingreso"
        />
        Ingreso
      </label>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click.prevent="submit()">
          Guardar
        </button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancelar</button>
      </div>
    </div>
    <div v-show="isLoading" class="card">
      <header class="card-header has-text-centered">
        <p class="card-header-title has-text-centered">Creando categoría...</p>
      </header>
    </div>
  </form>
</template>
<script>
import { toRefs } from "vue";
export default {
  props: {
    categoryForm: {
      type: Object,
      default(rawProps) {
        return {
          title: rawProps.title,
          description: rawProps.description,
          type: rawProps.type,
        };
      },
    },
    handleSubmit: {
      type: Function,
      default() {
        return () => {};
      },
    },
    loading: Boolean,
  },
  setup(props) {
    const { categoryForm, handleSubmit, loading } = toRefs(props);

    return {
      category: categoryForm,
      submit: handleSubmit,
      isLoading: loading,
    };
  },
};
</script>
<style></style>
