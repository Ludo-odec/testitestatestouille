<template>
  <intro />
  <home />
  <selection />
  <stories />
</template>

<script>
import Intro from '@/components/Advices/Intro.vue'
import Home from '@/components/Carousel/Home.vue'
import Selection from '@/components/Selection/Selection.vue'
import Stories from '@/components/Stories/Stories.vue'

export default {
  name: 'App',
  components: {
    Intro,
    Home,
    Selection,
    Stories
  }
}
</script>
