<template>
  <div class="game-mechanics m-2">
    <!-- Banner -->
    <Banner :backgroundCover="'bg-cover bg-dnd-descent lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill'">
      <div>Game Mechanics</div>
    </Banner>
    <!-- Banner End -->

    <table class="border-collapse w-full mt-2 shadow-md">
      <thead>
        <tr>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Game Mechanics
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Click on Type for more Info
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
        >
          <td
            class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Condition Mechanic</span
            >
            <h2 class="font-semibold">Conditions</h2>
            <p>
              Conditions alter a creature’s capabilities in a variety of ways
              and can arise as a result of a spell, a class feature, a monster’s
              attack, or other effect. Most conditions, such as blinded, are
              impairments, but a few, such as invisible, can be advantageous
            </p>
          </td>

          <td
            class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Condition Types</span
            >
            <div class="name space-x-2 space-y-2 flex-grow flex-1">
              <button
                @click="showCondition(index)"
                v-for="{ index, name } in conditions"
                :key="index"
                onclick="document.getElementById('myModal').showModal()"
                class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold"
              >
                {{ name }}
              </button>
            </div>
          </td>
        </tr>
        <tr
          class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
        >
          <td
            class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Damage Mechanic</span
            >
            <h2 class="font-semibold">Damage Types</h2>
            <p>
              Different attacks, damaging spells, and other harmful effects deal
              different types of damage. Damage types have no rules of their
              own, but other rules, such as damage resistance, rely on the types
            </p>
          </td>

          <td
            class="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Damage Types</span
            >
            <div class="name space-x-2 space-y-2 flex-grow flex-1">
              <button
                @click="showDamage(index)"
                v-for="{ index, name } in damageTypes"
                :key="index"
                onclick="document.getElementById('myModal').showModal()"
                class="rounded bg-red-400 py-1 px-3 text-xs font-bold"
              >
                {{ name }}
              </button>
            </div>
          </td>
        </tr>
        <tr
          class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
        >
          <td
            class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Magic Mechanic</span
            >
            <h2 class="font-semibold">Magic Schools</h2>
            <p>
              Academies of magic group spells into eight categories called
              schools of magic. Scholars, particularly wizards, apply these
              categories to all spells, believing that all magic functions in
              essentially the same way, whether it derives from rigorous study
              or is bestowed by a deity.
            </p>
          </td>
          <td
            class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Magic Schools</span
            >
            <div class="name space-x-2 space-y-2 flex-grow flex-1">
              <button
                @click="showMagic(index)"
                v-for="{ index, name } in magicSchools"
                :key="index"
                onclick="document.getElementById('myModal').showModal()"
                class="rounded bg-green-400 py-1 px-3 text-xs font-bold"
              >
                {{ name }}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <Modal>
      <template #Querytitle><h1>{{conditionalQuery.name}}</h1></template>
      <template #Querydesc >{{conditionalQuery.desc}}</template>
    </Modal>
  </div>
</template>

<script lang="ts">
import Banner from '../components/Banner.vue'
import Modal from '../components/Modal.vue'
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import axios from "axios";

export default defineComponent({
  
  components: {Banner, Modal},
  setup() {
    const state = reactive({
      conditions: Array,
      damageTypes: Array,
      magicSchools: Array,
      conditionalQuery: [],
    });

    onMounted(async () => {
      // Conditions
      const { data } = await axios.get(
        "https://www.dnd5eapi.co/api/conditions"
      );
      state.conditions = data.results;

      //   Damage Types
      const { data: damage } = await axios.get(
        "https://www.dnd5eapi.co/api/damage-types"
      );
      state.damageTypes = damage.results;

      //   Magic Schools
      const { data: magic } = await axios.get(
        "https://www.dnd5eapi.co/api/magic-schools"
      );
      state.magicSchools = magic.results;
    });

    const showCondition = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/conditions/${index}`
      );

      state.conditionalQuery = data;
    };

    const showDamage = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/damage-types/${index}`
      );

      state.conditionalQuery = data;
    };

    const showMagic = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/magic-schools/${index}`
      );

      state.conditionalQuery = data;
    };

    return { ...toRefs(state), showCondition, showDamage, showMagic };
  },
});
</script>

<style scoped>
</style>