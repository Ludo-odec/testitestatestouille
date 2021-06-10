<template>
  <div class="section section--stories">
    <div v-if="story" class="carousel">
      <story-navbar />
      <router-link :to="{name : 'Story', params: {id: story.id} }" class="carousel__slides carousel__slides--horizontal">
        <img class="background background--stories" :src="story.background" :alt="story.description">
        <div class="stories">
          <h4 class="stories__inline">
            {{ story.title }}
            <span v-for="event in story.events" :key="event" class="by">
              {{ event.eventSubtitle }}
            </span>
          </h4>
          <virtuality class="stories__inline" :image="story.virtual" />
          <q class="stories__inline">
            {{ story.text }}
          </q>
          <ul class="stories__inline gallery">
            <li v-for="picture in story.pictures" :key="picture" class="gallery__el">
              <img :src="picture" :alt="story.description">
            </li>
          </ul>
        </div>
        <footerNavbar :story="story" @open-fullscreen="openFullscreen" />
        <audio class="myMem1" :src="story.audio" />
      </router-link>
    </div>
  </div>
</template>

<script>
import StoryNavbar from '@/components/StoryNavbar.vue'
import FooterNavbar from '@/components/Stories/FooterNavbar.vue'
import Virtuality from '@/components/Stories/Virtuality.vue'
import stories from '@/Stories.js'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Stories',
  components: {
    StoryNavbar,
    FooterNavbar,
    Virtuality
  },
  setup () {
    const story = ref(null)
    const router = useRouter()
    const route = useRoute()
    story.value = stories.find(story => {
      return story.id === route.params.id
    })

    if (!story.value) {
      router.replace('/')
    }

    const openFullscreen = () => {
      const myMem1 = document.querySelector('.myMem1')
      myMem1.volume = 0.8

      const canvaRadius = document.querySelector('.myCanvas canvas')
      if (!document.fullscreenElement) {
        canvaRadius.style.borderRadius = '0px'
        myMem1.play()
        canvaRadius.requestFullscreen().catch(err => {
          alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
        })
      } else {
        document.exitFullscreen()
        canvaRadius.style.borderRadius = '999px'
        myMem1.paused ? myMem1.play() : myMem1.pause()
        myMem1.currentTime = 0
      }
    }

    onMounted(() => {
      document.addEventListener('fullscreenchange', (e) => {
        if (!document.fullscreenElement) {
          document.querySelector('.myCanvas canvas').style.borderRadius = '999px'
        }
      })
      // gsap
      const sections = gsap.utils.toArray('.stories__inline')
      let maxWidth = 0

      const getMaxWidth = () => {
        sections.forEach((section) => {
          maxWidth += section.offsetWidth
        })
      }
      getMaxWidth()
      ScrollTrigger.addEventListener('refreshInit', getMaxWidth)

      gsap.to(sections, {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: 'none',
        scrollTrigger: {
          trigger: '.section--stories',
          pin: true,
          scrub: 1,
          end: () => `+=${maxWidth}`
          // invalidateOnRefresh: true
        }
      })
    })

    return {
      openFullscreen,
      story
    }
  }
}

</script>

<style lang="scss">

.stories{
  display: flex;
  align-items: center;
  width: max-content;
  & h4{
    width: fit-content;
  }
  & .by {
    font-size: 20px;
    font-weight: 300;
  }
}

.stories__inline{
  margin-left:150px;
  &.gallery{
    display: flex;
    align-content: center;
    justify-content: center;
    flex-basis: auto;
    height: 99vh;
    flex-wrap: wrap;
    & .gallery__el{
      width: 600px;
      height: 400px;
      margin-left: 50px;
      &:first-child{
        margin-left: 0;
      }
      & img{
        border-radius: 50px;
      }
    }
}
}
.stories__inline:last-child{
    margin-right:100px
  }

.virtuality{
  border-radius: 999px;
}

</style>
