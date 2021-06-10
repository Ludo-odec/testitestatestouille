<template>
  <div class="section section--intro">
    <img class="background background--intro" src="@/assets/images/home/n1.jpg" alt="Image Norway">
    <infos />
  </div>
</template>

<script>
import Infos from '@/components/Intro/Infos.vue'

export default {
  name: 'Intro',
  components: {
    Infos
  }
}
</script>

<style lang="scss">

.section--intro{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>
