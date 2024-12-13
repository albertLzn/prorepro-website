<template>
  <div>
    <nav class="navbar" :class="{ 'navbar-scrolled': hasScrolled }">
      <div class="navbar-container">
        <router-link to="/" class="navbar-logo">
          <img src="../assets/proreprologo2024.png" alt="Pro Repro NavbarLogo" title="Pro Repro Logo Navbar" class="logo-small" loading="lazy" />
        </router-link>

        <div class="navbar-links" :class="{ 'hidden': isMobile }">
          <template v-for="item in menuItems">
            <ServiceMenu 
  v-if="item.name === 'Nos services'"
  :key="item.path"
  :is-mobile="false"
/>


            <router-link 
              v-else 
              :to="item.path" 
              class="nav-link" 
              :class="{ 'active': $route.path === item.path }"
            >
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.name }}
            </router-link>
          </template>
        </div>

        <button 
          class="hamburger"
          :class="{ 'hidden': !isMobile, 'is-active': isDrawerOpen }"
          @click="toggleDrawer"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <transition name="drawer">
      <div v-if="isDrawerOpen && isMobile" class="mobile-drawer">
        <div class="drawer-header">
          <img src="../assets/proreprologo2024.png" loading="lazy" title="Pro Repro Icon" alt="Pro Repro" class="logo-small"/>
          <v-btn icon @click="toggleDrawer">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        
        <div class="drawer-links">
          <template v-for="item in menuItems">
            <ServiceMenu 
  v-if="item.name === 'Nos services'"
  :key="item.path"
  :is-mobile="true"
  @close-drawer="toggleDrawer"
/>


            <router-link 
              v-else
              :key="item.path"
              :to="item.path"
              class="drawer-link"
              :class="{ 'active': $route.path === item.path }"
              @click="toggleDrawer"
            >
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.name }}
            </router-link>
          </template>
        </div>
      </div>
    </transition>

    <div 
      v-if="isDrawerOpen && isMobile" 
      class="drawer-overlay"
      @click="toggleDrawer"
    >
    </div>
  </div>
</template>

<script>
import Category from './Category.vue'
import ServiceMenu from './ServiceMenu.vue'
import { VIcon, VBtn, VMenu, VCard, VCardText, VRow, VCol, VExpansionPanels, VExpansionPanel, VExpansionPanelHeader, VExpansionPanelContent } from 'vuetify/lib'
export default {
  name: 'Navbar',
  components: {
    Category,
    ServiceMenu,
    VIcon,
    VBtn,
    VMenu,
    VCard,
    VCardText,
    VRow,
    VCol,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent
  },
  data: () => ({
    isDrawerOpen: false,
    hasScrolled: false,
    isMobile: false,
    menuItems: [
      { name: 'Accueil', path: '/', icon: 'mdi-home' },
      { name: 'Nos services', path: '/service', icon: 'mdi-briefcase' },
      { name: 'Devis en ligne', path: '/invoice', icon: 'mdi-file-document' },
      { name: 'Contact', path: '/contact', icon: 'mdi-email' }
    ]
  }),
  
  mounted() {
    this.checkMobile()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.checkMobile)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.checkMobile)
  },

  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen
      document.body.style.overflow = this.isDrawerOpen ? 'hidden' : ''
    },
    
    handleScroll() {
      this.hasScrolled = window.scrollY > 50
    },
    
    checkMobile() {
      this.isMobile = window.innerWidth < 768
      if (!this.isMobile) {
        this.isDrawerOpen = false
        document.body.style.overflow = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(237, 187, 208, 0.75);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(104, 201, 186, 0.1);
  
  &.navbar-scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.98);
  }
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-small {
  height: 40px;
  width: auto;
}

.navbar-links {
  display: flex;
  gap: 2rem;
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

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: #68c9ba;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    transform-origin: 1px;
  }

  &.is-active span {
    &:first-child {
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
}

.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  max-width: 400px;
  background: white;
  z-index: 1001;
  padding: 1rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(104, 201, 186, 0.1);
}

.drawer-links {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.drawer-link {
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover,
  &.active {
    background: rgba(104, 201, 186, 0.1);
    color: #68c9ba;
    
    .v-icon {
      color: #68c9ba;
    }
  }
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.hidden {
  display: none;
}
</style>