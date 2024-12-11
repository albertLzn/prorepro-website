<template>
  <main>
    <h1 class="sr-only">Pro Repro - Imprimerie & Reprographie Paris Voltaire</h1>
    <section 
      aria-label="Nos services"
      class="grid paradis lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:mx-auto bg-main pt-2 py-md-5"
    >
      <Category
        class="p-10"
        v-for="(category, i) in categories"
        :key="i"
        :title="category.title"
        :imgSrc="category.imgSrc"
        :id="category.id"
        :shortTitle="category.shortTitle"
        :show-button="true"
        :isNav="false"
      ></Category>
    </section>
  </main>
</template>

<script>
import {
  VCarousel, VCarouselItem,VRow // required
} from 'vuetify/lib';
export default {
  name: "Home",
  head: {
  title: 'Prorepro - Photocopie & Reprographie Paris Voltaire (75011)',
  script: [{
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Pro Repro - Imprimerie & Reprographie Paris",
        "description": "Service professionnel de photocopie et impression à Paris 11e"
      }
    }],
  meta: [
    { 
      hid: 'description', 
      name: 'description', 
      content: 'Imprimerie, photocopie et reprographie à Paris 11e, 128 Boulevard Voltaire. Impressions couleur et N&B, affiches grand format, reliures, thèses, mémoires. Tarif étudiant -20%. Service rapide sur place ou livraison.' 
    },
    { 
      hid: 'keywords', 
      name: 'keywords', 
      content: 'photocopie paris 11, impression paris, reprographie voltaire, imprimerie paris est, copies couleur, thèse reliure, affiches grand format, mémoire étudiant, impression rapide paris' 
    },
    { 
      property: 'og:title', 
      content: 'Prorepro Paris Voltaire - Photocopie, Impression, Reprographie (75011)' 
    },
    { 
      property: 'og:description', 
      content: 'Votre imprimerie de proximité à Paris 11e. Photocopies, impressions, reliures, affiches grand format. Tarifs étudiants. Service rapide, qualité professionnelle. 128 Boulevard Voltaire.' 
    },
    {
      hid: 'robots',
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'geo.position',
      content: '48.8584; 2.3488'
    },
    {
      name: 'geo.placename',
      content: 'Paris 11e'
    }
  ]
},
    
  components: {
    VCarousel, VCarouselItem, VRow,
    Category: () => import("@/components/Category")
  },
  mounted() {
  const isMobile = window.innerWidth <= 768;
  const targetId = isMobile ? 'logo-container' : 'top-home';
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth', 
      block: 'center'
    });
  }
},
  data: () => ({
      currentMsg: 0,
      items: [
      {
        src: require('../assets/carousel/proReprofacade.jpeg'),
        message: "Commande sur place, par mail"
      },
      {
        src: require('../assets/v2/services/graphisme.jpg'),

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
    ],
    
  
    categories: [
      {
        imgSrc: require("@/assets/copy.png"),
        id: "copy",
        shortTitle: "Photo\ncopies"
      },
      {
        imgSrc: require("@/assets/affiche.png"),
        id: "affiche",
        shortTitle: "Affiches"
      },
      {
        imgSrc: require("@/assets/design.png"),
        id: "design",
        shortTitle: "Design"
      },
      {
        imgSrc: require("@/assets/plastic.png"),
        id: "plastic",
        shortTitle: "Reliures"
      },
      // {
      //   imgSrc: require("@/assets/poster.png"),
      //   id: "poster",
      //   shortTitle: "Posters"
      // },
      {
        imgSrc: require("@/assets/dev.webp"),
        id: "dev",
        shortTitle: "Sites web"
      },
      {
        imgSrc: require("@/assets/card.png"),
        id: "card",
        shortTitle: "Cartes"
      },
      {
        imgSrc: require("@/assets/tirage.png"),
        id: "tirage",
        shortTitle: "Photos"
      },
      {
        imgSrc: require("@/assets/mug.png"),
        id: "mug",
        shortTitle: "Mug"
      },
      {
        imgSrc: require("@/assets/stamp.png"),
        id: "stamp",
        shortTitle: "Tampons"
      }
    ]
  })
};
</script>
<style scoped lang="scss">
.carousel-cont {
  max-width: 700px;
}
.protitle {
  border-top: solid 15px #68c9ba;
  padding-top: 50px;
  color: #212353;
}

.paradis {
  background-color: rgba(0,0,0,0.35);
  margin-top: -44px;
}

.carousel-msg {
  font-size: 3vw;
  color: white;
     position: absolute;
    left: 0;
    width: 100%;
}

.laurentlefdp {
  background-color: rgba(0, 0, 0, 0.35);
}
</style>


