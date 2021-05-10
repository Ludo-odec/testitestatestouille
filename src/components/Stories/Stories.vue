<template>
  <div class="section section--stories">
    <headerNavbar />
    <swiper
      class="carousel carousel--vertical"
      :slides-per-view="1"
      :noSwiping="'true'"
      :pagination="{
        'clickable': true,
        'dynamicBullets': true
      }"
      :direction="'vertical'"
    >
      <swiper-slide class="carousel carousel__slides">
        <img class="background background--stories" src="./images/nl.jpg" alt="Image 360° Northern Lights">
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
      </swiper-slide>
      <swiper-slide class="carousel carousel__slides" />
      <swiper-slide class="carousel carousel__slides" />
      <swiper-slide class="carousel carousel__slides" />
      <swiper-slide class="carousel carousel__slides" />
    </swiper>
    <footerNavbar />
  </div>
</template>

<script>
import HeaderNavbar from './HeaderNavbar'
import FooterNavbar from './FooterNavbar'
import Virtuality from './Virtuality'

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
    HeaderNavbar,
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
  display: inline-flex;
  align-items: center;
  width: max-content;
  margin-left: 150px;
}

.stories__inline{
  margin-left:150px
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
  top: 0;
  left: 0;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  opacity: 0.2;
  z-index: -1;

  &--stories{
    filter: blur(10);
  }
}
</style>
