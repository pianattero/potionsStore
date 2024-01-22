<template>
    <header>
        <RouterLink to="/home"> <img src="/logo.png" alt="Logo" class="logo"/> </RouterLink>
        <button @click="toggleMenu">
            <img src="@/assets/menu.svg"/>
        </button>
        <nav
        class="nav"
        :class="{active: isActive}"
        >
        <div class="nav-links">
            <RouterLink @click="toggleMenuLink" class="link" to="/home">Home</RouterLink>
            <RouterLink @click="toggleMenuLink" class="link" to="/potions">Potions</RouterLink>
            <RouterLink @click="toggleMenuLink" class="link" to="/spells">Spells's Guide</RouterLink>
            <RouterLink @click="toggleMenuLink" class="link cart-icon" to="/cart"><img class="logo-repsol" src="../assets/cart.svg"  /></RouterLink>
        </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
//IMPORTS
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

//DATA
const isActive = ref(false)

//METHODS
const toggleMenu = () => {
    isActive.value = !isActive.value
};

const toggleMenuLink = () => {
    isActive.value = false
};

</script>

<style scoped lang="scss">
@import '@/styles/_mixins.scss';

header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 25px 40px;
    // background-color: $c-yellow-green;
    background-color: rgba(20, 19, 19, 0.661);
    z-index: 1;

    @include flex(row, wrap, space-between, center);

    button {
        display: none;
        background-color: none;

        @include media-720(){
            display: block
        }
    }

    .logo {
                width: 50px;
            }

    .nav {
        @include media-720(){
            width: 100%;
            opacity: 0;
            height: 0vh;
            pointer-events: none;
            overflow: hidden;
            transition: all .5s ease;
            @include flex(column, nowrap, center, center);

            &.active {
                opacity: 1;
                height: 50vh;
                pointer-events: auto;
                background-color: black;
                border-radius: 50%;
            }
        }

        .nav-links {

            @include flex(row, wrap, flex-end, center);

            @include media-720(){
                @include flex(column, nowrap, center, center)
                }
        
            .link {
                margin: 0 10px;
                color: whitesmoke;
        
                @include media-720(){
                    margin: 10px 0;
                }

                &.router-link-active {
                color: cadetblue;
                }
            }
        
            .cart-icon {
                width: 20px;
            }
        }
    }
}
</style>