<template>
  <div class="section section--selection">
    <header-navbar />
    <ul class="memories">
      <li v-for="story in stories" :key="story" class="memory">
        <router-link :to="{ name: 'stories', params: {id: story.id} }" class="memory__el">
          <p class="coordonates">
            <span>{{ story.north }}</span>
            <span>{{ story.east }}</span>
          </p>
          <h5 class="title title__memory">
            {{ story.title }}
            <br>
            <span>
              {{ story.subtitle }}
            </span>
          </h5>
          <img :src="story.background" alt="Image Norway">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import HeaderNavbar from '@/components/HeaderNavbar.vue'
import oui from '@/Stories.js'

export default {
  name: 'Selection',
  components: {
    HeaderNavbar
  },
  data () {
    return {
      stories: oui
    }
  }
}
</script>

<style lang="scss">

.memories{
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-content: flex-start;
  width: 100%;
}

.memory{
  width: 50%;
  height: auto;
  background-color:#000;
  flex-basis: content;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;

  & img{
    opacity: 0.2;
    transition: .2s ease-out;
  }
  &:hover img{
    opacity: .7;
    transform: scale(1.2);
    transition: .3s ease-in;
  }
  &:hover p{
    opacity: 0;
    transition: .1s ease-in;
  }
  &:hover .title__memory{
    opacity: 1;
    transition: .2s ease-in;
    transition-delay: .25s;
  }
}

.coordonates{
  position: absolute;
  font-size: 25.89px;
  z-index: 1;
  & span{
    margin: 25px;
  }
}

.title{
  position: absolute;
  text-align: center;
  opacity: 0;
  z-index: 1;

  &.title__memory{
  font-size: 41.89px;
  font-weight: 500;
  }
  & span{
    font-size: 25.89px;
    font-weight: 400;
  }
}

.memory__el{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>
