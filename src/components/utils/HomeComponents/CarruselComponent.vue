<template>
  <div id="home_gallery">
    <div v-for="(image, index) in images" :key="index" class="image-container">
      <img :src="`/images/home_carrusel/${image}`" :alt="'Imagen ' + (index + 1)" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'CarruselComponent',
  data() {
    return {
      images: [
        '1.webp',
        '2.webp',
        '3.webp',
        '4.webp',
      ]
    }
  }
}

</script>

<style>
#home_gallery {
  background-color: #f1c7c7;
  position: relative;
  display: flex;
  width: 100%;
  height: 35rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.image-container {
  height: 35em;
  width: 100%;
  display: flex;

  & img {
    width: 0;
    flex-grow: 1;
    object-fit: cover;
    opacity: 0.7;
    transition: 0.4s ease;

    &:hover {
      opacity: 1;
      z-index: 2;
    }
  }
}
</style>
