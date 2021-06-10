<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <audio class="myAudio" src="./audio/a1.mp3" loop />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">

.route-enter-from, .route-leave-to{
  opacity: 0;
}
.route-enter-active, .route-leave-active{
  transition: all ease 0.5s;
}

</style>
