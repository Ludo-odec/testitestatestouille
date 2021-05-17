<template>
  <HeaderNavbar />
  <div class="section section--home">
    <swiper
      class="carousel carousel--horizontal"
      :slides-per-view="1"
      loop
    >
      <swiper-slide class="carousel carousel__slides">
        <title-slide name="Norway" />
        <img src="@/assets/images/n1.jpg" alt="Pictures of Norway">
      </swiper-slide>
      <swiper-slide class="carousel carousel__slides">
        <title-slide name="Iceland" @click="myIceland" />
        <img src="@/assets/images/i1.jpg" alt="Pictures of Iceland">
      </swiper-slide>
      <swiper-slide class="carousel carousel__slides">
        <title-slide name="New Zealand" @click="myNZ" />
        <img src="@/assets/images/nz1.jpg" alt="Pictures of New Zealand">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import TitleSlide from '@/components/Home/TitleSlide.vue'

import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
SwiperCore.use([Navigation])

export default {
  name: 'Home',
  components: {
    HeaderNavbar,
    Swiper,
    SwiperSlide,
    TitleSlide
  },
  setup () {
    const myIceland = () => {
      window.alert('In construction, see ya later ☺')
    }
    const myNZ = () => {
      window.alert('In construction, see ya later ☺')
    }
    return {
      myIceland,
      myNZ
    }
  }
}

</script>

<style lang="scss">
.section--home{
  display: flex;
  justify-content: center;
}

.swiper-button {
  z-index: 999;
  &-next{
    margin-right: 40px;
    color: white;
    transition: 0.1s ease-out;
    &:hover{
      transform: scale(1.1);
      transition: 0.3s ease-in;
    }
  }
  &-prev{
    margin-left: 40px;
    color: white;
    transition: 0.1s ease-out;
    &:hover{
      transform: scale(1.1);
      transition: 0.3s ease-in;
    }
  }
}

.header__nav--logo{
  margin-left: 40px;
}
</style>
