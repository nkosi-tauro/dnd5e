<template>
  <div>
    <header>
      <div class="py-4 px-2 lg:mx-4 xl:mx-12">
        <div class="">
          <nav class="flex items-center justify-between flex-wrap">
            <div class="flex items-center flex-no-shrink text-white mr-6">
              <img
                src="../assets/dnd.png"
                alt=""
                class="h-10 xl:h-10 "
              />
            </div>
            <div class="block lg:hidden">
              <button
                class="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
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
            </div>
            <div
              id="main-nav"
              class="w-full flex-grow lg:flex items-center lg:w-auto hidden"
            >
              <div
                class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8"
              >
                <a
                  href="#home"
                  class="block lg:inline-block text-md font-bold text-orange-500 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  CHARACTERS
                </a>
                <a
                  href="#home"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  BACKGROUNDS
                </a>
                <a
                  href="#home"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  CLASSES
                </a>
                <a
                  href="#home"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  RACES
                </a>
                <a
                  href="#home"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  EQUIPMENT
                </a>
                <a
                  href="#home"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  GAME MECHANICS
                </a>
                <a
                  href="#home"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  RULES
                </a>
              </div>
              <div class="text-2xl my-1 mx-3">
                <img src="img/shopping.png" class="h-6" alt="" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>