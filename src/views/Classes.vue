<template>
  <div class="classes m-2">
    <!-- Banner -->
    <Banner
      :backgroundCover="'bg-cover bg-dnd-descent lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill'"
    >
      <div>Classes</div>
    </Banner>
    <!-- Banner End -->

    <header class="mt-2">
      <div class="py-4 px-2 lg:mx-4 xl:mx-12 text-center">
        <div class="">
          <nav class="flex items-center justify-between flex-wrap">
            <div
              id="main-nav2"
              class="w-full flex-grow lg:flex items-center lg:w-auto"
            >
              <div
                class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8"
              >
                <a href="#race-cards"
                  ><button
                    v-for="{ index, name } in classes"
                    :key="index"
                    @click="showClass(index)"
                    class="block lg:inline-block text-md font-bold text-orange-500 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-blue-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                  >
                    {{ name }}
                  </button></a
                >
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>

    
  </div>
</template>

<script lang="ts">
import Banner from "../components/Banner.vue";
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import axios from "axios";

export default defineComponent({
  components: { Banner },
  setup() {
    const state = reactive({
      classes : Array,
      classData : Array
    })

    onMounted(async () => {
      const {data} = await axios.get('https://www.dnd5eapi.co/api/classes')

      state.classes = data.results
    })

    const showClass = async (index:string) => {
      const {data} = await axios.get(`https://www.dnd5eapi.co/api/classes/${index}`)

      state.classData = data
      console.log(state.classData)
    }

    return {...toRefs(state), showClass};
  },
});
</script>

<style scoped>
</style>