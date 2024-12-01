<template>
  <div id="top-home" class="grid grid-cols-1  flex items-center  p-4">
    <div
      class=" self-center mb-3 items-center flex flex-col md:flex-row justify-around"
    >
      <div class="self-center">
        <img
          class="img mr-2"
          style="width: 500px; height: auto"
          src="../assets/proreprologo.png"
          as="image"
        />
      </div>
      <div
        class="text-secondary hidden md:inline-flex self-center header_right-cont text-3xl lg:text-5xl text-center font-extrabold	 mukta	"
      >
        7 jours sur 7 <br />
       Du Lundi au vendredi de 9h à 19h <br />
        Le samedi de 9h à 18h <br />
        Le Dimanche 10h à 17h
      </div>
    </div>
    <div
      class="row text-white 	header_bottom-cont mx-auto flex flex-col"
    >
     <span class="header-title text-3xl lg:text-5xl font-bold	 text-center mb-3"
        >Photocopie - Reprographie - Imprimerie - Toutes impressions</span
      >
    
      <span class="header-description 	text-3xl  text-center">128 Boulevard Voltaire, 75011 - contact@prorepro.fr - 0183912352</span>
    </div>

  </div>
</template>

<script>
import {
  VCarousel, VCarouselItem,VRow // required
} from 'vuetify/lib';
export default {
  name: "Header",
  components: {VCarousel, VCarouselItem, VRow},

  mounted() {
    setInterval(() => {
      if (this.currentMsg === 2) {
      this.currentMsg = 0
    } else {
      this.currentMsg++;
    }


    }, 2500);
  },
  methods: {

  }
};
</script>

<style scoped>




.header_right-cont {
  font-family: 'Rubik', sans-serif;
  -webkit-text-stroke: white 1px;
}



.header_bottom-cont {
  text-shadow: 0px 3px 0px #b2a98f, 0px 4px 10px rgba(0, 0, 0, 0.35),
    0px 9px 2px rgba(0, 0, 0, 0.2), 0px 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
