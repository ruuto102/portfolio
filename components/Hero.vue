<template>
    <div class="bg-gray-200 bg-dot w-full flex items-center flex-col pt-20 pb-10">
      <div class="max-w-screen-xl sm:min-w-24 md:w-11/12">
        <div class="flex items-start justify-between">
          <div>
            <h1 class="text-6xl pt-12 pb-8 font-bold">This is Yosshy !<br/>
              Front end dev & design
            </h1>
            <p class="text-xl text-gray-500 pl-3 tracking-wide">
              On this blog I share tips and tricks, frameworks, projects, designs,etc<br/>
              I hope this will be a good output for me.
            </p>
          </div>
          <img 
            src="/static/images/Coding3.svg"
            alt="coding"
            width="530px"
            class="anime-fuwafuwa"
          >
        </div>
      </div>
      <div class="animate-bounce">
        <div class="arrow" />
      </div>
    </div>
  </template>
  
<style scoped>
  p{
     position:relative;
  }
  
  p::before {
     content:"";
     display:inline-block;
     width:3px;
     height:60px;
     background-color:#2B2C34;
     position:absolute;
     top:-2px;
     left:3px;
  }
  .bg-dot {
    background-image:
      radial-gradient(#D2D6DB 6%, transparent 6%);
    background-size: 40px 40px;
  }
  
  .arrow {
      border: 0;
      border-bottom: solid 2px #2B2C34;
      border-right: solid 2px #2B2C34;
      display: inline-block;
      transform: rotate(45deg);
      width: 24px;
      height: 24px;
  }
  @keyframes fuwafuwa {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
.anime-fuwafuwa {
  animation: 5s fuwafuwa infinite;
}
  </style>