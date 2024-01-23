<template>
  <div class="card-container">
    <Modal @emit-close="toggleModal" :modal-active="modalActive">
      <div class="modal-content">
        <h3><i>Wanna know more?</i></h3>
        <CardDescription
          v-for="description in descriptions"
          :key="description.title"
          :title="description.title"
          :description="description.description"
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
            <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
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
      <button @click="addFav(potions)" :disabled="findFav(potions!.id)">
        <img v-if="findFav(potions!.id)" src="@/assets/fav-selected.svg" />
        <img v-else src="@/assets/fav-select.svg" />
      </button>

      <Button
        :text="'More info'"
        @click="toggleModal"
        :disabled="modalActive"
      />
      
      <button @click="addToCart(potions)" :disabled="findInCart(potions!.id)">
        <img v-if="findInCart(potions!.id)" src="@/assets/cart-added.svg" />
        <img v-else src="@/assets/cart-add.svg" />
      </button>
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
import type { cardDescription } from "@/types/card-description.types";

//STORES
const cartStore = useCartStore();
const favoritesStore = useFavoritestore();
// - Favorites
const { addFav, findFav } = favoritesStore;
// - Cart
const { addToCart, findInCart } = cartStore

//PROPS
const props = defineProps({
  potions: {
    type: Object as PropType<PotionData>,
  },
});

//DATA
const ingredients = props.potions?.attributes.ingredients?.split(",");
const missingInfoMSG = "No information found.";
const modalActive = ref(false);

const descriptions: cardDescription[] = [
  {
    title: "Side Effects",
    description: props.potions?.attributes.side_effects || missingInfoMSG,
  },
  {
    title: "Inventors",
    description: props.potions?.attributes.side_effects || missingInfoMSG,
  },
  {
    title: "Manufacturers",
    description: props.potions?.attributes.side_effects || missingInfoMSG,
  },

];

//METHOD
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.card-container {
  @include flex(column, nowrap, space-between, space-evenly);
  width: 25rem;
  border: $border;
  border-radius: $border-radius;
  padding: 2rem;
  margin: 0 1rem 2rem;

  .modal-content {
    h3 {
      text-align: center;
    }
  }

  .card-info-1 {
    text-align: center;
    margin: 10px;

    img {
      height: 11rem;
      margin: 1rem 0;
    }

    p {
      padding: 0.5rem 0;
    }

    h2 button {
      margin-left: 0.5rem;
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
      margin: 0.5rem;
    }
  }

  .card-btn {
    @include flex(row, nowrap, center, center);
    margin-top: 2rem;

    button {
      margin: 0 1rem;
      background-color: transparent;
    }
  }
}
</style>
