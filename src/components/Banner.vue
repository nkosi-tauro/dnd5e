<template>
  <div>
    <div
      :class="backgroundCover"
    >
      <div class="text-center">
        <p class="font-bold text-3xl text-black uppercase"><slot></slot></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
        backgroundCover : 
        {
        type: String,
        required: true,
        default: ""
        }
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>