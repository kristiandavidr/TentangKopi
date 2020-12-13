<template>
  <div>
    <NavBar />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Body from "@/components/Sejarah/Body.vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  title: "Sejarah",
  components: {
    Body,
    Footer,
    NavBar
  }
};
</script>

<style scoped>
</style>