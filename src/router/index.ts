import { createRouter, createWebHistory } from "vue-router";

import PageNotFound from "@/components/core//PageNotFound.vue";
import HomeView from "../views/HomeView.vue";
import PotionsViewVue from "@/views/PotionsView.vue";
import MainViewVue from "@/views/MainView.vue";
import SpellsViewVue from "@/views/SpellsView.vue";
import CartViewVue from "@/views/CartView.vue";
import FavoritesViewVue from "@/views/FavoritesView.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: PageNotFound,
  },
  {
    path: "",
    component: MainViewVue,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
      },
      {
        path: "/potions",
        name: "potions",
        component: PotionsViewVue,
      },
      {
        path: "/spells",
        name: "spells",
        component: SpellsViewVue,
      },
      {
        path: "/favorites",
        name: "favorites",
        component: FavoritesViewVue,
      },
      {
        path: "/cart",
        name: "cart",
        component: CartViewVue,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
