<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script>
import HeaderComponent from './components/utils/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }

};
</script>

<style>
main {
  position: absolute;
  top: 7em;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(127, 255, 212, 0);
  /* NO OLVIDAR ESTO */
}
</style>
