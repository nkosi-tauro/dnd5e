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

              <!-- Description -->
              <p class="text-blue-900 mt-4 font-semibold italic">Description</p>
              <p class="text-gray-600 font-semibold">{{ acolyteData.feature.name }}</p>
              <p class="text-gray-600">{{ acolyteData.feature.desc[0] }}</p>

              <!-- Starting Equipment -->
              <p class="text-blue-900 mt-4 font-semibold italic">Starting Equipment ... Coming Soon</p>
              
              <!-- langauge Options -->
              <p class="text-blue-900 mt-4 font-semibold italic">language Options <span class="text-sm"> choose: {{acolyteData.language_options.choose}}</span></p>
              <p v-for="{index, name} in acolyteData.language_options.from" :key="index" class="text-gray-600"><span>{{ name }}</span></p>

              <!-- Traits -->
              <p class="text-blue-900 mt-4 font-semibold italic">Personality Traits <span class="text-sm"> choose: {{acolyteData.personality_traits.choose}}</span></p>
              <p class="text-gray-600"><span class="font-semibold">Trait 1: </span> {{ acolyteData.personality_traits.from[0] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Trait 2: </span>{{ acolyteData.personality_traits.from[1] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Trait 3: </span>{{ acolyteData.personality_traits.from[2] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Trait 4: </span>{{ acolyteData.personality_traits.from[3] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Trait 5: </span>{{ acolyteData.personality_traits.from[4] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Trait 6: </span>{{ acolyteData.personality_traits.from[5] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Trait 7: </span>{{ acolyteData.personality_traits.from[6] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Trait 8: </span>{{ acolyteData.personality_traits.from[7] }}</p>

              <!-- Ideals -->
              <p class="text-blue-900 mt-4 font-semibold italic">Ideals <span class="text-sm"> choose: {{acolyteData.ideals.choose}}</span></p>
              <div v-for="{index,name} in acolyteData.ideals.from[0].alignments" :key="index" class="text-gray-600 italic font-semibold inline">- {{name}} </div>
              <p class="text-gray-600"><span class="font-semibold"></span> {{ acolyteData.ideals.from[0].desc }}</p>
              <hr>
              <div v-for="{index,name} in acolyteData.ideals.from[1].alignments" :key="index" class="text-gray-600 italic font-semibold inline mt-1">- {{name}}</div>
              <p class="text-gray-600 "><span class="font-semibold"></span> {{ acolyteData.ideals.from[1].desc }}</p>
              <hr>
              <div v-for="{index,name} in acolyteData.ideals.from[2].alignments" :key="index" class="text-gray-600 italic font-semibold inline mt-1">- {{name}}</div>
              <p class="text-gray-600 "><span class="font-semibold"></span> {{ acolyteData.ideals.from[2].desc }}</p>
              <hr>
              <div v-for="{index,name} in acolyteData.ideals.from[3].alignments" :key="index" class="text-gray-600 italic font-semibold inline mt-1">- {{name}}</div>
              <p class="text-gray-600 "><span class="font-semibold"></span> {{ acolyteData.ideals.from[3].desc }}</p>
              <hr>
              <div v-for="{index,name} in acolyteData.ideals.from[4].alignments" :key="index" class="text-gray-600 italic font-semibold inline mt-1">- {{name}}</div>
              <p class="text-gray-600 "><span class="font-semibold"></span> {{ acolyteData.ideals.from[4].desc }}</p>


              <!-- Bonds-->
              <p class="text-blue-900 mt-4 font-semibold italic">Bonds <span class="text-sm"> choose: {{acolyteData.bonds.choose}}</span></p>
              <p class="text-gray-600"><span class="font-semibold">Bond 1: </span> {{ acolyteData.bonds.from[0] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Bond 2: </span> {{ acolyteData.bonds.from[1] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Bond 3: </span> {{ acolyteData.bonds.from[2] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Bond 4: </span> {{ acolyteData.bonds.from[3] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Bond 5: </span> {{ acolyteData.bonds.from[4] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Bond 6: </span> {{ acolyteData.bonds.from[5] }}</p>
              
              <!-- Flaws-->
              <p class="text-blue-900 mt-4 font-semibold italic">Flaws <span class="text-sm"> Choose: {{acolyteData.flaws.choose}}</span></p>
              <p class="text-gray-600"><span class="font-semibold">Flaw 1: </span> {{ acolyteData.flaws.from[0] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Flaw 2: </span> {{ acolyteData.flaws.from[1] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Flaw 3: </span> {{ acolyteData.flaws.from[2] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Flaw 4: </span> {{ acolyteData.flaws.from[3] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Flaw 5: </span> {{ acolyteData.flaws.from[4] }}</p>
              <p class="text-gray-600"><span class="font-semibold">Flaw 6: </span> {{ acolyteData.flaws.from[5] }}</p>
              
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
    })
    return {...toRefs(state)};
  },
});
</script>

<style scoped>
</style>