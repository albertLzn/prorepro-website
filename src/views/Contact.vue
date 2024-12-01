<template>
  <div id="top-contact"
    class="contact-container mt-20 flex flex-col items-center sm:flex-row card-map p-6"
  >
    <div class="img-box rounded-lg">
      <img
        class="rounded cursor-pointer"
        src="@/assets/mapview.png"
        @click="openMapView"
      />

    </div>
    <ContactForm class="contact-box" />
  </div>
</template>

<script>
export default {
  components: {
    ContactForm: () => import("@/components/ContactForm.vue")
  },
   head: {
    title: 'Home page',
     meta: [
        { hid: 'contact', name: 'contact', content: 'Page formulaire de contact prorepro' }
      ],
  },
  mounted(){
                const nextDiv = document.getElementById('top-contact')
                nextDiv.scrollIntoView({behavior: 'smooth',  top:'nearest' })
  },
     
  methods: {
    openMapView() {
      window.open(
        "https://www.google.co.uk/maps/place/PRO-REPRO+Reprographie+-Photocopie+Imprimerie+-+Flyer+-Cartes+de+visites-+tirage+photo-Plans+Grands+formats/@48.8584185,2.376577,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66d01737188b3:0x8b3f08847e880e51!8m2!3d48.858415!4d2.3787657"
      );
    },
    openFacebook() {
      window.open(
        "https://www.facebook.com/prorepro.reprographie.copies.impression.paris/"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-container {
  // height: 100vh;
  background-color: rgba(0,0,0,0.4  );
}

.img-box {
  flex: 0 0 60%;
}

.contact-box {
  flex: 0 0 40%;
}
</style>
