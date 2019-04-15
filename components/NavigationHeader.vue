<template>
  <header class="main-header">
    <Logo/>
    <Navigation/>
  </header>
</template>

<script>
  import Logo from './Logo'
  import Navigation from './Navigation'

  export default {
    name: 'NavigationHeader',
    components: { Logo, Navigation }
  }
</script>

<style lang="scss">
  @import "~@nextindex/next-scss/next-scss";

  .main-header {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    max-width: rem(1024);
    margin: 0 auto;
    margin-bottom: rem(64);

    @include media($sm-up) {
      grid-template-columns: rem(64) 1fr;
    }
  }
</style>
