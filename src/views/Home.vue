<template>
  <div class="home">
   <ComingSoon/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComingSoon from '../components/ComingSoon.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ComingSoon
  },
});
</script>
