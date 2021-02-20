<template>
  <div class="game-mechanics m-2">
    Game Mechanics
    <table class="border-collapse w-full">
      <thead>
        <tr>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Game Mechanics
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
              >Game Mechanics</span
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
            class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
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
              >Game Mechanics</span
            >
            <h2 class="font-semibold">Damage Types</h2>
            <p>
              Different attacks, damaging spells, and other harmful effects deal
              different types of damage. Damage types have no rules of their
              own, but other rules, such as damage resistance, rely on the types
            </p>
          </td>

          <td
            class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
          >
            <div class="name space-x-2 space-y-2 flex-grow flex-1">
              <button
                @click="showDamage(index)"
                v-for="{ index, name } in damageTypes"
                :key="index"
                onclick="document.getElementById('myModal').showModal()"
                class="rounded bg-red-400 py-1 px-3 text-xs font-bold"
              >
                {{name}}
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
              >Game Mechanics</span
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
            class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
          >
            <div class="name space-x-2 space-y-2 flex-grow flex-1">
              <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold"
                >inactive</span
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <dialog
      id="myModal"
      class="h-auto w-11/12 md:w-1/2 p-5 bg-white rounded-md"
    >
      <div class="flex flex-col w-full h-auto">
        <!-- Header -->
        <div class="flex w-full h-auto justify-center items-center">
          <div
            class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
          >
            {{ conditionalQuery.name }}
          </div>
          <div
            onclick="document.getElementById('myModal').close();"
            class="flex w-1/12 h-auto justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <!--Header End-->
        </div>
        <!-- Modal Content-->
        <div
        
          class="flex w-full h-full py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500"
        >
          {{ conditionalQuery.desc }} 
        </div>
        <br />
        <!-- <div
          class="flex w-full h-full py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500"
        >
          {{conditionalQuery.desc[1]}}
        </div> -->
        <!-- End of Modal Content-->
      </div>
    </dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const state = reactive({
      conditions: Array,
      damageTypes: Array,
      conditionalQuery: [],
      show_modal: false,
    });

    onMounted(async () => {
      // Conditions
      const { data } = await axios.get(
        "https://www.dnd5eapi.co/api/conditions"
      );
      state.conditions = data.results;

      //   Damage Types
      const {data:data2}  = await axios.get(
        "https://www.dnd5eapi.co/api/damage-types"
      );
      state.damageTypes = data2.results;
      console.log(state.damageTypes)

      //   Magic Schools


    });

    const showCondition = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/conditions/${index}`
      );

      state.conditionalQuery = data;
      console.log(state.conditionalQuery);
    };

    const showDamage = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/damage-types/${index}`
      );

      state.conditionalQuery = data;
      console.log(state.conditionalQuery);
    };

    return { ...toRefs(state), showCondition, showDamage };
  },
});
</script>

<style scoped>
dialog[open] {
  animation: appear 0.15s cubic-bezier(0, 1.8, 1, 1.8);
}

dialog::backdrop {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(54, 54, 54, 0.5));
  backdrop-filter: blur(3px);
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>