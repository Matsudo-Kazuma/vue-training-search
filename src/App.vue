<template>
  <div>
    <div>
      <Search/>
      loading: {{loading}}
    </div>
    <div class="wrapper">
      <template v-for="(url, index) in results">
        <AppImage :url="url" :key="index"/>
      </template>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search";
import AppImage from "./components/Image";

export default {
  name: "App",
  components: {
    Search,
    AppImage
  },
  computed: {
    results() {
      return this.$store.getters["search/results"];
    },
    loading() {
      return this.$store.getters["search/loading"];
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
}
</style>
