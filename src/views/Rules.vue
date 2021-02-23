<template>
  <div class="rules m-2">
    <!-- Banner -->
    <Banner
      :backgroundCover="'bg-cover bg-dnd-dragon lg:bg-center sm:bg-top h-auto text-white py-24 px-10 object-fill'"
    >
      <div>Rules</div>
    </Banner>
    <!-- Banner End -->

    <Nav>
      <a href="#rules">
        <button
          v-for="{ index, name } in rules"
          :key="index"
          @click="showRule(index)"
          class="block lg:inline-block text-md font-bold text-orange-500 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-blue-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
        >
          {{ name }}
        </button>
      </a>
    </Nav>

    <div
      id="rules"
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
    <Modal>
      <template #title
        ><h1>{{ sections.name }}</h1></template
      >
      <template #markdown><p v-html="html"></p></template>
    </Modal>
  </div>
</template>

<script lang="ts">
var showdown = require("showdown"),
  converter = new showdown.Converter({ tables: true });
converter.setFlavor("github");

import Banner from "../components/Banner.vue";
import Modal from "../components/Modal.vue";
import Nav from "../components/Nav.vue";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import axios from "axios";

export default defineComponent({
  components: {
    Banner,
    Modal,
    Nav,
  },
  setup() {
    const state = reactive({
      rules: Array,
      ruleSubsections: Array,
      sections: Array,
      result: null,
      text: "",
      html: "",
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
      state.text = data.desc;
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
</style>