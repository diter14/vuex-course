<template>
  <form>
    <div class="field">
      <label class="label">Título</label>
      <div class="control">
        <input v-model="title" class="input" type="text" placeholder="Título" />
      </div>
    </div>
    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea
          v-model="description"
          class="textarea"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <label class="radio">
        <input v-model="type" type="radio" name="type" value="gasto" />
        Gasto
      </label>
      <label class="radio">
        <input v-model="type" type="radio" name="type" value="ingreso" />
        Ingreso
      </label>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click.prevent="createCategory()">
          Guardar
        </button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancelar</button>
      </div>
    </div>
  </form>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const title = ref("");
    const description = ref("");
    const type = ref("");

    const createCategory = () => {
      store.dispatch("categories/createCategory", {
        title: title.value,
        description: description.value,
        type: type.value,
      });
    };

    return {
      title,
      description,
      type,
      createCategory,
    };
  },
};
</script>
<style></style>
