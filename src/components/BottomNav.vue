<template>
  <v-footer
      v-bind="localAttrs"
      :padless="padless"
      class='footer-prorepro '
    >
      <v-card
        flat
        tile
        width="100%"
        class="bg-secondary-override text-center"
      >


        <v-divider></v-divider>
        

      <div
        class="adress-card bg-secondary text-white mx-auto items-center  flex flex-col justify-center rounded-lg p-3"
      >
        <div
          class="flex  p-1 fl cursor-pointer"
          @click="openMapView"
        >
          <img
            class="mr-2"
            style="height:24px"
            src="@/assets/icon-localisation.svg"
          />
          <span>
            128 Boulevard Voltaire, 75011 Paris
          </span>
        </div>
        <div class="flex p-1 fl">
          <img class="mr-2" src="@/assets/icon-mail.svg" />
          <span>
            contact@prorepro.fr
          </span>
        </div>
        <div class="flex  p-1 fl">
          <img class="mr-2" src="@/assets/icon-phone.svg" />
          <a href="tel:01 83 91 23 52">
            01 83 91 23 52
          </a>
        </div>
        <div class="flex p-1 fl" @click="openFacebook">
          <img
            class="icon-facebook cursor-pointer mr-2"
            src="@/assets/icon-facebook.svg"
          />
          <span>
            Notre page Facebook
          </span>
        </div>
      </div>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Pro Repro</strong>
        </v-card-text>
      </v-card>
    </v-footer></template>
</template>
<script>
  import {
  VFooter, VCard,VCardText, VBtn, VIcon, VDivider // required
} from 'vuetify/lib';
export default {
components: {VFooter, VCard,VCardText, VBtn, VIcon, VDivider},
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: false,
      variant: 'default',
    }),
    
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
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

<style>
.footer-prorepro {
  padding: 0 !important;
}

.bg-secondary-override {
  background-color: #68C9BA !important;
}
.contact-container {
  background-color: rgba(0,0,0,0.4  );
}


.img-box {
  flex: 0 0 60%;
}

.contact-box {
  flex: 0 0 40%;
}


</style>
