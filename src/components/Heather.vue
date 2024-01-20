<template>
    <header>
        <RouterLink to="/home"> <img src="/logo.png" alt="Logo" class="logo"/> </RouterLink>
        <nav class="nav-links">
          <RouterLink class="link" to="/home">Home</RouterLink>
          <RouterLink class="link" to="/potions">Potions</RouterLink>
          <RouterLink class="link" to="/spells">Spells's Guide</RouterLink>
          <RouterLink class="link" to="/cart">                <img class="logo-repsol" src="../assets/cart.svg"  />
</RouterLink>
        </nav>
    </header>
</template>

<script setup lang="ts">
//IMPORTS
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 25px 40px;
    background-color: rgba(20, 19, 19, 0.661);

    .nav-links {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 50px;
    }

    .link {
        margin: 0 10px;
        color: whitesmoke;
    }

    .cart-icon {
        width: 20px;
    }

}
</style>