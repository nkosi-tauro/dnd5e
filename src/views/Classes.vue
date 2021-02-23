<template>
  <div class="classes m-2">
    <!-- Banner -->
    <Banner
      :backgroundCover="'bg-cover bg-dnd-cube lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill'"
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
                <a href="#class-cards"
                  ><button
                    v-for="{ index, name } in classes"
                    :key="index"
                    @click="showClass(index); showCards()"
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

    <!-- Class Cards -->
    <div id="class-cards" class="class-cards hidden">
      <div>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
          <div
            class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
          >
            <!-- Name -->
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-full">
              <h2 class="text-3xl text-gray-800 font-bold">
                {{ classData.name }}
              </h2>

              <!-- Proficiencies -->
              <p class="text-blue-900 mt-4 font-semibold italic">Proficiencies</p>
              <p v-for="{index, name} in classData.proficiencies" :key="index" class="text-gray-600">{{ name }}</p>

              <!-- Spell Casting -->
              <p class="text-blue-900 mt-4 font-semibold italic">Class Abilities </p>
              <div v-for="{desc, name} in  spellCasting" :key="name" class="text-gray-600">
                <h3 class="font-semibold text-black">{{name}}</h3>
                <p >{{desc[0]}}</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
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
      classes: Array,
      classData: Array,
      spellCasting : Array
    });

    onMounted(async () => {
      const { data } = await axios.get("https://www.dnd5eapi.co/api/classes");

      state.classes = data.results;
    });

    const showClass = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/classes/${index}`
      );

      state.classData = data;
      state.spellCasting = data.spellcasting.info
      console.log(state.spellCasting);
    };

    function showCards() {
      var element = document.getElementById("class-cards");
      element!.classList.remove("hidden");
    }

    return { ...toRefs(state), showClass , showCards};
  },
});
</script>

<style >
html{
  scroll-behavior: smooth;
}
</style>