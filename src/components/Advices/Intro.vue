<template>
  <div class="section section--intro">
    <infos></infos>
  </div>
</template>

<script>
import Infos from './Infos'

export default {
  name: 'intro',
  data () {
    return {
    }
  },
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
