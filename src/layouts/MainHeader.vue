<template>
  <nav
    class="navbar has-background-black-bis"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="https://diterterrones.com/img/diter-terrones-isotipo-white.svg"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        :class="toggleMenu ? 'is-active' : ''"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggleMenu = !toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="toggleMenu ? 'is-active' : ''"
    >
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Dashboard</router-link>
        <router-link to="/categorias" class="navbar-item"
          >Categorias</router-link
        >
        <router-link to="/transacciones" class="navbar-item"
          >Transacciones</router-link
        >
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const toggleMenu = ref(false);

    return {
      toggleMenu,
    };
  },
};
</script>
