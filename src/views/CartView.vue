<template>
    <div>
        <h1>CART</h1>
        <div class="cart-container">
            <h2>Potion Name</h2>
            <div class="cart-amout">
                <Button
                @click="cartStore.decrease"
                :text="'-'"
                :disabled="cartStore.amount === 0"
                />
                <p>{{ cartStore.amount }}</p>
                <Button
                @click="cartStore.increment"
                :text="'+'"
                :disabled="cartStore.amount === 10"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import type { PropType } from 'vue';
import Button from '@/components/core/Button.vue'
import { useCartStore } from '../stores/cart/cartStore';
import { type CartData } from '../types/cart.types';

//STORES
const cartStore = useCartStore();

//PROPS
const props = defineProps({
    potions: {
        type: Object as PropType<CartData>,
    }
});

</script>

<style scoped lang="scss">
    .cart-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
        padding: 10px;
        border: 2px black solid;

        .cart-amout {
            display: flex;
            align-items: center;

            p {
                margin: 0 5px;
            }
        }
    }
</style>