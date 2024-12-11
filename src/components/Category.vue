<template>
  <div class="category-card" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="card-content" @click="goToCategory(id)">
      <div class="image-container">
        <img v-if="imgSrc" :src="imgSrc" :alt="shortTitle" class="category-image" loading="lazy" :title="shortTitle"/>
        <div class="image-overlay" :class="{ 'overlay-active': isHovered }">
          <div class="overlay-content">
            <h2 class="category-title" :style="{ fontSize: titleFontSize }">{{ shortTitle.toUpperCase() }}</h2>
            <!-- Suppression de l'icône circulaire -->
          </div>
        </div>
      </div>

      <div v-if="!isNav" class="description-container" :class="{ 'show-description': isHovered }">
        <p class="description-text">{{ getCategoryDescription }}</p>
        
        <button
          v-if="showButton"
          @click.stop="goToCategory(id)"
          class="action-button"
          :class="{ 'button-hover': isHovered }"
        >
          <span>Découvrir</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  showButton: Boolean,
  id: {
    type: String,
    required: true
  },
  title: String,
  imgSrc: String,
  shortTitle: String,
  isNav: {
    type: Boolean,
    default: false
  }
},
  
  data: () => ({
    isHovered: false
  }),

  computed: {
    titleFontSize() {
      return this.isNav ? '14px' : 'calc(15px + 0.390625vw)'
    },
    getCategoryIcon() {
      const icons = {
        copy: 'mdi-content-copy',
        affiche: 'mdi-poster',
        design: 'mdi-palette',
        plastic: 'mdi-book-open-variant',
        poster: 'mdi-image-size-select-actual',
        dev: 'mdi-code-braces', // Icône pour le développement
        card: 'mdi-card-account-details',
        tirage: 'mdi-camera',
        mug: 'mdi-coffee',
        stamp: 'mdi-stamp'
      }
      return icons[this.id] || 'mdi-star'
    },

    getCategoryDescription() {
      const descriptions = {
        copy: 'Impressions haute qualité en tout formats',
        affiche: 'Affiches grands formats',
        design: 'Création graphique personnalisée',
        plastic: 'Reliures professionnelles tout formats',
        dev: "Création Sites web & App mobiles",
        card: 'Cartes de visite premium',
        tirage: 'Tirages photo professionnels',
        mug: 'Mugs personnalisés résistants',
        stamp: 'Tampons sur mesure'
      }
      return descriptions[this.id] || 'Service professionnel sur mesure'
    }
  },

  methods: {
    goToCategory(id) {
      this.$router.push({
        path: "service",
        query: { id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.category-card {
  
  position: relative;
  width: 100%;
  aspect-ratio: 1; // Assure un carré parfait
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  &.nav-mode {
    height: 120px; // Plus petit pour la navigation
    transform: scale(0.6); // Réduction de base
    margin: -20px; // Compensation pour le scale
  }
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }
  @supports not (aspect-ratio: 1) {
    // Compatibilité pour iOS ou anciens navigateurs
    padding-top: 100%;
    height: 0;
    position: relative;
  }

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
}

.card-content {
  position: absolute; // Fixé au centre du conteneur
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;

  .category-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover .category-image {
    transform: scale(1.05);
  }
}



.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(104, 201, 186, 0.2),
    rgba(237, 187, 208, 0.5)
  );
  opacity: 0;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.overlay-active {
    opacity: 1;
  }
}


.overlay-content {
  text-align: center;
  color: white;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  width: fit-content;
  max-width: 80%;
}


.category-title {
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.action-button {
  margin: 0 auto; // Centre le bouton
  padding: 0.5rem 2rem; // Augmente légèrement le padding horizontal
  justify-content: center; // Centre le texte dans le bouton
  width: fit-content; // Adapte la largeur au contenu
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  background: linear-gradient(45deg, #68c9ba, #EDBBD0);
  color: white;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  .v-icon {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateX(5px);
    .v-icon {
      transform: translateX(3px);
    }
  }
}

.category-icon {
  font-size: 2rem;
  color: white;
}

.description-container {
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center; // Centre le contenu
  right: 0;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(100%);
  transition: transform 0.4s ease;
  border-radius: 0 0 50% 50%;
  
  &.show-description {
    transform: translateY(0);
  }
}

.description-text {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

</style>