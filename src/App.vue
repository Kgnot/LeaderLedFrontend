<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <HomeView></HomeView>
  </div>
</template>

<script>
import HeaderComponent from './components/utils/Header.vue'
import HomeView from './views/Home.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeView
  }

};
</script>

<style></style>
