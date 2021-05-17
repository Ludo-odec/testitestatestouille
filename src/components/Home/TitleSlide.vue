<template>
  <button v-if="name === 'Norway'" class="blurred titleCountry">
    <h2>
      <router-link to="/Selection">
        Norway
      </router-link>
    </h2>
  </button>
  <button v-else-if="name === 'Iceland'" class="blurred titleCountry">
    <h2>
      Iceland
    </h2>
  </button>
  <button v-else-if="name === 'New Zealand'" class="blurred titleCountry">
    <h2>
      New Zealand
    </h2>
  </button>
</template>

<script>

export default {
  props: ['name']
}

</script>

<style>
.titleCountry {
    position: absolute;
    padding: 0 30px;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    z-index: 999;
}
</style>
