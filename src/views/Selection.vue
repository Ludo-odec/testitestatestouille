<template>
  <div class="section section--selection">
    <img class="background background--select" src="@/assets/images/n1.jpg" alt="Image Norway">
    <choice />
    <tips />
    <router-link to="/Stories">
    <button>next</button>
    </router-link>
  </div>
</template>

<script>
import Choice from '@/components/Selection/Choice.vue'
import Tips from '@/components/Tips.vue'

export default {
  name: 'Selection',
  components: {
    Choice,
    Tips
  }
}
</script>

<style lang="scss">

.section--selection{
  display: flex;
  justify-content: center;
  height: 100vh;
}

.background--select{
  filter: blur(5px);
}

</style>
