<template>
    <div class="container">
        <h1>PAGE NOT FOUND</h1>
        <Button
        @click="back"
        :text="'Back Home'"
        />
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import { useRouter } from 'vue-router';
import Button from './Button.vue'

//HOOKS
const router = useRouter()

//METHODS
const back = () => {
    router.push('/home')
}
</script>

<style scoped lang="scss">
@import '@/styles/_mixins.scss';

    .container {
        @include flex(column, nowrap, center, center);

        h1 {
            margin: 20px 0;
        }
    }

</style>