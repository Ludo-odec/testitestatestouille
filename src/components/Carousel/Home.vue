<template>
  <div class="section section--home">
    <div class="header">
      <title-home />
      <button ref="btnAudio" class="blurred header__nav header__nav--sound" @click="mySound">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="soundOn" fill-rule="evenodd" clip-rule="evenodd" d="M9 0C8.44772 0 8 0.447716 8 1V19C8 19.5523 8.44772 20 9 20C9.55228 20 10 19.5523 10 19V1C10 0.447716 9.55228 0 9 0ZM0 4C0 3.44772 0.447715 3 1 3C1.55228 3 2 3.44772 2 4V16C2 16.5523 1.55228 17 1 17C0.447715 17 0 16.5523 0 16V4ZM16 4C16 3.44772 16.4477 3 17 3C17.5523 3 18 3.44772 18 4V16C18 16.5523 17.5523 17 17 17C16.4477 17 16 16.5523 16 16V4Z" fill="white" />
        </svg>
      </button>
    </div>
    <swiper
      class="carousel carousel--horizontal"
      :slides-per-view="1"
      loop="true"
      navigation
    >
      <swiper-slide class="carousel carousel__slides">
        <title-slide name="Norway" />
        <img src="./images/n1.jpg" alt="Pictures of Norway">
      </swiper-slide>
      <swiper-slide class="carousel carousel__slides">
        <title-slide name="Iceland" />
        <img src="./images/i1.jpg" alt="Pictures of Iceland">
      </swiper-slide>
      <swiper-slide class="carousel carousel__slides">
        <title-slide name="New Zealand" />
        <img src="./images/nz1.jpg" alt="Pictures of New Zealand">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Howl,Howler } from 'howler'
import { onMounted, ref } from 'vue'
import SwiperCore, { Navigation, Autoplay, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import TitleSlide from './TitleSlide.vue'
import TitleHome from './TitleHome.vue'
SwiperCore.use([Navigation, Autoplay, A11y])

export default {
  components: {
    Swiper,
    SwiperSlide,
    TitleSlide,
    TitleHome
  },
  setup () {
    console.log('setup')
    let btnAudio = ref('')
    console.log(btnAudio)
    console.log(btnAudio.value)


    const mySound = () =>{
      console.log('mySound')
      const sound = new Howl({
        src: ['https://res.cloudinary.com/n3pu/video/upload/v1571849541/80s_vibe.mp3'],
        // autoplay: true,
        // muted: true,
        // loop: true,
        // volume: 0.5,
        // onend: function() {
        //   console.log('Finished!');
        // }
      });
      console.log(sound)
      sound.play()
      // const myAudio = new Audio('/assets/audio/a1.mp3').play()
      // console.log(myAudio)
      // if (myAudio !== undefined) {
      //   myAudio.then(function() {
      //     console.log('playing') 
      //   }).catch(function(error) {
      //     console.log('error')
      //   })
      // }
    }

    onMounted( () => {
      console.clear()
      console.log('____OnMounted!_____')
      
    })
    return{
      btnAudio,
      mySound
    }
  }
}
//   mounted () {
//     console.log('____Mounted_____')
//     myAudio = new Howl({
//       src: ['./audio/a1.mp3'],
//       html5: true,
//       loop: true,
//       volume: 1
//     })

//     console.log(myAudio)
//   },
//   methods: {
//     let myAudio = '',
//     mySound(){
//       console.log(this)
//       if(this.mySound = false) {
//         myAudio.play()
//         this.mySound = true
//       }else {
//         myAudio.pause()
//         this.mySound = false
//       }
//     }
//   }
</script>

<style lang="scss">
.section--home{
  display: flex;
  justify-content: center;
}

.swiper-button {
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
</style>
