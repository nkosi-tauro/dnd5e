<template>
  <div>
    <header>
      <div class="w-full py-4 px-2 shadow-md">
        <div class="">
          <nav class="flex items-center justify-between flex-wrap">
            <div class="flex items-center flex-no-shrink text-white mr-6">
              <router-link to="/"><img src="../assets/dnd.png" alt="" class="h-10 xl:h-10" /></router-link>
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
                <router-link
                  to="/backgrounds"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  BACKGROUNDS
                </router-link>
                <router-link
                  to="/classes"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  CLASSES
                </router-link>
                <router-link
                  to="/races"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  RACES
                </router-link>
                <router-link
                  to="/"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  EQUIPMENT
                </router-link>
                <router-link
                  to="/monsters"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  MONSTERS
                </router-link>
                <router-link
                  to="/mechanics"
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  GAME MECHANICS
                </router-link>
                <router-link
                  class="block lg:inline-block text-md font-bold text-gray-900 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-red-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                  to="/rules"
                >
                  RULES</router-link
                >
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
// Navbar Toggle
document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the "main-nav" element
        var $target = document.getElementById("main-nav");

        // Toggle the class on "main-nav"
        $target!.classList.toggle("hidden");
      });
    });
  }
});

import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>