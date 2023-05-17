<template>
  <form class="box">
    <div class="field">
      <label class="label">Monto</label>
      <div class="control">
        <input
          v-model="transaction.amount"
          class="input"
          type="number"
          placeholder="Título"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Categoría</label>
      <div class="select">
        <select v-model="transaction.category">
          <option value="">Selecciona Categoría</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.title }}
          </option>
        </select>
      </div>
    </div>
    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea
          v-model="transaction.description"
          class="textarea"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Fecha</label>
      <div class="control">
        <input
          v-model="transaction.date"
          class="input"
          type="date"
          placeholder="Fecha"
        />
      </div>
    </div>
    <div class="field is-hidden">
      <label class="label">Tipo</label>
      <div class="control">
        <input
          v-model="transaction.type"
          class="input"
          type="hidden"
          placeholder="Tipo"
        />
      </div>
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
  </form>
</template>
<script>
import { computed, toRefs, watch } from "vue";
export default {
  props: {
    transactionForm: {
      description: String,
      amount: Number,
      type: String,
      category: String,
      date: String,
    },
    handleSubmit: Function,
    categoriesList: Array,
  },
  setup(props) {
    const { transactionForm, handleSubmit, categoriesList } = toRefs(props);

    // computed properties
    const transactionType = computed(() => {
      let categorySelected = null;
      if (categoriesList.value.length) {
        categorySelected = categoriesList.value.find((category) => {
          return category.id == transactionForm.value.category;
        });
        return categorySelected?.type;
      }
      return null;
    });

    // watchers
    watch(transactionType, (newValue, oldValue) => {
      if (newValue != null && newValue != oldValue) {
        transactionForm.value.type = newValue;
      }
    });

    return {
      transaction: transactionForm,
      submit: handleSubmit,
      categories: categoriesList,
      transactionType,
    };
  },
};
</script>
<style></style>
