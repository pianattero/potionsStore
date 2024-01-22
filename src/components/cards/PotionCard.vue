<template>
  <div class="card-container">
    <Modal @emit-close="toggleModal" :modal-active="modalActive">
      <div class="modal-content">
        <h3><i>Wanna know more?</i></h3>
        <CardDescription
          :title="'Side Effects'"
          :description="potions?.attributes.side_effects || missingInfoMSG"
        />
        <CardDescription
          :title="'Inventors'"
          :description="potions?.attributes.inventors || missingInfoMSG"
        />
        <CardDescription
          :title="'Manufacturers'"
          :description="potions?.attributes.manufacturers || missingInfoMSG"
        />
      </div>
    </Modal>
    <div v-show="!modalActive">
      <div class="card-info-1">
        <h2 class="card-title">· {{ potions?.attributes.name }} ·</h2>

        <img :src="potions?.attributes?.image || '/missing_potion.png'" />
        <p>
          <i>{{ potions?.attributes.effect || missingInfoMSG }}</i>
        </p>
        <hr />
        <p>
          <strong>Characteristics:</strong><br />{{
            potions?.attributes?.characteristics || missingInfoMSG
          }}
        </p>
      </div>

      <div class="card-info-2">
        <div v-if="ingredients">
          <p><strong>Ingredients:</strong></p>
          <ul>
            <li v-for="ingredient in ingredients">{{ ingredient }}</li>
          </ul>
        </div>
        <div v-if="potions?.attributes?.difficulty">
          <p>
            <strong>Difficulty:</strong><br />{{
              potions?.attributes?.difficulty || missingInfoMSG
            }}
          </p>
        </div>
      </div>
    </div>

    <div class="card-btn">
      <div class="card-btn-1">
        <Button @click="decreaseAmount" :text="'-'" :disabled="amount === 0" />
        <p>{{ amount }}</p>
        <Button @click="increaseAmount" :text="'+'" :disabled="amount === 10" />
      </div>
      <div class="card-btn-2">
        <Button
          :text="'More info'"
          @click="toggleModal"
          :disabled="modalActive"
        />

        <button @click="addFav(potions)" :disabled="findFav(potions!.id)">
          <img v-if="findFav(potions!.id)" src="@/assets/fav-black-full.svg" />
          <img v-else src="@/assets/fav-black.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//IMPORTS
import { ref } from "vue";
import type { PropType } from "vue";
import CardDescription from "./CardDescription.vue";
import Modal from "@/components/modals/Modal.vue";
import { type PotionData } from "@/types/potions.types";
import { useCartStore } from "@/stores/cart/cartStore";
import { useFavoritestore } from "@/stores//favorites/favorites";

//STORES
const cartStore = useCartStore();
const favoritesStore = useFavoritestore();
// - Favorites
const { addFav, findFav } = favoritesStore;

//PROPS
const props = defineProps({
  potions: {
    type: Object as PropType<PotionData>,
  },
});

//DATA
const ingredients = props.potions?.attributes.ingredients?.split(",");
const missingInfoMSG = "No information found.";
const amount = ref(0);
const modalActive = ref(false);

//METHOD
const increaseAmount = () => {
  amount.value++;
};
const decreaseAmount = () => {
  amount.value--;
};
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.card-container {
  @include flex(column, nowrap, space-between, space-evenly);
  width: 350px;
  border: 3px black double;
  border-radius: 4px;
  padding: 20px;
  margin: 15px;

  .modal-content {
    h3 {
      text-align: center;
    }
  }

  .card-info-1 {
    text-align: center;
    margin: 10px;

    img {
      height: 120px;
      margin: 10px 0;
    }

    p {
      padding: 5px 0;
    }

    h2 button {
      margin-left: 5px;
    }

    .card-title {
      font-weight: bold;
      text-align: center;
    }
  }

  .card-info-2 {
    @include flex(row, nowrap, space-evenly, center);
    width: 100%;

    div {
      margin: 5px;
    }
  }

  .card-btn {
    @include flex(column, nowrap, center, center);

    p {
      margin: 0 5px;
    }

    .card-btn-1 {
      @include flex(row, nowrap, none, center);
      margin: 10px 0 20px;
    }

    .card-btn-2 {
      @include flex(row, nowrap, no, center);

      button {
        margin: 0 10px;
        background-color: transparent;
      }
    }
  }
}
</style>
@/stores/favorites/favorites
