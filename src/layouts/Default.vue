<template>
  <div class="flex flex-col mx-auto default-container">
    <div id="page-top"></div>
    <Navbar />
    <Header class="mb-5 mt-10" v-if="$route.path === '/'" />
    <div class="my-6">
      <slot />
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BottomNav from '../components/BottomNav.vue';

export default {
  name: "Default",
  components: {
    Header,
    Navbar: () => import("@/components/Navbar"),
    BottomNav
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/proreprologo2024.png' }
      ],
      script: [{
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Pro Repro Paris",
        "image": "../assets/proreprologo2024.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "128 Boulevard Voltaire",
          "addressLocality": "Paris",
          "postalCode": "75011",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "48.8584",
          "longitude": "2.3488"
        },
        "telephone": "01 83 91 23 52",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "10:00",
            "closes": "17:00"
          }
        ]
      }
    }]
    }
  }
  
};
</script>

<style scoped>
.default-container {
  height: 100vh;
  overflow: auto;
  background: url('../assets/bg-prorepro.jpeg') center;
  background-size: cover;
  }
</style>
