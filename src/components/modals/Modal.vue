import Modal from '@/components/modals/Modal.vue';
<template>
    <Transition name="modal-animation">
        <div v-show="props.modalActive" class="modal">
            <Transition name="modal-animation-inner">
                <div v-show="props.modalActive" class="modal-inner">
                    <img
                    @click="emit('emit-close')"
                    src="../../assets/close.svg"/>
                    <!-- Modal Content -->
                    <slot/>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup lang="ts">
//PROPS 
const props = defineProps({
    modalActive: {
    type: Boolean,
    default: false,
    },
 });

 //EMITS
 const emit = defineEmits(['emit-close']);
</script>

<style scoped lang="scss">
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 15px;

    background-color: rgba(147, 147, 147, 0.14);

    .modal-inner {
        position: relative;
        height: 100%;
        width: 100%;
        background-color: rgb(255, 255, 255);
        padding: 64px 16px;
    }
}
</style>

  