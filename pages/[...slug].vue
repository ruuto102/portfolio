<script setup lang="ts">
const { data: article } = useAsyncData("article", () =>
    queryContent(useRoute().path).findOne()
);
</script>

<template>
    <dic>
        <h1 class="p-5">{{ article?.title }}</h1>
        <time :datetime="$dayjs(article?.createdAt).format('YYYY-MM-DD')">
            {{ $dayjs(article?.postedAt).format('YYYY/MM/DD') }}
        </time>
        <content-doc />
    </dic>
</template>
  