<template>
  <div class="cart">
    <h1>CART</h1>
    <p v-if="cart.length === 0">The cart is empty</p>
    <div v-else class="cart-container">
      <div class="cart-info"  v-for="potion in cart">
        <h2>{{ potion?.attributes?.name }}</h2>
        <Button
        :text="'Remove'"
        @click="cartStore.removeOfCart(potion.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//IMPORTS
import { useCartStore } from '@/stores/cart/cartStore'; 
import { storeToRefs } from 'pinia';

//STORES
const cartStore = useCartStore();
// - Cart
const { cart } = storeToRefs(cartStore)

</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.cart {
  h1 {
    margin-bottom: $margin-bottom-title;
    margin-top: $margin-top-title;
    text-align: center;
  }
  .cart-container {
    @include flex(column, nowrap, center, center);
    width: 100%;
    margin: 0 1rem;

    @include media-670(){
      margin: 0;
    }

    .cart-info {
      @include flex(row, nowrap, space-between, center);
      width: 70%;
      border: $border;
      border-radius: $border-radius;
      margin: 0 1rem 1rem;
      padding: 0.7rem;

      @include media-670(){
        @include flex(column, nowrap, center, center);

        h2 {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>
