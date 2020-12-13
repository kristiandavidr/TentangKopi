<template>
  <div>
    <NavBar />
    <Quote />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Body from "@/components/Content/Body.vue";
import Quote from "@/components/Quote.vue";

export default {
  title: "Content",
  components: {
    Footer,
    NavBar,
    Body,
    Quote
  }
};
</script>

<style scoped>
</style>