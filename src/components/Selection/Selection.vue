<template>
  <div class="section section--selection">
    <img class="background background--select" src="@/assets//images/n1.jpg" alt="Image Norway">
    <choice />
  </div>
</template>

<script>
import Choice from './Choice'

export default {
  name: 'Selection',
  components: {
    Choice
  }
}
</script>

<style lang="scss">

.section--selection{
  height: 100vh;
}

.background--select{
  filter: blur(0);
}

</style>
