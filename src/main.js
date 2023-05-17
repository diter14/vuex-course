import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import "bulma/css/bulma.min.css";

const app = createApp(App);
// Hack para ocultar las alertas
app.config.warnHandler = () => null;
//
app.use(router);
app.use(store);
app.mount("#app");
