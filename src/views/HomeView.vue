<template>
  <div class="home-container">
    <h1>Welcome to J. Pippins Official Potion Store!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium
      quo, ad quidem recusandae itaque, vero veniam reiciendis commodi provident
      corrupti. Error praesentium nisi odio perferendis rerum dolores at
      possimus doloremque numquam tempore atque corporis hic tenetur, quibusdam
      rem, ad consectetur.
    </p>
    <div class="home-btns">
      <Button
        class="btn"
        @click="potionsPg"
        :text="'Check out our available Potions!'"
      />
      <Button
        class="btn"
        @click="spellsPg"
        :text="'Know everything about Spells!'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
//IMPORTS
import { useRouter } from "vue-router";

//HOOKS
const router = useRouter();

//METHODS
const potionsPg = () => {
  router.push("/potions");
};
const spellsPg = () => {
  router.push("/spells");
};
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.home-container {
  @include flex(column, nowrap, center, center);
  min-height: calc(100vh - $header-height);
  background: linear-gradient(
      rgba(12, 12, 12, 0.473),
      rgba(0, 0, 0, 0.267)
    ),
    url("/bg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  text-align: center;

  h1,
  p {
    padding: 10px;
    color: $c-magnolia;
    margin: 0 2rem
  }

  .home-btns {
    @include flex(row, wrap, space-evenly, center);
    width: 100%;
    margin: 10px;

    .btn {
      margin: 10px;
    }
  }
}
</style>
