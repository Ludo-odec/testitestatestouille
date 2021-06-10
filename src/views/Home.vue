<template>
  <div class="section section--home">
    <header-navbar />
    <swiper
      class="carousel carousel--horizontal"
      :slides-per-view="1"
      loop
      navigation
    >
      <swiper-slide class="carousel carousel__slides">
        <button class="blurred titleCountry">
          <router-link to="/selection">
            <h3>
              Norway
            </h3>
          </router-link>
        </button>
        <img src="@/assets/images/home/n1.jpg" alt="Pictures of Norway">
      </swiper-slide>
      <swiper-slide class="carousel carousel__slides">
        <button class="blurred titleCountry titleCountry--NA">
          <h3>
            Iceland
          </h3>
        </button>
        <img src="@/assets/images/home/i1.jpg" alt="Pictures of Iceland">
      </swiper-slide>
      <swiper-slide class="carousel carousel__slides">
        <button class="blurred titleCountry titleCountry--NA">
          <h3>
            New Zealand
          </h3>
        </button>
        <img src="@/assets/images/home/nz1.jpg" alt="Pictures of New Zealand">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import HeaderNavbar from '@/components/HeaderNavbar.vue'

import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
SwiperCore.use([Navigation])

export default {
  name: 'home',
  components: {
    HeaderNavbar,
    Swiper,
    SwiperSlide
  }
}

</script>

<style lang="scss">
.section--home{
  display: flex;
  justify-content: center;
}

.header__nav--logo{
  margin-left: 40px;
}

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

.swiper-button{
  &-next{
    right: 40px;
  }
  &-prev{
    left: 40px;
  }
}

</style>
