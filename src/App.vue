<template>
  <div id="app">
    <info />
    <b-container class="mt-5">
      <router-view />
    </b-container>
  </div>
</template>
<script>

import info from './components/info.vue'

export default {
  components:{
    info
  }
}
</script>