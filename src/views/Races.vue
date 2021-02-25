<template>
  <div class="races m-2">
    <!-- Banner -->
    <Banner
      :backgroundCover="'bg-cover bg-dnd-beholder lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill'"
    >
      <div>Races</div>
    </Banner>

    <Nav>
      <a href="#race-cards"
        ><button
          v-for="{ index, name } in races"
          :key="index"
          @click="
            showRace(index);
            showCards();
          "
          class="block lg:inline-block text-md font-bold text-orange-500 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-blue-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
        >
          {{ name }}
        </button></a
      >
    </Nav>

    <!-- Race Cards -->
    <div id="race-cards" class="race-cards hidden">
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

              <span class="text-blue-900 font-semibold italic"
                >Speed : {{ indRaces.speed }}</span
              >

              <!-- Ability Bonuses Coming -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Ability Bonuses ...Coming Soon
              </p>

              <!-- Alignment -->
              <p class="text-blue-900 mt-4 font-semibold italic">Alignment</p>
              <p class="text-gray-600">{{ indRaces.alignment }}</p>

              <!-- Age -->
              <p class="text-blue-900 mt-4 font-semibold italic">Age</p>
              <p class="text-gray-600">{{ indRaces.age }}</p>

              <!-- Size -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Size : {{ indRaces.size }}
              </p>
              <p class="text-gray-600">{{ indRaces.size_description }}</p>

              <!-- Profeciencies -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Starting Profeciencies
              </p>
              <p
                v-for="{ index, name } in indRaces.starting_proficiencies"
                :key="index"
                class="text-gray-600"
              >
                <span>{{ name }}</span>
              </p>

              <!-- Languages -->
              <p class="text-blue-900 mt-4 font-semibold italic">Languages</p>
              <p
                v-for="{ index, name } in indRaces.languages"
                :key="index"
                class="text-gray-600"
              >
                <!-- <span>null</span> -->
                <a
                  onclick="document.getElementById('myModal').showModal()"
                  href="javascript:void(0);"
                  class="underline text-blue-500"
                  @click="lang(index)"
                  ><span>{{ name }}</span></a
                >
              </p>
              <p class="text-gray-600">{{ indRaces.language_desc }}</p>

              <!-- Traits -->
              <p class="text-blue-900 mt-4 font-semibold italic">Traits</p>
              <p
                v-for="{ index, name } in indRaces.traits"
                :key="index"
                class="text-gray-600"
              >
                <!-- <span >null</span> -->
                <a
                  href="javascript:void(0);"
                  onclick="document.getElementById('myModal').showModal()"
                  @click="traits(index)"
                  class="underline text-blue-500"
                  ><span>{{ name }}</span></a
                >
              </p>

              <!-- Traits Options Coming soon -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Trait Options ...Coming Soon
              </p>

              <!-- Subraces -->
              <p class="text-blue-900 mt-4 font-semibold italic">Sub Races</p>
              <p
                v-for="{ index, name } in indRaces.subraces"
                :key="index"
                class="text-gray-600"
              >
                <!-- <span >null</span> -->
                <span>{{ name }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Modal >
      <template #Racetitle>
        <div v-if="!istrait" class="load">
          {{ languages.name }}
          <p class="text-xs italic">Type: {{ languages.type }}</p>
          <p class="text-xs italic">
            Speakers: {{ languages.typical_speakers }}
          </p>
        </div>

        <div v-else>
          {{ trait.name }}
        </div>
      </template>
      <template #Racedesc>
        <span v-if="!istrait">{{ languages.desc }}</span>
        <span v-else>{{ trait.desc }} </span>
      </template>
    </Modal>
    
  </div>
</template>

<script lang="ts">
import Modal from "../components/Modal.vue";
import Banner from "../components/Banner.vue";
import Nav from "../components/Nav.vue";
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import axios from "axios";

export default defineComponent({
  components: {Modal, Banner, Nav },
  setup() {
    const state = reactive({
      races: Array,
      indRaces: Array,
      languages: Array,
      trait: Array,
      istrait: false,
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
    const lang = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/languages/${index}`
      );
      state.istrait = false;
      state.languages = data;
    };

    // trails
    const traits = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/traits/${index}`
      );
      state.istrait = true;
      state.trait = data;
    };

    return { ...toRefs(state), showRace, showCards, lang, traits };
  },
});
</script>

<style >
html {
  scroll-behavior: smooth;
}
</style>