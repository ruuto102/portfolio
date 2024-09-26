<script>

</script>

<template>
    <div class="container">
      <ul class="post__list">
        <li v-for="post in posts" :key="post.slug" class="post__list__item">

          <card
            :title="post.title"
            :date="post.postedAt"
            :link="'/posts/' + post.slug"
            :image="post.image"
          />
        </li>
      </ul>
    </div>
  </template>
  