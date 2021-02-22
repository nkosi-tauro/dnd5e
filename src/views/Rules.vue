<template>
  <div class="rules m-2">
    <!-- Banner -->
    <div
      class="bg-cover bg-dnd-dragon lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill"
    >
      <div class="text-center">
        <p class="font-bold text-3xl text-black uppercase">Rules</p>
      </div>
    </div>
    <div v-for="{ index, name } in rules" :key="index" class="rulesList">
      <a href="#rulesData">
        <div
          @click="showRule(index)"
          class="flex flex-col gap-4 lg:p-4 p-2 rounde-lg m-2"
        >
          <div
            class="flex items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg"
          >
            <div class="lg:flex md:flex items-center">
              <div
                class="h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3"
              ></div>

              <div class="flex flex-col">
                <div class="text-sm leading-3 text-gray-700 font-bold w-full">
                  {{ name }}
                </div>

                <div class="text-xs text-gray-600 w-full italic">
                  Click to view section.
                </div>
              </div>
            </div>

            <svg
              class="h-6 w-6 mr-1 invisible md:visible lg:visible xl:visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 201"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>

    <div
      v-for="{ index, name } in ruleSubsections"
      :key="index"
      @click="showRuleSubsection(index)"
      class="m-2 mt-5 border border-1 px-10 py-6 content"
      onclick="document.getElementById('myModal').showModal()"
    >
      <div class="grid grid-cols-3 grid-rows-1">
        <p id="rulesData">{{ name }}</p>
      </div>
    </div>

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
            {{ sections.name }}
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
          class="flex w-full h-full py-10 px-2 bg-gray-200 rounded text-gray-500" id="pizza"
        >
          <div v-html="html"></div>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script lang="ts">
var showdown  = require('showdown'),
    converter = new showdown.Converter()


import { defineComponent, onMounted, reactive, toRefs } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const state = reactive({
      rules: Array,
      ruleSubsections: Array,
      sections: Array,
      result: null,
      text : "",
      html : ""
    });

    onMounted(async () => {
      const { data } = await axios.get("https://www.dnd5eapi.co/api/rules");

      state.rules = data.results;
    });

    const showRule = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/rules/${index}`
      );
      state.ruleSubsections = data.subsections;
    };

    // rules subsection
    const showRuleSubsection = async (index: string) => {
      const { data } = await axios.get(
        `https://www.dnd5eapi.co/api/rule-sections/${index}`
      );

      state.sections = data;
      state.text = data.desc
      state.html = converter.makeHtml(state.text);
      
    };
    return { ...toRefs(state), showRule, showRuleSubsection };
  },
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

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