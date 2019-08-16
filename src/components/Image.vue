<template>
  <img class="image" :src="url">
</template>

<script>
export default {
  props: {
    url: String
  }
};
</script>

<style>
.image {
  width: 20%;
}
</style>

