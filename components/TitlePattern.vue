<script setup lang="ts">
const props = defineProps({
    title: String
})
</script>

<template>
    <h2 class="text-2xl font-bold tracking-wide bar">{{ title }}</h2>

</template>

<style scoped>
.bar {
  display: flex;
  align-items: center;
}
 .bar:after {
  border-top: 1px solid;
  content: "";
  width: 3em; /* 線の長さ */
  margin: 1rem;
}
</style>