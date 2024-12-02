<!-- Header.vue -->
<template>
  <div id="top-home" class="header-container">
    <div class="hero-section">
      <!-- Logo section -->
      <div id="logo-container" class="logo-container">
        <img
          class="logo-image"
          src="../assets/proreprologo2024.png"
          alt="Pro Repro Logo"
         title="Pro Repro Logo" 
          loading="lazy" 
        />
      </div>

      <!-- Carousel et horaires -->
      <div class="info-container">
        <v-carousel 
          height="200" 
          class="info-carousel"
          :show-arrows="false" 
          cycle 
          hide-delimiters

          interval="3250"
        >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <div class="carousel-msg">
              <h2 class="carousel-text">{{item.message}}</h2>
            </div>
          </v-carousel-item>
        </v-carousel>

        <div class="hours-content">
          <span class="days">7 jours sur 7</span>
          <div class="schedule">
            <div><span>Lundi - Vendredi</span> <span>9h à 19h</span></div>
            <div><span>Samedi</span> <span>9h à 18h</span></div>
            <div><span>Dimanche</span> <span>10h à 17h</span></div>
            <PrintAnimation />

          </div>
        </div>

      </div>
    </div>

    <!-- Titre et contact -->
    <div class="header-info">
      <h1 class="main-title mb-5">
        Photocopie - Reprographie - Imprimerie - Toutes impressions
      </h1>
      <div class="contact-info">
        <span @click="goToMaps">128 Boulevard Voltaire, 75011</span>
        <span @click="$router.push('/contact')">contact@prorepro.fr</span>
        <a href="tel:0183912352">01 83 91 23 52</a>
      </div>
    </div>

    <!-- Carousel Mobile -->
<div class="mobile-carousel">
  <v-carousel 
  height="200" 
          class="info-carousel"
          :show-arrows="false" 
          cycle 
          hide-delimiters

          interval="3250"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <div class="carousel-msg">
        <h2 class="carousel-text">{{item.message}}</h2>
      </div>
    </v-carousel-item>
  </v-carousel>
</div>
  </div>
</template>

<script>
import { VCarousel, VCarouselItem } from 'vuetify/lib';
import PrintAnimation from './PrintAnimation.vue'

export default {
  components: {
    VCarousel,
    VCarouselItem,
    PrintAnimation
  },
  data: () => ({
    items: [
      {
        src: require('../assets/carousel/proReprofacade.jpeg'),
        message: "Commande sur place, par mail"
      },
      {
        src: require('../assets/v2/services/design.webp'),

        message: "Tarifs étudiants -20%"
      },
      {
        src: require('../assets/carousel/prorepro3.jpeg'),
        message: "Photocopies Couleur, Noir & blancs"
      },
      {
        src: require('../assets/carousel/proRepro4.webp'),
        message: "Service Livraison"
      }
    ]
  }),
  methods: {
    goToMaps() {
      window.open("https://www.google.com/maps?q=128+Boulevard+Voltaire+75011");
    }
  }
}
</script>

<style lang="scss" scoped>

.header-container {
  backdrop-filter: blur(10px);
  padding: 1rem;
}

.hero-section {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  width: 100%; // Ajout
  margin: 0 auto;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}


.logo-container {
  flex: 0 0 40%;
  min-width: 300px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    min-width: unset;
    max-width: 400px;
  }
  
  .logo-image {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
}

.info-container {
  @media (max-width: 768px) {
    .info-carousel {
      display: none;
    }
  }
}

// Nouveau carousel mobile
.mobile-carousel {
  display: none;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto 0;
  border-radius: 0.5rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    display: block;
  }
}

.info-container {
  flex: 0 0 55%;
  max-width: 600px; // Ajout
  width: 100%; // Ajout
  display: flex;
  gap: 1rem;
  background: rgba(104, 201, 186, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  padding: 1rem;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    flex-direction: column;
    max-width: 100%; // Ajout
  }
}

.info-carousel {
  flex: 1;
  max-width: 100%; // Ajout
  border-radius: 0.5rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 200px !important;
  }
  
  .carousel-msg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }

  .carousel-text {
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem;
    text-align: center;
    font-weight: 500;
  }
}

.hours-content {
  flex: 1;
  padding: 1rem;
  
  @media (min-width: 769px) {
    border-left: 2px solid rgba(255, 192, 203, 0.2);
    padding-left: 2rem;
  }
  
  .days {
    font-size: 1.8rem;
    font-weight: bold;
    color: #FFC0CB;
    margin-bottom: 1rem;
  }
  
  .schedule {
    div {
      margin: 0.5rem 0;
      font-size: 1rem;
      display: flex;
      justify-content: space-between;
      
      span {
        &:first-child { // Pour les jours
          color: #68C9BA;
        }
        &:last-child { // Pour les heures
          color: #FFC0CB;
        }
        font-weight: bold;
      }
      
      @media (min-width: 769px) {
        font-size: 1.2rem;
      }
    }
  }
}

.header-info {
  text-align: center;
  margin-top: 3rem;
  
  .main-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: white; // Rose pastel
  text-shadow: 0 0 7px rgba(255, 192, 203, 0.8),
               0 0 10px rgba(255, 192, 203, 0.8),
               0 0 21px rgba(255, 192, 203, 0.8);
  animation: neon 3s ease-in-out infinite alternate;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding-top: 35px;
  }
}
  
  .contact-info {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 0 1rem;
    
    span, 
    a {
      background-color: rgba(104, 201, 186, 0.5);
      color: white;
      cursor: pointer;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      transition: all 0.3s ease;
      text-decoration: none;
      font-weight: 500;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        background: rgba(104, 201, 186, 0.2);
      }
    }
  }
}


@keyframes neon {
  from {
    text-shadow: 0 0 7px rgba(255, 192, 203, 0.8),
                 0 0 10px rgba(255, 192, 203, 0.8),
                 0 0 21px rgba(255, 192, 203, 0.8);
  }
  to {
    text-shadow: 0 0 4px rgba(255, 192, 203, 0.8),
                 0 0 7px rgba(255, 192, 203, 0.8),
                 0 0 18px rgba(255, 192, 203, 0.8);
  }
}
</style>