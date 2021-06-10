<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <img class="background background--intro" src="@/assets/images/home/n1.jpg" alt="Image Norway">
  <div class="warning">
    <p>The mobile and tablet's size is coming soon !</p>
    <p>I invite you to discover this site on Desktop for a better experience.</p>
  </div>
  <audio
    class="myAudio"
    src="./audio/a1.wav"
    loop
  />
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

.warning{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  & p {
    width: 41%;
    font-size: 25.89px;
  }
}

</style>
