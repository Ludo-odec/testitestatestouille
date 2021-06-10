<template>
  <div class="section section--brief">
    <img class="background background--intro" src="@/assets/images/home/n1.jpg" alt="Image Norway">
    <article class="briefing">
      <p>
        Welcome traveller !
      </p>
      <p>
        Here you will discover my conception of the journey that I have imagined
        to give the desire to discover new horizons. Live through the experiences
        of other adventurers.
      </p>
      <p>
        Here you will experience 360° images accompanied by their stories to
        immerse yourself in the feelings and emotions of those who have
        discovered before you.
      </p>
      <p>
        I hope you’ll enjoy my vision of discovery !
      </p>
    </article>
    <router-link to="/home" class="skip">
      <button class="cta cta--brief" @click="letsGo">
        Let's go
      </button>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Brief'
}
</script>

<style lang="scss">

.section--brief{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.briefing{
    font-size: 25.89px;
    font-weight: 100;
    width: 600px;
    &::after{
        content: "— L.D.";
        cursor: text;
        float: right;
    }
}

.skip{
    position: absolute;
    bottom: 40px;
    font-size: 25.89px;
}

.cta--brief{
  border: 0.5px solid #fff;
  border-radius: 999px;
}

</style>
