<template>
    <div class="card-container">
        <div>
            <div class="card-info-1">
                <h2 class="card-title">· {{ potions?.attributes.name }} ·</h2>
                <img :src='potions?.attributes?.image || "/missing_potion.png"' />
                <p>{{ potions?.attributes.effect || missingInfoMSG}} </p>
                <hr>
                <p>Characteristics: {{ potions?.attributes?.characteristics || missingInfoMSG }}</p>
            </div>
    
            <div class="card-info-2">
                <div v-if="ingredients" >
                    <p>Ingredients:</p>
                    <ul>
                        <li v-for="ingredient in ingredients">{{ ingredient }}</li>
                    </ul>
                </div>
                <div v-if="potions?.attributes?.difficulty">
                    <p>Difficulty: <br> {{ potions?.attributes?.difficulty || missingInfoMSG }}</p>
                </div>
            </div>
        </div>

        <div class="card-btn">
            <Button
            :text="'I want it'"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import type { PropType } from 'vue';
import { type PotionData } from '@/types/potions.types';
import Button from '../Button.vue'


//PROPS
const props = defineProps({
    potions: {
        type: Object as PropType<PotionData>,
    }
});

//DATA
const ingredients = props.potions?.attributes.ingredients?.split(',')
const missingInfoMSG = "We don't count with that information yet, stay tuned!"


</script>

<style scoped lang="scss">
.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    border: 3px black double;
    border-radius: 4px;
    padding: 10px;
    margin: 15px;

    .card-title {
        font-weight: bold;
        text-align: center;
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
    }

    .card-info-2 {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;

        div {
            margin: 5px;
        }
    }

    .card-btn {
        margin: 20px;
    }
    
}
</style>