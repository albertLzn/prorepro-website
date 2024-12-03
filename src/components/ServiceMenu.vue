<template>
    <div class="sussmak">
      <!-- Pour le drawer mobile -->
      <v-expansion-panels v-if="isMobile" flat>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-icon left>mdi-briefcase</v-icon>
            Nos services
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row dense>
              <v-col
                v-for="category in categories"
                :key="category.id"
                cols="6"
              >
                <v-card
                  :to="'/service?id=' + category.id"
                  elevation="2"
                  class="service-card-mobile"
                  hover
                >
                  <v-card-text class="d-flex flex-column align-center justify-center">
                    <v-icon size="24" color="#68c9ba">
                      {{ getCategoryIcon(category.id) }}
                    </v-icon>
                    <span class="mt-1 text-caption text-center">{{ category.shortTitle }}</span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
  
      <!-- Pour la navbar -->
      <v-menu
        v-else
        v-model="menu"
        :close-on-content-click="false"
        offset-y
        max-width="800"
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            v-bind="attrs"
            v-on="on"
            :to="'/service'"
            class="nav-link"
            :class="{ 'active': $route.path === '/service' }"
          >
            <v-icon left>mdi-briefcase</v-icon>
            Nos services
          </v-btn>
        </template>
  
        <v-card class="service-menu pa-4">
          <v-row dense>
            <v-col
              v-for="category in categories"
              :key="category.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card
                :to="'/service?id=' + category.id"
                elevation="2"
                class="service-card"
                hover
              >
                <v-card-text class="d-flex flex-column align-center justify-center">
                  <v-icon size="32" :color="hoveredCard === category.id ? '#EDBBD0' : '#68c9ba'">
                    {{ getCategoryIcon(category.id) }}
                  </v-icon>
                  <span class="mt-2 text-center font-weight-medium">{{ category.shortTitle }}</span>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-menu>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServiceMenu',
    props: {
      isMobile: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      menu: false,
      hoveredCard: null,
      categories: [
        { id: "copy", shortTitle: "Photocopies" },
        { id: "affiche", shortTitle: "Affiches" },
        { id: "design", shortTitle: "Design" },
        { id: "plastic", shortTitle: "Reliures" },
        { id: "poster", shortTitle: "Posters" },
        { id: "dev", shortTitle: "Sites web" },
        { id: "card", shortTitle: "Cartes" },
        { id: "tirage", shortTitle: "Photos" },
        { id: "mug", shortTitle: "Mug" },
        { id: "stamp", shortTitle: "Tampons" }
      ]
    }),
    methods: {
      getCategoryIcon(id) {
        const icons = {
          copy: 'mdi-content-copy',
          affiche: 'mdi-billboard',
          design: 'mdi-palette',
          plastic: 'mdi-book-open-variant',
          poster: 'mdi-image-size-select-actual',
          dev: 'mdi-web',
          card: 'mdi-card-account-details',
          tirage: 'mdi-camera',
          mug: 'mdi-coffee',
          stamp: 'mdi-stamper'
        }
        return icons[id] || 'mdi-help'
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .service-menu {
    background: rgba(255, 255, 255, 0.98) !important;
    border-radius: 16px !important;
  }
  
  .service-card {
    height: 100px;
    border-radius: 8px !important;
    transition: all 0.3s ease;
    background: white !important;
    cursor: pointer;
  
    &:hover {
      background: linear-gradient(135deg, rgba(104, 201, 186, 0.1), rgba(237, 187, 208, 0.1)) !important;
      transform: translateY(-2px);
    }
  }
  
  .service-card-mobile {
    height: 80px;
    border-radius: 8px !important;
    background: white !important;
  }
  
  .v-card__text {
    height: 100%;
  }

  .nav-link {
  height: 100%;
  display: flex;
  align-items: center;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #68c9ba, #EDBBD0);
    transition: width 0.3s ease;
  }

  &:hover,
  &.active {
    color: #68c9ba;
    
    .v-icon {
      color: #68c9ba;
    }
    
    &::after {
      width: 80%;
    }
  }
}

.sussmak {
  display: flex;
  align-self: flex-start;
}
  </style>