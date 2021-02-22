<template>
  <div class="monsters m-2">
    <Banner
      :backgroundCover="'bg-cover bg-dnd-monster lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill'"
    >
      <div class="text-white">Monsters</div>
    </Banner>

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
                <a href="#monster-cards"
                  ><button
                    v-for="{ index, name } in monsters"
                    :key="index"
                    @click="
                      showMonster(index);
                      showCards();
                    "
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

    <!-- Race Cards -->
    <div id="monster-cards" class="monster-cards hidden">
      <div>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
          <div
            class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
          >
            <!-- Name -->
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-full">
              <h2 class="text-3xl text-gray-800 font-bold">
                {{ monsterDetails.name }}
              </h2>

              <!-- <span class="text-blue-900 font-semibold italic"
                >Speed : Walk {{ monsterDetails.speed.walk }} Fly: {{ monsterDetails.speed.fly }}  Climb: {{ monsterDetails.speed.climb }} </span
              > -->

              <!-- Ability Bonuses Coming -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Actions ...Coming Soon
              </p>

              <!-- Alignment -->
              <p class="text-blue-900 mt-4 font-semibold italic">Alignment</p>
              <p class="text-gray-600">{{ monsterDetails.alignment }}</p>

              <!-- Ratings -->
              <p class="text-blue-900 mt-4 font-semibold italic">Stats</p>
              <ul class="text-gray-600">
                <li>Armor Class : {{ monsterDetails.armor_class }}</li>
                <li>Type : {{ monsterDetails.type }}</li>
                <li>
                  Challenge Rating : {{ monsterDetails.challenge_rating }}
                </li>
                <li>Charisma : {{ monsterDetails.charisma }}</li>
                <li>Constitution : {{ monsterDetails.constitution }}</li>
                <li>Dexterity : {{ monsterDetails.dexterity }}</li>
                <li>HP : {{ monsterDetails.hit_points }}</li>
                <li>Hit Dice : {{ monsterDetails.hit_dice }}</li>
                <li>Intelligence : {{ monsterDetails.intelligence }}</li>
                <li>Strength : {{ monsterDetails.strength }}</li>
                <li>Wisdom : {{ monsterDetails.wisdom }}</li>
                <li>XP : {{ monsterDetails.xp }}</li>
                <li>Size : {{ monsterDetails.size }}</li>
              </ul>

              <!-- Damage Information -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Damage Information
              </p>
              <div>
              <span class="font-semibold italic">Immunities: </span>
              <ul
                class="inline text-gray-600"
                v-for="immunity in monsterDetails.damage_immunities"
                :key="immunity"
              >
                <li class="inline">{{ immunity }}</li>
              </ul>
              </div>
              
              <div>
              <span class="font-semibold italic">Resistance: </span>
              <ul
                class="inline text-gray-600"
                v-for="resistance in monsterDetails.damage_resistances"
                :key="resistance"
              >
               
                <li v-if="monsterDetails.damage_resistances.length > 0" class="inline">{{ resistance }} </li>
                <li v-else class="inline">None</li>
              </ul>
              </div>

              <div>
              <span class="font-semibold italic">Vulnerabilities: </span>
              <ul
                class="inline text-gray-600"
                v-for="vulnerability in monsterDetails.damage_vulnerabilities"
                :key="vulnerability"
              >
                <li class="inline">{{ vulnerability }}</li>
              </ul>
              </div>


              <!-- Abilities -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Special Abilities
              </p>
              <div
                v-for="{ name, desc, usage } in monsterDetails.special_abilities"
                :key="name"
                class="text-gray-600"
              >
                <span class="font-semibold italic">{{ name }}</span>
                <p>{{ desc }}</p>
                <p>Usage Type : {{ usage }} </p>
              </div>

              <!-- Languages -->
              <p class="text-blue-900 mt-4 font-semibold italic">Languages</p>
              <p class="text-gray-600">{{ monsterDetails.languages }}</p>

              <!-- Actions-->
              <p class="text-blue-900 mt-4 font-semibold italic">Actions</p>
              <div
                v-for="{ attack_bonus, desc,name } in monsterDetails.actions"
                :key="name"
                class="text-gray-600"
              >
                <p class="font-semibold italic">{{name}} <span class="text-xs"> Attack Bonus : {{attack_bonus}}</span></p>
                <p>{{desc}}</p>
              </div>
                <p></p>


              <!-- Actions Options Coming soon -->
              <p class="text-blue-900 mt-4 font-semibold italic">
                Actions Options ...Coming Soon
              </p>

              <!-- Subraces -->
              <p class="text-blue-900 mt-4 font-semibold italic">Sub Races</p>
              <p
                v-for="{ index, name } in monsterDetails.subraces"
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
  </div>
</template>

<script lang="ts">
import Banner from "../components/Banner.vue";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import axios from "axios";

export default defineComponent({
  components: { Banner },
  setup() {
    const state = reactive({
      monsters: Array,
      monsterDetails: Array,
      monsterActions: [],
    });

    onMounted(async () => {
      const { data } = await axios.get("https://www.dnd5eapi.co/api/monsters");
      state.monsters = data.results;
    });

    function showCards() {
      var element = document.getElementById("monster-cards");
      element!.classList.remove("hidden");
    }


    const showMonster = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/monsters/${index}`
      );

      state.monsterDetails = data;

      state.monsterActions = data.actions
      // console.log(state.monsterActions)
      // const newArr = state.monsterActions.forEach((x:any, i:any) => data.actions[i].damage)
      // console.log(newArr)
    };

    return { ...toRefs(state), showCards, showMonster };
  },
});
</script>

<style >
html {
  scroll-behavior: smooth;
}
</style>