<template>
  <div class="main-logo">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 805 808"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      xmlns:serif="http://www.serif.com/"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
      <rect
        id="Artboard1"
        x="0"
        y="0"
        width="804.517"
        height="807.083"
        style="fill:none;"/>
      <circle
        cx="404"
        cy="407"
        r="325.843"
        style="fill:#fe4845;"/>
      <rect
        x="284.542"
        y="308.951"
        width="140.652"
        height="274.043"/>
      <path
        d="M390.631,623.852c-31.947,0 -60.874,-5.162 -86.782,-15.486c-25.908,-10.324 -79.239,-50.421 -95.991,-70.291l76.218,-76.658c10.908,13.636 51.622,37.765 62.141,44.388c10.519,6.623 21.428,9.935 32.726,9.935c14.415,0 25.421,-4.286 33.018,-12.857c7.597,-8.571 11.396,-21.233 11.396,-37.985l0,-155.448l-139.085,0l102,-102.022l173.248,-2l0,251.288c0,55.712 -14.318,97.496 -42.953,125.352c-28.635,27.856 -70.614,41.784 -125.936,41.784Z"
        style="fill:#fff;fill-rule:nonzero;"/>
    </svg>
  </div>
</template>

<style lang="scss">
  @import "~@nextindex/next-scss/next-scss";

  .main-logo {
    width: rem(64);
    height: rem(64);
    justify-self: center;

    @include media($sm-up) {
      justify-self: start;
    }
  }
</style>
