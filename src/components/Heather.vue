<template>
  <header>
    <RouterLink to="/home">
      <img src="/logo.png" alt="Logo" class="logo" />
    </RouterLink>
    <button @click="toggleMenu">
      <img src="@/assets/menu.svg" />
    </button>
    <nav class="nav" :class="{ active: isActive }">
      <div class="nav-links">
        <RouterLink
          v-for="(link, index) in links"
          :key="index"
          class="link"
          :to="link.route"
          @click="toggleMenuLink"
        >
          {{ link.name }}
          <img v-show="link.icon" :src="link.icon" />
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
//IMPORTS
import { ref } from "vue";
import { RouterLink } from "vue-router";
import type { linkRouter } from "@/types/menu.types";

//DATA
const isActive = ref(false);

const links: linkRouter[] = [
  {
    name: "Home",
    route: "/home",
  },
  {
    name: "Potions",
    route: "/potions",
  },
  {
    name: "Spells",
    route: "/spells",
  },
  {
    icon: "/src/assets/cart.svg",
    route: "/cart",
  },
  {
    icon: "/src/assets/fav-white.svg",
    route: "/favorites",
  },
];

//METHODS
const toggleMenu = () => {
  isActive.value = !isActive.value;
};

const toggleMenuLink = () => {
  isActive.value = false;
};
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 25px 40px;
  background-color: $c-cal-poly-green;
  z-index: 1;

  @include flex(row, wrap, space-between, center);

  button {
    display: none;
    background-color: transparent;

    @include media-720() {
      display: block;
    }
  }

  .logo {
    width: 50px;
  }

  .nav {
    @include media-720() {
      width: 100%;
      opacity: 0;
      height: 0vh;
      pointer-events: none;
      overflow: hidden;
      transition: all 0.5s ease;
      @include flex(column, nowrap, center, center);

      &.active {
        opacity: 1;
        height: 50vh;
        pointer-events: auto;
      }
    }

    .nav-links {
      @include flex(row, wrap, flex-end, center);

      @include media-720() {
        @include flex(column, nowrap, center, center);
      }

      .link {
        margin: 0 10px;
        color: $c-magnolia;

        @include media-720() {
          margin: 15px 0;
        }

        &.router-link-active {
          color: $c-apple-green;
        }
      }
    }
  }
}
</style>
