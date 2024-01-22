<template>
  <button class="button-39">
    <span>{{ props.text }}</span>
  </button>
</template>

<script setup lang="ts">
// PROPS
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.button-39 {
  background-color: $c-magnolia;
  border: 1px solid $c-hunter-green;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: $c-raisin-black;
  font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-decoration: none $c-hunter-green solid;
  text-decoration-thickness: auto;
  box-shadow: 0 2px 4px 0 $c-raisin-black;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-39:hover {
  background-color: rgb(249, 250, 251);
}

.button-39:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.button-39:focus-visible {
  box-shadow: none;
}
</style>
