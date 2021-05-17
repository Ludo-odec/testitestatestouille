<template>
  <div class="footer">
    <p class="footer__nav footer__nav--north">
      69°38'13.3"N
    </p>
    <button ref="btnBig" class="blurred btn--big" @click="Story" >
      Story
    </button>
    <p class="footer__nav footer__nav--east">
      19°00'46.5"E
    </p>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'FooterNavbar',
  setup () {
    const Story = () => {
      const myMem1 = document.querySelector('.myMem1')
      myMem1.volume = 0.8

      const canvaRadius = document.querySelector('.myCanvas canvas')
      if (!document.fullscreenElement) {
        canvaRadius.style.borderRadius = "0px"
        myMem1.play()
        canvaRadius.requestFullscreen().catch(err => {
          alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
        })
      } else {
        document.exitFullscreen()
        canvaRadius.style.borderRadius = "999px"
        myMem1.paused ? myMem1.play() : myMem1.pause()
        myMem1.currentTime = 0
      }
    }
    onMounted( () => {
      document.addEventListener('fullscreenchange', (e) =>{
        if (!document.fullscreenElement){
          document.querySelector('.myCanvas canvas').style.borderRadius = "999px"
        } 
      })
    })
    return {
      Story
    }
  }
}
</script>

<style lang="scss">
.footer{
    position: sticky;
    left: 0.1px;
    width: 100%;
    height: fit-content;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    z-index: 998;
}

.footer__nav{
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
