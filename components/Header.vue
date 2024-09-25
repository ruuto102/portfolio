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
    <header>
        <div>
            <a href="#" class="">YOSSY7.Blog</a>
            <nav>
                <button>menu</button>
                <ul>
                    <li v-for="item in navList" :key="item.name">
                        <a :href="item.link">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>