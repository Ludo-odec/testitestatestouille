<template>
  <button v-if="name === 'Norway'" class="blurred titleCountry">
    <router-link to="/selection">
      <h3>
        Norway
      </h3>
    </router-link>
  </button>
  <button v-else-if="name === 'Iceland'" class="blurred titleCountry titleCountry--NA">
    <h3>
      Iceland
    </h3>
  </button>
  <button v-else-if="name === 'New Zealand'" class="blurred titleCountry titleCountry--NA">
    <h3>
      New Zealand
    </h3>
  </button>
</template>

<script>

export default {
  props: ['name']
}

</script>

<style lang="scss">
.titleCountry {
    position: absolute;
    padding: 0 30px;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    z-index: 999;

    &--NA{
      cursor: not-allowed;
    }
}
</style>
