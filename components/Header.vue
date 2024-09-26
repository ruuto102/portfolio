<script setup lang="ts">
const navList  = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About Me',
        link: '/AboutMe'
    }
]
</script>


<template>
    <header class="relative bg-gray-300 font-sans drop-shadow-md w-full flex justify-center">
        <div class="flex justify-between max-w-screen-xl items-center sm:min-w-24 md:w-11/12">
            <a href="/" class=""><span class="font-semibold text-4xl">Yossy7</span><span class="text-indigo-600 font-bold">.Blog</span></a>
            <nav>
                <button class="toggle">menu</button>
                <ul class="flex">
                    <li v-for="item in navList" :key="item.name" class="px-4 py-5 text-xl font-medium group hover:bg-indigo-600">
                        <a :href="item.link" class="group-hover:text-white">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.toggle {
    display: none;
}
</style>