<template>
  <div>
    <Header/>
    <router-view></router-view>
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