<template>

   <div class="mt-5  w-full h-full text-black py-24 px-10  " >
       <div class="md:w-1/2">
        <p class="text-3xl font-bold">Dungeons & Dragons 5th Edition Wiki</p>
        <p class="text-2xl mb-10 leading-none">All your DnD info...</p>
        <router-link to="/backgrounds"><a  class="bg-black py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Get Started</a></router-link>
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
