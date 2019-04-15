<template>
  <div>
    <NavigationHeader/>
    <nuxt/>
    <PageFooter/>
  </div>
</template>

<script>
import NavigationHeader from '~/components/NavigationHeader'
import PageFooter from '~/components/Footer'

export default {
  components: { NavigationHeader, PageFooter }
}
</script>

<style lang="scss">
@import "~@nextindex/next-scss/next-scss";

html, body {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}
.container {
  max-width: rem(1024);
  margin: 0 auto;
}

h2 {
  font-size: rem(72);
}

.content h2 {
   font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: rem(20);
}

h3 {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  font-size: rem(20);

  @include media($sm-up) {
    font-size: rem(24);
  }
}

h4 {
  font-size: rem(18);
  @include media($sm-up) {
    font-size: rem(20);
  }
}

p, li {
  font-size: rem(16);
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  &.intro {
    font-weight: bold;
  }

  &.small {
    font-size: rem(14);
  }

  @include media($sm-up) {
    font-size: rem(18);

    &.small {
      font-size: rem(16);
    }
  }
}


.content {
  display: grid;
  grid-template-columns: 1fr;
  @include media($sm-up) {
    grid-template-columns: rem(335) 1fr;
    grid-column-gap: rem(18);
  }
}

.content__image {
    display: flex;
    justify-content: center;
    img {
      display: block;
      max-width: 100%;
    }

    @include media($sm-up) {
      display: block;
    }
}

.content__text {
  a {
    color: #000;
    &:hover,
    &:active,
    &:focus {
      color: #FE4845;
    }
  }
}
</style>
