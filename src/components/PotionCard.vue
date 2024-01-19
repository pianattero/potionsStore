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
            <button class="button-55">I want it!</button>
        </div>
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import type { PropType } from 'vue';
import { type PotionData } from '@/types/potions.types';


//PROPS
const props = defineProps({
    potions: {
        type: Object as PropType<PotionData>
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

        .button-55 {
            align-self: center;
            background-color: #fff;
            background-image: none;
            background-position: 0 90%;
            background-repeat: repeat no-repeat;
            background-size: 4px 3px;
            border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
            border-style: solid;
            border-width: 2px;
            box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
            box-sizing: border-box;
            color: #41403e;
            cursor: pointer;
            display: inline-block;
            font-family: Neucha, sans-serif;
            font-size: 1rem;
            line-height: 23px;
            outline: none;
            padding: .75rem;
            text-decoration: none;
            transition: all 235ms ease-in-out;
            border-bottom-left-radius: 15px 255px;
            border-bottom-right-radius: 225px 15px;
            border-top-left-radius: 255px 15px;
            border-top-right-radius: 15px 225px;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
        }

        .button-55:hover {
            box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
            transform: translate3d(0, 2px, 0);
            }

            .button-55:focus {
            box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
            }
    }
    
}
</style>