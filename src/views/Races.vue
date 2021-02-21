<template>
  <div class="races m-2">
    <div
      class="bg-cover bg-dnd-beholder bg-center h-auto text-white py-24 px-10 object-fill"
    >
      <div class="text-center">
        <p class="font-bold text-3xl text-black uppercase">Races</p>
      </div>
    </div>

    <header class="mt-2">
      <div class="py-4  px-2 lg:mx-4 xl:mx-12 text-center">
        <div class="">
          <nav class="flex items-center justify-between flex-wrap">
            <!-- <div class="block lg:hidden float-right">
              <button
                class="navbar flex  items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
              >
                <svg
                  class="fill-current h-6 w-6 text-gray-700"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div> -->
            <div
              id="main-nav2"
              class="w-full flex-grow lg:flex items-center lg:w-auto "
            >
              <div
                class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8"
              >
                <a v-for="{index, name} in races" :key="index"
                  @click="showRace(index)"
                  class="block lg:inline-block text-md font-bold text-orange-500 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-blue-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  {{name}}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive, onMounted, toRefs } from "vue";
import axios from 'axios'

export default defineComponent({
  setup() {
    const state = reactive({
        races : Array

    })

    onMounted(async() => {
        const {data} = await axios.get("https://www.dnd5eapi.co/api/races")
        state.races = data.results
        console.log(state.races)
        
    })
    return {...toRefs(state)};
  },
});
</script>

<style scoped>
</style>