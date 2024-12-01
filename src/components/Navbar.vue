<template>
  <div  id="navbar" class=" navbar bg-secondary w-full grid grid-cols-4 ">
   <router-link
      :class="{ 'bg-secondaryDarker': $route.path === '/' }"
      class="item text-lg mukta"
      to="/"
      >Accueil</router-link
    >
 
    <router-link
      :class="{ 'bg-secondaryDarker': $route.path === '/service' }"
      class="item text-lg mukta"
      to="/service"
      >Nos services</router-link
    >
        <router-link
      :class="{ 'bg-secondaryDarker': $route.path === '/invoice' }"
      class="item text-lg mukta"
      to="/invoice"
      >Demande de Devis</router-link
    >
    <router-link
      :class="{ 'bg-secondaryDarker': $route.path === '/contact' }"
      class="item text-lg mukta"
      to="/contact"
      >Contact</router-link
    >

    
  </div>
</template>

<script>
import {
  VCard, VSystemBar,VAppBar, VAppBarNavIcon, VToolbarTitle, VSpacer, VBtn, VIcon, VNavigationDrawer, VList, VListItemGroup,
  VListItem, VListItemTitle, VCardText, VImg, VSheet, VAppBarTitle, VTabs, VTab, VContainer,VHover // required
} from 'vuetify/lib';
export default {
  metaInfo: {
    title: "Navbar"
  },
    components: {VCard, VSystemBar,VAppBar, VAppBarNavIcon, VToolbarTitle, VSpacer, VBtn, VIcon, VNavigationDrawer, VList, VListItemGroup,
  VListItem, VListItemTitle, VCardText, VImg, VSheet, VAppBarTitle, VTabs, VHover },
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  z-index: 99;
  .item {
    border: solid white 3px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
}
</style>
