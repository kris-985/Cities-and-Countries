import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";

import HomePage from "./pages/HomePage.vue";
import CitiesPage from "./pages/CitiesPage.vue";
import CountriesPage from "./pages/CountriesPage.vue";

const routes = [
  { path: '/', component: HomePage },
  { path: '/cities', component: CitiesPage },
  { path: '/countries', component: CountriesPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
