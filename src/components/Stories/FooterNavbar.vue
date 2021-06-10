<template>
  <div class="footer">
    <a class="footer__nav footer__nav--north" target="_blank" :href="story.map">
      {{ story.north }}
    </a>
    <button ref="btnBig" class="blurred btn--big" @click="myMemory">
      Story
    </button>
    <a class="footer__nav footer__nav--east" target="_blank" :href="story.map">
      {{ story.east }}
    </a>
  </div>
</template>

<script>
import oui from '@/Stories.js'

export default {
  name: 'FooterNavbar',
  props: {
    story: {
      type: Object,
      required: true
    }
  },
  setup () {
    const myMemory = () => {
      const myMem = document.querySelector('.myMem')
      myMem.play()

      const myAudio = document.querySelector('.myAudio')
      myAudio.pause()
    }
    return {
      myMemory
    }
  },
  data () {
    return {
      stories: oui.stories
    }
  }
}
</script>

<style lang="scss">
.footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    z-index: 999;
}

.footer__nav{
  cursor: pointer;
    &--north{
        margin-left: 40px;
    }
    &--east{
        margin-right: 40px;
    }
}

.btn--big{
  display: flex;
  align-self: center;
  height: fit-content;
  padding: 5px 20px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
