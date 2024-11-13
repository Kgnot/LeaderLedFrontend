<template>
  <div id="main_header">
    <div id="main_header_logo">
      <LogoComponent></LogoComponent>
    </div>
    <div id="main_header_space_button">
      <button id="main_header_buttonToday">
        Hoy
      </button>
    </div>
    <div id="main_header_router">
      <div>
        <router-link to="/" class="RH">Inicio</router-link>
      </div>
      <div>
        <router-link to="/Products" class="RH">Productos</router-link>
      </div>
      <div>
        <router-link to="/About" class="RH">Acerca</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LogoComponent from './HeaderComponents/Logo.vue';

export default {
  name: 'HeaderComponent',
  components: {
    LogoComponent
  }
}
</script>
<style>
#main_header {
  position: fixed;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;
  width: 100%;
  height: 7em;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 3px 8px 3px #dfdfdf;
  top: 0;
  left: 0;
}

#main_header_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  width: 100%;
  border-radius: 10px;
}

#main_header_space_button {
  display: flex;
  justify-content: center;
}

#main_header_buttonToday {
  background-color: #b4ebc2;
  border-radius: 0 0 50% 50%;
  width: 5em;
  height: 5em;
  border: none;
  box-shadow: 0px 3px 5px 0px #bebebe;
  transform: translateY(-40%);
  cursor: pointer;
  transition: transform 0.2s ease-in;
  font-size: 1.3em;

  &:hover {
    transform: translateY(0);
  }
}

#main_header_router {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.RH {
  text-decoration: none;
  color: black;
  font-size: 1.8em;
}
</style>
