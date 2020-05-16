<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-6 mt-3">
        <viewCases />
      </div>
      <div class="col-lg-6 mt-3">
        <Grafica />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import viewCases from '@/components/viewCases.vue'
import Grafica from '@/components/Grafica.vue'

export default {
  name: 'Home',
  components: {
    viewCases,
    Grafica
  }
}
</script>
