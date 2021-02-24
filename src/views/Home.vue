<template class="container ">
   <div class="mt-5 w-auto max-h-full text-black py-24 px-10  " >
       <div class="sm:text-center">
        <p class="text-4xl font-bold">Dungeons & Dragons 5th Edition Wiki</p>
        <p class="text-2xl mb-10 leading-none">A wiki built with <a href="http://http://www.dnd5eapi.co/" target="_blank" rel="noopener noreferrer" class="underline">dnd5eapi</a>...</p>
        <router-link to="/classes"><a  class="bg-black py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Get Started</a></router-link>
        </div>  
    </div>
    <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Footer from '../components/Footer.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Footer
  },
});
</script>
