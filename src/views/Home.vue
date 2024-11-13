<template>
  <div id="home">
    <CarruselComponent></CarruselComponent>
    <LogosComponent></LogosComponent>
  </div>
</template>

<script>
import CarruselComponent from '@/components/utils/HomeComponents/CarruselComponent.vue';
import LogosComponent from '@/components/utils/HomeComponents/LogosComponent.vue';

export default {
  name: 'HomeView',
  components: {
    CarruselComponent,
    LogosComponent
  }
}
</script>

<style>
#home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
}
</style>
