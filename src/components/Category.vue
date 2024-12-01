<template>
<div>
      <h1 class="text-center text-lg	hidden md:block  cat-title  ">{{shortTitle.toUpperCase()}}</h1>
        <div class="category-box flex flex-col" @click="goToCategory(id)">
    <img v-if="imgSrc" :src="imgSrc" />
    <div v-else>
      {{ title }}
    </div>
    
    <div class="button-box">
      <button
        v-if="showButton"
        @click="goToCategory(id)"
        class="more-info bg-secondary hover:bg-secondaryDarker text-black font-bold py-1 px-6 mt-1 rounded-full text-sm"
      >
        <div>
          Plus d'infos
        </div>
        <div class="bg-white rounded-full">
          <img class="icon-chevron" src="@/assets/icon-chevron-right.svg" />
        </div>
      </button>
    </div>
  </div>

</div>

</template>

<script>
export default {
  props: {
    showButton: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    imgSrc: {
      type: String,
      required: false
    },
    shortTitle: {
      type: String,
      required: false
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
.category-box {
  cursor: pointer;
  .button-box {
    display: flex;
    justify-content: center;
    .more-info {
      width: 160px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-chevron {
        object-fit: contain;
        height: 24px;
        width: 24px;
      }
    }
  }
}

.cat-tittle {
  font-family: "Rubik", sans-serif;
}
</style>
