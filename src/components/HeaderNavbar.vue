<template>
  <div class="section section--header">
    <transition name="no-mode-fade">
      <button class="blurred header__nav header__nav--logo" v-if="on" key="on" @click="on = false">
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1042 20.6218C15.0489 20.2629 15.5576 19.4733 15.5576 18.2171V17.0686C15.5576 16.0996 15.2669 15.3459 14.7219 14.8075C14.1769 14.305 13.3412 14.0179 12.2874 14.0179H10.289V0.666626H8.18159L5.31113 8.59843L2.44068 0.666626H0.333252V14.0179H2.11366V7.66528C2.11366 6.26555 2.04099 4.9376 1.93199 3.71732L4.4391 10.5006H6.14684L8.65395 3.71732C8.50861 5.00938 8.47227 6.33733 8.47227 7.66528V13.982V27.3333H12.3964C13.4865 27.3333 14.2859 27.0821 14.8309 26.5437C15.3759 26.0412 15.6666 25.2875 15.6666 24.2826V23.0264C15.6666 21.8061 15.1579 20.9448 14.1042 20.6218ZM10.3254 15.633H12.0331C13.1231 15.633 13.6682 16.1354 13.6682 17.1404V18.2889C13.6682 19.3297 13.1231 19.8322 12.0331 19.8322H10.3254V15.633ZM13.8135 24.2467C13.8135 25.2516 13.2685 25.7541 12.1784 25.7541H10.3617V21.4831H12.1784C13.2685 21.4831 13.8135 21.9856 13.8135 22.9905V24.2467Z" fill="white" fill-opacity="0.8" />
        </svg>
      </button>
      <button class="blurred header__nav header__nav--close" v-else key="off" @click="on = true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.7072 0.707108C0.316676 1.09763 0.316676 1.7308 0.7072 2.12132L6.58592 8.00004L0.929099 13.6569C0.538575 14.0474 0.538575 14.6805 0.929099 15.0711C1.31962 15.4616 1.95279 15.4616 2.34331 15.0711L8.00013 9.41425L13.4351 14.8492C13.8256 15.2398 14.4588 15.2398 14.8493 14.8492C15.2399 14.4587 15.2399 13.8256 14.8493 13.435L9.41435 8.00004L15.0712 2.34315C15.4618 1.95263 15.4618 1.31946 15.0712 0.928939C14.6807 0.538414 14.0475 0.538414 13.657 0.928939L8.00013 6.58583L2.12141 0.707108C1.73089 0.316584 1.09772 0.316584 0.7072 0.707108Z" fill="white" />
        </svg>
      </button>
    </transition>
    <button class="blurred header__nav header__nav--sound" @click="mySound">
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="soundOn" fill-rule="evenodd" clip-rule="evenodd" d="M9 0C8.44772 0 8 0.447716 8 1V19C8 19.5523 8.44772 20 9 20C9.55228 20 10 19.5523 10 19V1C10 0.447716 9.55228 0 9 0ZM0 4C0 3.44772 0.447715 3 1 3C1.55228 3 2 3.44772 2 4V16C2 16.5523 1.55228 17 1 17C0.447715 17 0 16.5523 0 16V4ZM16 4C16 3.44772 16.4477 3 17 3C17.5523 3 18 3.44772 18 4V16C18 16.5523 17.5523 17 17 17C16.4477 17 16 16.5523 16 16V4Z" fill="white" />
      </svg>
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      on: true
    }
  },
  setup () {
    const mySound = () => {
      const myAudio = document.querySelector('.myAudio')
      myAudio.volume = 0.3
      return myAudio.paused ? myAudio.play() : myAudio.pause()
    }
    return {
      mySound
    }
  }
}

</script>

<style lang="scss">
.section--header{
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  z-index: 999;
}

.header__nav{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-top: 40px;
  &--close{
    left: 0;
    margin-left: 40px;
  }
  &--sound{
    right: 0;
    margin-right: 40px;
  }
  &--logo{
    left: 0;
    margin-left: 40px;
  }
}

.no-mode-fade-enter-active, .no-mode-fade-leave-active {
  transition: opacity 
}

.no-mode-fade-enter-from, .no-mode-fade-leave-to {
  opacity: 0
}
</style>
