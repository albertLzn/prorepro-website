<template>
  <main class="service-container">
    <nav id="top-services" class="services-nav" aria-label="Navigation des services">
      <Category
        v-for="(category, i) in categories"
        :key="i"
        :showButton="false"
        :title="category.title"
        :imgSrc="category.icon"
        :shortTitle="category.shortTitle"
        :id="category.id"
        :class="{ 'active': category.id === serviceId }"
        :isNav="true"
        class="service-icon"
      />
    </nav>

    <article class="service-content">
      <section class="service-section">
        <h1 class="service-title">{{ service.title }}</h1>
        
        <figure class="service-media">
          <img 
            :src="service.imgSrc" 
            :alt="service.title"
            class="service-image"
            loading="lazy"
            :title="service.title"
            width="600"
            height="350"
          />
        </figure>

        <div class="service-details">
          <p class="service-description">{{ service.description }}</p>

          <section v-if="service.formats" class="formats-section">
            <h2>Formats disponibles</h2>
            <div class="formats-grid" role="list">
              <div v-for="format in service.formats" 
                   :key="format" 
                   class="format-item"
                   role="listitem">
                {{ format }}
              </div>
            </div>
          </section>

          <section v-if="service.addon" class="addon-section">
            <h2>{{ Object.keys(service.addon)[0] }}</h2>
            <p>{{ Object.values(service.addon)[0] }}</p>
          </section>
        </div>
      </section>

      <section v-if="service.multiple" class="service-section additional">
        <h2 class="service-title">{{ service.otherTitle }}</h2>
        
        <figure class="service-media">
          <img 
            :src="service.otherImg" 
            :alt="service.otherTitle"
            :title="service.otherTitle"
            class="service-image"
            loading="lazy"
            width="600"
            height="350"
          />
        </figure>

        <div class="service-details">
          <p class="service-description">{{ service.otherDescr }}</p>

          <section v-if="service.otherFormats" class="formats-section">
            <h2>Formats disponibles</h2>
            <div class="formats-grid" role="list">
              <div v-for="format in service.otherFormats" 
                   :key="format" 
                   class="format-item"
                   role="listitem">
                {{ format }}
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import Category from "@/components/Category";
export default {
  head: {
  title: 'Services Impression & Reprographie - Prorepro Paris Voltaire',
  script: [{
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": 'Photocopies & Impressions, Posters, Création graphique PAO, Affiches Grands Formats, Posters, Plans, Impression sur mug, Carte de visites Express, Plastifications & Reliures, Flyers et Tampons, Tirage photos, Impression sur mug',
        "description": "Photocopies, Toutes Impressions, Posters, Création graphique PAO, Affiches Grands Formats, Posters, Plans, Impression sur mug, Carte de visites Express, Plastifications & Reliures, Flyers et Tampons, Tirage photos, Impression sur mug, Développement sites Web App mobile",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Pro Repro Paris"
        }
      }
    }],
  meta: [
    { 
      hid: 'description', 
      name: 'description', 
      content: 'Tous nos services d\'impression à Paris 11e : photocopies couleur/N&B, impressions numériques, affiches grand format, reliures, création graphique PAO, cartes de visite express, plastification, flyers, tampons et tirages photo.' 
    },
    { 
      hid: 'keywords', 
      name: 'keywords', 
      content: 'photocopie paris, impression numérique, reliure thèse, création graphique, carte de visite express, affiche grand format, flyer, tampon encreur, tirage photo, plastification document' 
    },
    { 
      property: 'og:title', 
      content: 'Services d\'Impression & Reprographie - Prorepro Paris' 
    },
    { 
      property: 'og:description', 
      content: 'Découvrez nos services d\'imprimerie : photocopies tous formats, impressions offset, reliures, PAO, affiches, cartes de visite, plastification. Travaux express possibles, qualité professionnelle.' 
    },
    {
      hid: 'robots',
      name: 'robots',
      content: 'index, follow'
    }
  ]
},
  name: "Service",
  components: { Category },
  mounted(){
    const topDiv = document.getElementById('page-top');
    topDiv.scrollIntoView({behavior: 'smooth', block:'start'})
  },
  data() {
    return {
      categories: [
        {
          title: "Photocopies & Impressions",
                  shortTitle: "Photocopies",
          description:
            "Photocopies et impressions couleurs noir et blanc.\n" +
            "Format standard recto-verso A4, A3, SRA3 \n" +
            "Proposés avec une large gamme de papiers, mats, satins, brillants de 80gr à 350gr.\n" +
            "Impressions numériques et offset\n" +
            "Thèses, mémoires, books, rapports, bilans, brochures, plaquettes commerciale, faire-parts, livrets, livres, catalogues, prospectus avec les procédés d’impressions les plus modernes\n",
          formats: [
            "A6 10, 50 x 21 cm",
            "A5 14, 85 x 21 cm",
            "A4 21x 29, 70 cm",
            "A3 29,70 x 42 cm",
            "SRA3 32 x 45 cm"
          ],
          imgSrc: require("@/assets/v2/services/photocopie.jpg"),
          id: "copy",
          icon: require("@/assets/copy.png"),
          multiple: false,
        },
        {
          title: "Posters",
                  shortTitle: "Affiches",
          description:
              "Nous vous proposons le tirage d’affiches de posters sur différents types de papier et sur adhésif grand format noir et blanc, couleur\n" +
              "affiche de présentation\n" +
              "Numérisation grand format",
          imgSrc: require("@/assets/v2/services/poster.jpg"),
          icon: require("@/assets/poster.png"),
          id: "poster",
          formats: ['A2 42 x 59,4 cm', 'A1 59,4 x 84 cm', 'A4 21x 29, 70 cm', "A0 84 x 118,8 cm"]
        },
        {
          title: "Création graphique PAO",
                  shortTitle: "Design",
          description:
            "Créez l’identité visuelle de votre société ,démarquez-vous avec des supports de communication personnalisés et créatifs.\n" +
            "Conception de Logo, cartes de visite, flyers, brochures, cartons d’invitation, faire-part, documents commerciaux, livrets.",
          imgSrc: require("@/assets/v2/services/graphisme.jpg"),
          icon: require("@/assets/design.png"),
          multiple: false,

          id: "design"
        },
        {
          title: "Affiches Grands Formats, Posters, Plans",
                  shortTitle: "Reliures",
          description:
            "Nous vous proposons le tirage d’affiches de posters sur différents types de papiers et sur adhésifs grands formats noirs et blancs, couleurs.\n" +
            "Plans d’architectes noir et blanc,  couleur, affiches de présentation.\n" +
            "Numérisation. Grands formats\n",

          formats: ["A2 42 x 59,4 cm", "A1 59,4 x 84 cm", "A0 84 x 118,8 cm"],
          imgSrc: require("@/assets/v2/services/affiche.jpg"),
          icon: require("@/assets/affiche.png"),
          multiple: false,

          id: "affiche"
        },

        {
          title: "Carte de visite Express",
          description:
            "Réalisez vos plus belles cartes de visite avec les conseils de notre graphiste.\n" +
            "Noir et blanc ou couleur, recto  ou recto-verso elles peuvent être faites sur place dans l’heure. Pour les vernis sélectifs, pelliculage ou autre un délai de 48h est nécessaire",
          imgSrc: require("@/assets/v2/services/visit.webp"),
          multiple: false,
                  shortTitle: "Carte de visites",

          icon: require("@/assets/card.png"),
          id: "card"
        },
        {
title: "Développement Web Full Stack",
shortTitle: "Développement",
description: "Création d'applications web modernes et performantes avec une expertise full stack. Du design à la mise en production, nous développons des solutions sur mesure utilisant les dernières technologies.",
imgSrc: require("@/assets/dev2.webp"),
icon: require("@/assets/dev.webp"),
multiple: true,
otherTitle: 'Services de Développement',
otherFormats: [
"Applications Web React/Vue.js",
"Dashboards & Data Viz",
"APIs & Backend Node.js",
"Cloud & Déploiement",
"UI/UX Material Design",
"Optimisation & Performance"
],
otherImg: require("@/assets/v2/services/dev.webp"),
otherDescr: "Notre expertise couvre l'ensemble du cycle de développement :\n" +
"• Création d'applications web modernes et réactives\n" +
"• Développement de tableaux de bord et visualisations de données\n" +
"• Conception d'APIs REST et architectures backend\n" +
"• Déploiement cloud et intégration continue\n" +
"• Design d'interfaces utilisateur Material Design\n" +
"• Optimisation des performances et de l'expérience utilisateur",
id: "dev"
},
        {
          title: "Plastifications & Reliures",
          description:
            "Plastification de documents A5, A4, A3\n" +
            "Reliures, agrafages, découpes, brochages, pliages\n" +
            "Reliures plastiques, métalliques, thermocollés ou dos carré collé.",
          imgSrc: require("@/assets/v2/services/plastification.jpg"),
          icon: require("@/assets/plastic.png"),
          multiple: false,
                  shortTitle: "Cartes",
          id: "plastic"
        },
        {
          title: "Flyers et Tampons",
          description:
            "Flyers format standard ou personnalisé recto ou recto-verso, noir et blanc ou couleur\n" +
            "Dépliants formats ouverts A5, A4, A3 ou personnalisés\n" +
            "Restaurants: menus, set de table portes additions, ronds de serviettes, pochettes pour couverts",
          multiple: false,
                  shortTitle: "Photos",
          addon: {
            Tampons:
              "Grâce a une gamme complète de tampons professionnels, vous trouverez à coup sûr le type et le modèle de tampon encreur adapté à vos besoins"
          },
          imgSrc: require("@/assets/v2/services/flyers.jpg"),
          icon: require("@/assets/stamp.png"),
          id: "stamp"
        },
        {
          title: "Tirage photos",
          description:
            "Impression sur papier photo à partir de fichier jpg. Tirag et agrandissement de photo, mat, brillant , sur mesure ou urgent. \n Format 10x15 de 0.65 à 0.55 centimes et format 15x20 de 1.20 à 1 euro.",
          imgSrc: require("@/assets/v2/services/tirage.jpg"),
          icon: require("@/assets/tirage.png"),
          multiple: false,
        shortTitle: "Mug",

          id: "tirage"
        },
        {
          title: "Impression sur mug",
          description:
            "Tasses personnalisées XXL. Votre photo est bien mise en valeur grâce à l'impression panoramique sur tout le pourtour du mug",
          imgSrc: require("@/assets/v2/services/mug.jpg"),
          icon: require("@/assets/mug.png"),
          id: "mug",
                  shortTitle: "Tampons",
          multiple: false
        }
      ]
    };
  },
  computed: {
    serviceId() {
      return this.$route.query.id;
    },
    service() {
      return this.categories.find(x => x.id === this.serviceId);
    }
  },
  watch: {
    serviceId: {
      handler(val) {
        if (!val) {
          this.$router.push({
            path: "service",
            query: { id: this.categories[0].id }
          });
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.service-container {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.services-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  margin-bottom: 2rem;

  .service-icon {
    transition: all 0.3s ease;
    
    &.active {
      transform: scale(1.1);
      filter: drop-shadow(0 0 10px rgba(237, 187, 208, 0.5));
    }
  }
}

.service-content {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  color: white;
}

.service-section {
  margin-bottom: 4rem;
  
  &.additional {
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
}

.service-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #68c9ba, #EDBBD0);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}
.services-nav {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.service-media {
  margin-bottom: 2rem;
  
  .service-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    max-height: 350px;
    border-radius: 1rem;
    margin: 0 auto;
    display: block;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
}

.service-details {
  max-width: 800px;
  margin: 0 auto;
}

.service-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  white-space: pre-line;
}

.formats-section, .addon-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-top: 2rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #68c9ba;
  }
}

.formats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.format-item {
  background: rgba(104, 201, 186, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(104, 201, 186, 0.2);
    transform: translateY(-2px);
  }
}

@media (max-width: 768px) {
  .service-container {
    padding: 1rem;
  }
  
  .service-title {
    font-size: 2rem;
  }
  
}
</style>