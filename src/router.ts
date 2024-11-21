import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/index.vue";
import Buttons from "./pages/buttons.vue";
import Table from "./pages/table.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/tabela", name: "Tabela", component: Table },
  { path: "/botoes", name: "Botões", component: Buttons },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
