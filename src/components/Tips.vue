<template>
  <div class="tips">
    360
  </div>
</template>

<style lang="scss">

.tips{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 40px;
    width: 90%;
    text-align: center;

    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    &::before{
        content: '';
        border-bottom: 2px solid #fff;
        width: 48%;
    }
    &::after{
        content: '';
        border-bottom: 2px solid #fff;
        width: 48%;
    }
}

</style>
