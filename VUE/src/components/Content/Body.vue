<template>
  <div v-html="title">{{ title }}</div>
</template>

<script>
import axios from "axios";

export default {
  name: "content",
  props: {
    msg: String
  },
  data() {
    return {
      article: {
        title: "",
        body: ""
      }
    };
  },
  mounted() {
    axios.get("http://localhost:8000/blogs/${params,id}").then(res => {
      this.title = res.data;
      console.log(res.data);
    });
  },
  methods: {}
};
</script>

<style scoped>
</style>