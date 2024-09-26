<script setup lang="ts">
const title1 = 'Article'
</script>

<template>
  <div class="">
    <Hero />
    <section class="flex items-center flex-col pt-16 pb-10">
      <div class="max-w-screen-xl sm:min-w-24 md:w-11/12">
        <TitlePattern
          :title="title1"
        />
        <Articles /> 
      </div>
      <ContentList path="/blog" v-slot="{list}">
          <div v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path">
              {{ article.title }}
            </NuxtLink>
          </div>
      </ContentList>
    </section>

  </div>
</template>

<style>

</style>