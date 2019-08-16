<template>
  <input @input="change">
</template>

<script>
export default {
  methods: {
    change(e) {
      const keyword = e.target.value;
      this.$store.dispatch("search/doSearch", keyword);
    }
  }
};
</script>
