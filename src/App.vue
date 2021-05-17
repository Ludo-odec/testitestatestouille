<template>
  <router-view v-slot="{ Component }">
    <!-- <transition name="fade" mode="out-in"> -->
      <component :is="Component" />
    <!-- </transition> -->
  </router-view>
  <audio class="myAudio" src="./audio/a2.mp3" loop />
</template>

<script>
import Intro from '@/views/Intro.vue'
import Home from '@/views/Home.vue'
import Selection from '@/views/Selection.vue'
import Stories from '@/views/Stories.vue'

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

<style lang="scss">
// .fade-enter-from, .fade-leave-to{
//   opacity: 0;
// }
// .fade-enter-active, .fade-leave-active{
//   transition: opacity ease 0.5s;
// }
</style>