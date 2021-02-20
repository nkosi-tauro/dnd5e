<template>
  <div class="game-mechanics m-2">Game Mechanics {{mech}}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

export default defineComponent({
  setup() {
    const state = reactive({
      mech: [],
    });

    onMounted(async () => {
      const { data } = await axios.get(
        "https://www.dnd5eapi.co/api/conditions"
      );

      state.mech = data
    });

    return {...toRefs(state)};
  },
});
</script>

<style scoped>
</style>