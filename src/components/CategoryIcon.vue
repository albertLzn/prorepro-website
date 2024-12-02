<template>
  <div></div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    scrollTo(id) {
      let el = document.getElementById(id);
      el.scrollTop = el.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
