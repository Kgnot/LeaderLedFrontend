<template>
  <div id="logos_gallery">
    <div v-for="(logo, index) in logos" :key="index" class="logo-container">
      <img :src="`/images/logos_image/${logo}`" :alt="'logo ' + (index + 1)">
    </div>
  </div>
</template>

<script>

export default {
  name: 'LogosComponent',
  data() {
    return {
      logos: [
        "philips.svg",
        "royAlpha.svg",
        "silvania.svg",
        "leviton.svg",
        "BJB.svg",
      ]
    }
  }
}

</script>

<style>
#logos_gallery {
  position: relative;
  display: flex;
  width: 80%;
  height: 8em;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: bisque;
  gap: 10%;
}

.logo-container {
  height: 100%;
  width: 100%;
  display: flex;

  & img {
    width: 0;
    flex-grow: 1;
    object-fit: fill;
  }
}
</style>
