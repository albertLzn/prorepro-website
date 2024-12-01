<template>
  <div >
    <div
      class="grid paradis lg:grid-cols-5 md:grid-cols-3 grid-cols-1 md:mx-auto bg-main pt-2 py-md-5"
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
    </div>


  </div>
</template>

<script>
import {
  VCarousel, VCarouselItem,VRow // required
} from 'vuetify/lib';
export default {
  name: "Home",
  head: {
    title: 'Home page',
    meta: [
        { hid: 'home', name: 'home', content: 'Pro Repro reprographie' }
      ],
  },
    
  components: {
    VCarousel, VCarouselItem, VRow,
    Category: () => import("@/components/Category")
  },
  mounted(){
                const nextDiv = document.getElementById('top-home')
                nextDiv.scrollIntoView({behavior: 'smooth',  block:'center' })
  },
  data: () => ({
      currentMsg: 0,
      items: [
          {
            src: require('../assets/student.png'),
            message: "Tarifs étudiants -20%"
          },
          {
            src: require('../assets/photocopieuse.png'),
                        message: "Commande sur place, par mail "

          },
          {
            src: require('../assets/photocouleurs.jpeg'),
                        message: "Photocopies Couleur, Noir & blancs"

          },
            {
            src: require('../assets/livraison.png'),
                        message: "Service Livraison"

          },
      
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
      {
        imgSrc: require("@/assets/poster.png"),
        id: "poster",
        shortTitle: "Posters"
      },
      {
        imgSrc: require("@/assets/gift.png"),
        id: "gift",
        shortTitle: "Cadeaux"
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


