<template>
  <div class="infos">
    <div class="infos infos--column">
      <h1>
        <strong>
          Memory Box
        </strong>
      </h1>
      <router-link to="/brief">
        <button class="cta cta--intro" @click="explore">
          <svg viewBox="0 0 100 100" fill="none">
            <circle
              class="circle"
              cx="50"
              cy="50"
              r="49"
            />
          </svg>
          <p>Explore</p>
        </button>
      </router-link>
      <h2>
        Travel through lived
      </h2>
    </div>
  </div>
</template>

<style lang="scss">
.infos{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 95%;
}

.infos--column{
  display: flex;
  flex-direction: column;
}

.title--big{
  width: max-content;
  text-align: center;
}

.cta {
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 150px;
  animation-timing-function: ease-out;
}

.cta p {
  position: absolute;
  font-size: 25.89px;
  text-transform: uppercase;
}

.circle {
  animation: circle 20s linear infinite;
  transform-origin: center;
  stroke-width: 1;
  stroke-dasharray: 1 10 ;
  stroke: #fff;
  background-color: transparent;
}

@keyframes circle {
  0% {
    transform:rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
