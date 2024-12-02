<template>
  <main id="top-contact" class="contact-container flex flex-col items-center sm:flex-row p-6">
    <section class="location-container">
      <article class="info-card">
        <h1 class="company-name">Pro Repro Paris</h1>
        <address>
          <div class="info-item">
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
            <span>128 Boulevard Voltaire, 75011 Paris</span>
          </div>
          <div class="info-item">
            <i class="fas fa-phone" aria-hidden="true"></i>
            <span>
              <a href="tel:0183912352" aria-label="Appelez-nous">01 83 91 23 52</a>
            </span>
          </div>
        </address>
        <div class="info-item">
          <i class="fas fa-clock" aria-hidden="true"></i>
          <div class="schedule" role="list">
            <div role="listitem">Lundi - Vendredi : 9h - 19h</div>
            <div role="listitem">Samedi : 9h - 18h</div>
            <div role="listitem">Dimanche : 10h - 17h</div>
          </div>
        </div>
      </article>

      <div 
        class="map-box rounded-lg cursor-pointer" 
        @click="openMapView"
        role="button"
        aria-label="Ouvrir dans Google Maps"
      >
        <img
          class="rounded w-full h-[200px] object-cover"
          src="@/assets/mapview.png"
          alt="Plan d'accès Pro Repro - 128 Boulevard Voltaire, 75011 Paris"
          loading="lazy"
          width="800"
          height="200"
          title="Pro Repro Location Paris Voltaire 75011"
        />
      </div>
    </section>

    <ContactForm 
      class="contact-box" 
      aria-label="Formulaire de contact"
    />
  </main>
</template>

<script>
export default {
  components: {
    ContactForm: () => import("@/components/ContactForm.vue")
  },
  head: {
  title: 'Contact - Pro Repro Paris Voltaire (75011)',
  script: [{
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org",
        "@type": "WebForm",
        "name": "Demande contact Pro Repro",
        "url": "https://prorepro.fr/contact",
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
      content: 'Contactez Pro Repro au 128 Boulevard Voltaire, Paris 11e. Ouvert 7j/7, service d\'impression et reprographie professionnel. Devis gratuit, réponse rapide. Tél : 01 83 91 23 52.' 
    },
    { 
      hid: 'keywords', 
      name: 'keywords', 
      content: 'contact imprimerie paris, reprographie voltaire, horaires impression paris 11, devis impression, pro repro paris contact' 
    },
    { 
      property: 'og:title', 
      content: 'Contactez Pro Repro Paris - Impression & Reprographie' 
    },
    { 
      property: 'og:description', 
      content: 'Imprimerie Pro Repro à Paris 11e. Ouvert 7j/7 : Lun-Ven 9h-19h, Sam 9h-18h, Dim 10h-17h. Service client réactif, devis personnalisé.' 
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
  mounted() {
  const topDiv = document.getElementById('page-top');
  topDiv.scrollIntoView({behavior: 'smooth', block:'start'})
},
  methods: {
    openMapView() {
      window.open("https://www.google.com/maps?q=128+Boulevard+Voltaire+75011");
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-container {
  background: rgba(104, 201, 186, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  color: white;
}

.location-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 50px;
  flex: 1;
  max-width: 500px;
}

.map-box {
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }

  img {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
}

.info-card {
  background: rgba(237, 187, 208, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  .company-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #FFC0CB;
    text-shadow: 0 0 10px rgba(255, 192, 203, 0.5);
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
    color: white;

    i {
      color: #68c9ba;
      font-size: 1.2rem;
      margin-top: 0.2rem;
    }

    .schedule {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.contact-box {
  flex: 1;
  max-width: 600px;
}

@media (max-width: 640px) {
  .contact-container {
    padding: 1rem;
  }

  .location-container,
  .contact-box {
    width: 100%;
    max-width: 100%;
  }
}
</style>