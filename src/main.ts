import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from "primevue/inputtext";
import ScrollPanel from "primevue/scrollpanel";

const app = createApp(App);

import App from "./App.vue";
import router from "./router";


app.use(createPinia());
app.use(router, PrimeVue);

app.component(`Button`, Button);
app.component('InputText', InputText)
app.component('ScrollPanel', ScrollPanel)

app.mount("#app");

