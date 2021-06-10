<template>
  <div class="section section--header">
    <router-link to="/Selection">
      <button class="blurred header__nav header__nav--close" @click="close">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.7072 0.707108C0.316676 1.09763 0.316676 1.7308 0.7072 2.12132L6.58592 8.00004L0.929099 13.6569C0.538575 14.0474 0.538575 14.6805 0.929099 15.0711C1.31962 15.4616 1.95279 15.4616 2.34331 15.0711L8.00013 9.41425L13.4351 14.8492C13.8256 15.2398 14.4588 15.2398 14.8493 14.8492C15.2399 14.4587 15.2399 13.8256 14.8493 13.435L9.41435 8.00004L15.0712 2.34315C15.4618 1.95263 15.4618 1.31946 15.0712 0.928939C14.6807 0.538414 14.0475 0.538414 13.657 0.928939L8.00013 6.58583L2.12141 0.707108C1.73089 0.316584 1.09772 0.316584 0.7072 0.707108Z"
            fill="white"
          />
        </svg>
      </button>
    </router-link>
    <button class="blurred header__nav header__nav--sound" @click="mySound">
      <span />
      <span />
      <span />
    </button>
  </div>
</template>

<script>

export default {
  setup () {
    const mySound = () => {
      const myMem1 = document.querySelector('.myMem1')
      myMem1.pause()
      myMem1.currentTime = 0

      const myAudio = document.querySelector('.myAudio')
      myAudio.volume = 0.1
      return myAudio.paused ? myAudio.play() : myAudio.pause()
    }
    const close = () => {
      const myMem1 = document.querySelector('.myMem1')
      myMem1.pause()
      myMem1.currentTime = 0
    }
    return {
      mySound,
      close
    }
  }
}

</script>
