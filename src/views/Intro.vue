<template>
  <div class="section section--intro">
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
  background-color: #030303;
}
</style>
