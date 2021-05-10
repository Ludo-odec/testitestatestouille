<template>
  <div class="footer">
    <p class="footer__nav footer__nav--north">
      69°38'13.3"N
    </p>
    <p class="footer__nav footer__nav--east">
      19°00'46.5"E
    </p>
  </div>
</template>

<style lang="scss">
.footer{
    position: absolute;
    bottom: 40px;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    width: 100%;
    height: fit-content;
    z-index: 999;
}

.footer__nav{
    &--north{
        margin-left: 40px;
    }
    &--east{
        margin-right: 40px;
    }
}
</style>
