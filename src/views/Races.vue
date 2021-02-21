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
                <button
                  v-for="{ index, name } in races"
                  :key="index"
                  @click="showRace(index)"
                  class="block lg:inline-block text-md font-bold text-orange-500 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-blue-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  {{ name }}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <!-- Race Cards -->
    <div class="race-cards">
      <div>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
          <div
            class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
          >
          <!-- Name -->
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-full">
              <h2 class="text-3xl text-gray-800 font-bold">
                {{ indRaces.name }}
              </h2>
              <!-- Alignment -->
              <p class="text-blue-900 mt-4 font-semibold italic">Alignment</p>
              <p class=" text-gray-600">
                {{ indRaces.alignment }}
              </p>
              <!-- Age -->
              <p class="text-blue-900 mt-4 font-semibold italic">Age</p>
              <p class=" text-gray-600">
                {{ indRaces.age }}
              </p>
              <!-- Size -->
              <p class="text-blue-900 mt-4 font-semibold italic">Size : {{ indRaces.size }}</p>
              <p class=" text-gray-600">
                {{indRaces.size_description}}
              </p>
              <!-- Profeciencies -->
              <p class="text-blue-900 mt-4 font-semibold italic">Starting Profeciencies</p>
              <p v-for="{index, name} in indRaces.starting_proficiencies " :key="index" class=" text-gray-600">
                <span v-if="indRaces.starting_proficiencies.length === 0">null</span>
                <span v-else>{{name}}</span>
              </p>
              <!-- Languages -->
              <p class="text-blue-900 mt-4 font-semibold italic">Languages</p>
              <p v-for="{index, name} in indRaces.languages " :key="index" class=" text-gray-600">
                <!-- <span>null</span> -->
                <span >{{name}}</span>
              </p>
              <p class="text-gray-600">{{indRaces.language_desc}}</p>
              <!-- Traits -->
              <p class="text-blue-900 mt-4 font-semibold italic">Traits</p>
              <p v-for="{index, name} in indRaces.traits" :key="index" class=" text-gray-600">
                <!-- <span >null</span> -->
                <span >{{name}}</span>
              </p>
              <!-- Subraces -->
              <p class="text-blue-900 mt-4 font-semibold italic">Sub Races</p>
              <p v-for="{index, name} in indRaces.subraces" :key="index" class=" text-gray-600">
                <!-- <span >null</span> -->
                <span >{{name}}</span>
              </p>
              <!-- <div class="mt-8">
                <a
                  href="#"
                  class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
                  >Start Now</a
                >
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const state = reactive({
      races: Array,
      indRaces: Array,
    });

    onMounted(async () => {
      const { data } = await axios.get("https://www.dnd5eapi.co/api/races");
      state.races = data.results;
      console.log(state.races);
    });

    const showRace = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/races/${index}`
      );

      console.log(data);
      state.indRaces = data;
    };
    return { ...toRefs(state), showRace };
  },
});
</script>

<style scoped>
</style>