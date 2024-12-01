<template>
  <div class="service-container mt-20">
    <div id="top-services"></div>
    <div 
      class="row grid  grid-cols-3  md:grid-cols-5  xl:grid-cols-10 row p-4 mb-2 "
    >
      <Category
        :key="i"
        v-for="(category, i) in categories"
        :showButton="false"
        class="icon"
        :title="category.title"
        :imgSrc="category.icon"
                :shortTitle="category.shortTitle"
        :id="category.id"
      ></Category>
    </div>

    <div
      class="row container lossa text-center mx-auto grid  grid-cols-1 items-center  p-2 m-2"
    >
      <div class="mx-auto text-xl  ">
        <div class="text-center  mb-5 ">
          <div>
            <span class="text-5xl  tepu title font-bold mukta	">{{
              service.title
              }}</span>
          </div>
        </div>

        <img :src="service.imgSrc" class="bg-primary mx-auto image mb-8 self-center" />

        <span class="description">{{ service.description }}</span>
        <div v-if="service.formats" class="mt-8">
          <span class="font-bold	 mukta">Formats:</span>
          <ul>
            <li v-bind:key="format" v-for="format in service.formats">
              {{ format }}
            </li>
          </ul>
        </div>

        <div v-if="service.addon" class="mt-8 flex flex-col">
          <span class="font-bold	mukta mb-5">{{
            Object.keys(service.addon)[0]
          }}</span>
          <span class="">{{ Object.values(service.addon)[0] }}</span>
        </div>
      </div>




      <div v-if="service.multiple" class="mx-auto text-xl mt-6  ">
        <div class="text-center  mb-5 ">
          <div>
            <span class="text-5xl  tepu title font-bold mukta	">{{
                service.otherTitle
              }}</span>
          </div>
        </div>

        <img :src="service.otherImg" class="bg-primary mx-auto image mb-8 self-center" />

        <span class="description">{{ service.otherDescr }}</span>
        <div v-if="service.otherFormats" class="mt-8">
          <span class="font-bold	 mukta">Formats:</span>
          <ul>
            <li v-bind:key="format" v-for="format in service.otherFormats">
              {{ format }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "@/components/Category";
export default {
    head: {
      
    title: 'Service',
     meta: [
        { hid: 'devis', name: 'devis', content: 'Demande de devis en ligne' }
      ],
  },
  name: "Service",
  components: { Category },
  mounted(){
                const nextDiv = document.getElementById('top-services')
                nextDiv.scrollIntoView({behavior: 'smooth',  top:'nearest' })
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
          title: "Impression sur mug",
                  shortTitle: "Posters",
          description:
            "Nous vous proposons le tirage d'affiches et de posters en grands formats, noir & blanc ou en couleurs, sur divers types de papiers",
          imgSrc: require("@/assets/v2/services/mug.jpg"),
          icon: require("@/assets/gift.png"),          multiple: true,
          otherTitle: 'Affiche & Posters',
          otherFormats: ["A2 42 x 59,4 cm", "A1 59,4 x 84 cm", "A0 84 x 118,8 cm"],
          otherImg: require("@/assets/v2/services/poster.jpg"),
          otherDescr:             "Nous vous proposons le tirage d’affiches de posters sur différents types de papier et sur adhésif grand format noir et blanc, couleur\n" +
              "affiche de présentation\n" +
              "Numérisation grand format",
          id: "gift"
        },
        {
          title: "Carte de visites Express",
          description:
            "Réalisez vos plus belles cartes de visites  avec les conseils de notre graphiste.\n" +
            "Noir et blanc ou couleur, recto  ou recto-verso elles peuvent être faites sur place dans l’heure. Pour les vernis sélectifs, pelliculage ou autre un délai de 48h est nécessaire",
          imgSrc: require("@/assets/v2/services/visit.jpg"),
          multiple: false,
                  shortTitle: "Cadeaux",

          icon: require("@/assets/card.png"),
          id: "card"
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

<style scoped>

.lossa {
  max-width: 700px;
  background-color: rgba(0,0,0,0.5);
}

.tepu {
  -webkit-text-stroke: 1px white;
}
</style>
