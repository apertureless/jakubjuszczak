<template functional>
  <div class="section-header">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'SectionHeader'
  }
</script>

<style lang="scss">
  @import "~@nextindex/next-scss/next-scss";
  .section-header {
    width: 100%;
    display: flex;
    justify-content: center;

    > * {
      font-family: TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif;
      position: relative;
      text-align: center;
      display: inline-block;
      padding-bottom: rem(15);

      &:after {
        content: '';
        position: absolute;
        height: rem(10);
        width: 80%;
        background: #FE4845;
        left: 50%;
        transform: translate(-50%,-50%);
        bottom: 0;
      }
    }
  }
</style>
