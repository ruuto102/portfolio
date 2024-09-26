  <script >
  export default {
    props: {
      title: {
        type: String,
        default: null,
        required: true
      },
      date: {
        type: String,
        default: null,
        required: true
      },
      link: {
        type: String,
        default: null,
        required: true
      },
      image: {
        type: String,
        default: '/images/guam.jpg',
        required: true
      }
    }
  }
  </script>


<template>
    <NuxtLink :to="link">
      <div class="card">
        <img :src="image" alt="" class="card__image">
        <div class="card__text">
          <div class="card__title">
            {{ title }}
          </div>
        </div>
        <div class="card__date">
          {{ $dateFns.format(new Date(date), 'd MMMM yyyy') }}
        </div>
      </div>
    </NuxtLink>
  </template>
  
  
  <!-- <style lang="">
  .card {
    width: 100%;
    font-family: $defaultFontFamily;
    padding: 16px;
    background-color: $cardBg;
    &__image {
      height: 200px;
      object-fit: cover;
      width: 100%;
    }
    &__text {
      padding: 12px 0 8px;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__date{
    color: #777;
    font-size: 14px;
    line-height: 1.5;
    padding-bottom: 8px;
    }
  }
  .card__title {
    font-size: 20px;
    line-height: 125%;
    letter-spacing: 2px;
    color: $defaultTextColor;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    color: $defaultTextColor;
    text-decoration: none;
  }
  </style> -->