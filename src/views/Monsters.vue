<template>
  <div class="monsters m-2">
    <Banner
      :backgroundCover="'bg-cover bg-dnd-monster lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill'"
    >
      <div>Monsters</div>
    </Banner>
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