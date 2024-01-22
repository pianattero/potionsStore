<template>
    <div class="card-container">
        <Modal
        @emit-close="toggleModal"
        :modal-active="modalActive"
        >
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
                    <h2 class="card-title">· {{ potions?.attributes.name }} · 
                    </h2>

                <img :src='potions?.attributes?.image || "/missing_potion.png"' />
                <p><i>{{ potions?.attributes.effect || missingInfoMSG}}</i></p>
                <hr>
                <p><strong>Characteristics:</strong><br>{{ potions?.attributes?.characteristics || missingInfoMSG }}</p>
            </div>
    
            <div class="card-info-2">
                <div v-if="ingredients">
                    <p><strong>Ingredients:</strong></p>
                    <ul>
                        <li v-for="ingredient in ingredients">{{ ingredient }}</li>
                    </ul>
                </div>
                <div v-if="potions?.attributes?.difficulty">
                    <p><strong>Difficulty:</strong><br>{{ potions?.attributes?.difficulty || missingInfoMSG }}</p>
                </div>
            </div>
        </div>

        <div class="card-btn">
            <div class="card-btn-cart">
                <Button
                    @click="decreaseAmount"
                    :text="'-'"
                    :disabled="amount === 0"
                    />
                    <p>{{ amount }}</p>
                    <Button
                    @click="increaseAmount"
                    :text="'+'"
                    :disabled="amount === 10"
                    />
            </div>
            <Button
            :text="'More info'"
            @click="toggleModal"
            :disabled="modalActive"
                    />
        </div>
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import { ref } from 'vue';
import type { PropType } from 'vue';
import { type PotionData } from '@/types/potions.types';
import { useCartStore } from '@/stores/cart/cartStore';
import Button from '../core/Button.vue'
import Modal from '@/components/modals/Modal.vue';
import CardDescription from './CardDescription.vue'


//STORES
const cartStore = useCartStore();

//PROPS
const props = defineProps({
    potions: {
        type: Object as PropType<PotionData>,
    }
});

//DATA
const ingredients = props.potions?.attributes.ingredients?.split(',')
const missingInfoMSG = "No information found.";
const amount = ref(0);
const modalActive = ref(false) 

//METHOD
const increaseAmount = () => {
    amount.value ++
    
};
const decreaseAmount = () => {
    amount.value --
}
const toggleModal = () => {
    modalActive.value = !modalActive.value
}
</script>

<style scoped lang="scss">
@import '@/styles/_mixins.scss';

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

        .card-btn-cart {
            display: flex;
            align-items: center;
            margin: 10px 0 20px;
        }
    }
    
}
</style>