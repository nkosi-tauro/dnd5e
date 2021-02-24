<template>
  <div class="backgrounds m-2">
    <!-- Banner -->
    <Banner
      :backgroundCover="'bg-cover bg-dnd-cube lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill'"
    >
      <div>Backgrounds</div>
    </Banner>
    <!-- Banner End -->


  </div>
</template>

<script lang="ts">
import Banner from "../components/Banner.vue";
import Nav from "../components/Nav.vue";
import { defineComponent,  onMounted, reactive, toRefs } from "vue";
import axios from 'axios'


export default defineComponent({
  components:{Banner, Nav},
  setup() {
    const state = reactive({
        acolyteData : Array
    })

    onMounted(async () => {
        const {data} = await axios.get('https://www.dnd5eapi.co/api/backgrounds/acolyte')
        state.acolyteData = data
        console.log(state.acolyteData)
    })
    return {...toRefs(state)};
  },
});
</script>

<style scoped>
</style>