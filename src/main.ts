import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import { createApp } from "vue";
const pinia = createPinia();
import App from "./App.vue";
import "./style.css";

createApp(App).use(vuetify).use(BootstrapVue3).use(pinia).mount("#app");