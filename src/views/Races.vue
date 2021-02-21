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
                  @click="showRace(index); showCards()"
                  
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
    <div  id="race-cards" class="race-cards hidden">
      <div>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
          <div
            class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
          >
          <!-- Name -->
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-full">
                <h2 class="text-3xl text-gray-800 font-bold">{{ indRaces.name }}</h2>

                <span class="text-blue-900  font-semibold italic">Speed : {{indRaces.speed}}</span>

                <!-- Ability Bonuses Coming -->
                <p class="text-blue-900 mt-4 font-semibold italic">Ability Bonuses ...Coming Soon</p>

                <!-- Alignment -->
                <p class="text-blue-900 mt-4 font-semibold italic">Alignment</p>
                <p class=" text-gray-600">{{ indRaces.alignment }}</p>

                <!-- Age -->
                <p class="text-blue-900 mt-4 font-semibold italic">Age</p>
                <p class=" text-gray-600">{{ indRaces.age }}</p>

                <!-- Size -->
                <p class="text-blue-900 mt-4 font-semibold italic">Size : {{ indRaces.size }}</p>
                <p class=" text-gray-600">{{indRaces.size_description}}</p>
                

                <!-- Profeciencies -->
                <p class="text-blue-900 mt-4 font-semibold italic">Starting Profeciencies</p>
                <p v-for="{index, name} in indRaces.starting_proficiencies " :key="index" class=" text-gray-600">
                    <span>{{name}}</span>
                </p>

                <!-- Languages -->
                <p class="text-blue-900 mt-4 font-semibold italic">Languages</p>
                <p v-for="{index, name} in indRaces.languages " :key="index" class=" text-gray-600">
                <!-- <span>null</span> -->
                    <a href="javascript:void(0);" class="underline text-blue-500" @click="lang(index)"><span>{{name}}</span></a>
                </p>
                <p class="text-gray-600">{{indRaces.language_desc}}</p>

                <!-- Traits -->
                <p class="text-blue-900 mt-4 font-semibold italic">Traits</p>
                <p v-for="{index, name} in indRaces.traits" :key="index" class=" text-gray-600">
                <!-- <span >null</span> -->
                    <a href="javascript:void(0);" @click="traits(index)" class="underline text-blue-500"><span>{{name}}</span></a>
                </p>

                <!-- Traits Options Coming soon -->
                <p class="text-blue-900 mt-4 font-semibold italic">Trait Options ...Coming Soon</p>
              
                <!-- Subraces -->
                <p class="text-blue-900 mt-4 font-semibold italic">Sub Races</p>
                <p v-for="{index, name} in indRaces.subraces" :key="index" class=" text-gray-600">
                    <!-- <span >null</span> -->
                    <span>{{name}}</span>
                </p>
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
      languages : Array,
      traits : Array,
      subrace : Array
    });

    onMounted(async () => {
      const { data } = await axios.get("https://www.dnd5eapi.co/api/races");
      state.races = data.results;
    });

    const showRace = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/races/${index}`
      );

      state.indRaces = data;
    };
    function showCards() {
        var element = document.getElementById("race-cards");
        element!.classList.remove("hidden");
    }


    // language
    const lang = async (index:string) => {
        const {data} = await axios.get(`https://www.dnd5eapi.co/api/languages/${index}`)
        console.log(data)
        state.languages = data;
    }

    // trails
    const traits = async (index:string) => {
        const {data} = await axios.get(`https://www.dnd5eapi.co/api/traits/${index}`)
        console.log(data)
        state.traits = data;
    }

    return { ...toRefs(state), showRace, showCards, lang, traits };
  },
});
</script>

<style scoped>
</style>