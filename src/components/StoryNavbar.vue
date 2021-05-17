<template>
  <div class="section section--header">
    <router-link to="/Selection">
      <button class="blurred header__nav header__nav--close" @click="close">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.7072 0.707108C0.316676 1.09763 0.316676 1.7308 0.7072 2.12132L6.58592 8.00004L0.929099 13.6569C0.538575 14.0474 0.538575 14.6805 0.929099 15.0711C1.31962 15.4616 1.95279 15.4616 2.34331 15.0711L8.00013 9.41425L13.4351 14.8492C13.8256 15.2398 14.4588 15.2398 14.8493 14.8492C15.2399 14.4587 15.2399 13.8256 14.8493 13.435L9.41435 8.00004L15.0712 2.34315C15.4618 1.95263 15.4618 1.31946 15.0712 0.928939C14.6807 0.538414 14.0475 0.538414 13.657 0.928939L8.00013 6.58583L2.12141 0.707108C1.73089 0.316584 1.09772 0.316584 0.7072 0.707108Z" fill="white" />
        </svg>
      </button>
    </router-link>
    <button class="blurred header__nav header__nav--sound" @click="mySound">
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="soundOn" fill-rule="evenodd" clip-rule="evenodd" d="M9 0C8.44772 0 8 0.447716 8 1V19C8 19.5523 8.44772 20 9 20C9.55228 20 10 19.5523 10 19V1C10 0.447716 9.55228 0 9 0ZM0 4C0 3.44772 0.447715 3 1 3C1.55228 3 2 3.44772 2 4V16C2 16.5523 1.55228 17 1 17C0.447715 17 0 16.5523 0 16V4ZM16 4C16 3.44772 16.4477 3 17 3C17.5523 3 18 3.44772 18 4V16C18 16.5523 17.5523 17 17 17C16.4477 17 16 16.5523 16 16V4Z" fill="white" />
      </svg>
    </button>
  </div>
</template>

<script>

export default {
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
  z-index: 998;
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

</style>
