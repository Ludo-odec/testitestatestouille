<template>
  <story-navbar />
  <div class="section section--stories">
    <swiper
      class="carousel carousel--vertical"
      noSwipingClass
      :slides-per-view="1"
      :pagination="{
        'clickable': true,
        'dynamicBullets': true
      }"
      :direction="'vertical'"
    >
      <swiper-slide class="carousel carousel__slides">
        <img class="background background--stories" src="@/assets/images/nl.jpg" alt="Image 360° Northern Lights">
        <div class="stories">
          <h3 class="stories__inline">
            Northern Lights
            <span class="by">
              — by Alexandre Tournay
            </span>
          </h3>
          <virtuality class="stories__inline" />
          <q class="stories__inline">
            After days spent camping in the intimacy of nature, a feeling of merit came over me. A just reward.
          </q>
        </div>
        <footerNavbar />
        <audio class="myMem1" src="./audio/a1.mp3" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import StoryNavbar from '@/components/StoryNavbar.vue'
import FooterNavbar from '@/components/Stories/FooterNavbar.vue'
import Virtuality from '@/components/Stories/Virtuality.vue'

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([Pagination])

export default {
  name: 'Stories',
  components: {
    StoryNavbar,
    FooterNavbar,
    Virtuality,
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss">
.section--stories{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.stories{
  position: absolute;
  left: 150px;
  display: inline-flex;
  align-items: center;
  width: max-content;
}

.stories__inline{
  margin-left:150px
}
.stories__inline:last-child{
    margin-right:100px
  }

.by {
    font-size: 20px;
    font-weight: 300;
}

.virtuality{
  border-radius: 999px;
}

.background{
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  opacity: 0.2;
  z-index: -1;

  &--stories{
    position: fixed;
    top: 0;
    left: 0.1px;
    filter: blur(5px);
  }
}
</style>
