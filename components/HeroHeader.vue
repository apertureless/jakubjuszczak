<template>
  <div class="Hero__header">
    <div class="Hero__image">
      <img
        src="~/assets/img/hero.png"
        alt="Hero image">
    </div>
    <transition
      name="fly"
      appear>
      <h1 class="Hero__text">{{ text }}</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: 'Handcrafted websites, visual content & a bit of magic'
      }
    },
  }
</script>

<style lang="scss">
  @import "~@nextindex/next-scss/next-scss";

  .Hero__header {
    border-radius: rem(10);
    position: relative;
    box-shadow: 0 rem(15) rem(30) 0 rgba(0, 0, 0, .3);
  }

  .Hero__image img {
    border-radius: rem(10);
    max-width: 100%;
    display: block;
  }

  .Hero__text {
    color: #fff;
    font-family: TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-shadow: 0px 3px 5px rgba(0, 0, 0, .3);
    /* max-width: 100%; */
    margin: auto;
    font-size: rem(26);

    @include media($sm-up) {
      font-size: rem(38);
      /* max-width: 90%; */
    }

    @include media($md-up) {
      font-size: rem(72);
      /* max-width: rem(770); */
    }
  }

  .fly-enter-active {
    transition: all .3s ease;
  }
  .fly-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fly-enter, .fly-leave-to {
    transform: translate(-10%,-50%);;
    opacity: 0;
  }
</style>
