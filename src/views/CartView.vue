<template>
  <div class="cart">
    <h1>CART</h1>
    <div class="cart-container">
      <h2>Potion Name</h2>
      <div class="cart-amout"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.cart {
  h1 {
    margin-bottom: $margin-bottom-title;
    margin-top: $margin-top-title;
    text-align: center;
  }
  .cart-container {
    @include flex(row, nowrap, space-between, center);
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
}
</style>
