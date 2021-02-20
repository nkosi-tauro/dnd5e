<template>
  <div>
    <Header/>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'

export default defineComponent({
  components : {
    Header
  },
  setup () {
    

    return {}
  }
})
</script>

<style scoped>

</style>