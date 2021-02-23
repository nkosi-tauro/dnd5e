<template>
  <div class="classes m-2">
    <!-- Banner -->
    <Banner
      :backgroundCover="'bg-cover bg-dnd-descent lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill'"
    >
      <div>Classes</div>
    </Banner>
    <!-- Banner End -->
  </div>
</template>

<script lang="ts">
import Banner from '../components/Banner.vue'
import { defineComponent } from "vue";

export default defineComponent({
  components: {Banner},
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>