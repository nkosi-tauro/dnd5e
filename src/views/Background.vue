<template>
  <div class="backgrounds m-2">
    <!-- Banner -->
    <Banner
      :backgroundCover="'bg-cover bg-dnd-cube lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill'"
    >
      <div>Starting Background</div>
    </Banner>
    <!-- Banner End -->

    <!-- backdround Card -->
    <div id="backdround-card" class="backdround-card">
      <div>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
          <div
            class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
          >
            <!-- Name -->
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-full">
              <h2 class="text-3xl text-gray-800 font-bold">
                {{ acolyteData.name }}
              </h2>

              <span class="text-blue-900 font-semibold italic"
                >Speed : {{ acolyteData.speed }}</span
              >

              <!-- Ability Bonuses Coming -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Ability Bonuses ...Coming Soon
              </p>

              <!-- Description -->
              <p class="text-blue-900 mt-4 font-semibold italic">Description</p>
              <p class="text-gray-600 font-semibold">{{ acolyteData.feature.name }}</p>
              <p class="text-gray-600">{{ acolyteData.feature.desc[0] }}</p>

              <!-- Age -->
              <p class="text-blue-900 mt-4 font-semibold italic">Personality Y</p>
              <p class="text-gray-600">{{ acolyteData.age }}</p>

              <!-- Size -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Size : {{ acolyteData.size }}
              </p>
              <p class="text-gray-600">{{ acolyteData.size_description }}</p>

              <!-- Profeciencies -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Starting Profeciencies
              </p>
              <p
                v-for="{ index, name } in acolyteData.starting_proficiencies"
                :key="index"
                class="text-gray-600"
              >
                <span>{{ name }}</span>
              </p>

              <!-- Languages -->
              <p class="text-blue-900 mt-4 font-semibold italic">Languages</p>
              <p
                v-for="{ index, name } in acolyteData.languages"
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
              <p class="text-gray-600">{{ acolyteData.language_desc }}</p>

              <!-- Traits -->
              <p class="text-blue-900 mt-4 font-semibold italic">Traits</p>
              <p
                v-for="{ index, name } in acolyteData.traits"
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
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import Banner from "../components/Banner.vue";
import Nav from "../components/Nav.vue";
import { defineComponent,  onBeforeMount,  onMounted, reactive, toRefs } from "vue";
import axios from 'axios'


export default defineComponent({
  components:{Banner, Nav},
  setup() {
    const state = reactive({
        acolyteData : Array
    })

    onBeforeMount(async () => {
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