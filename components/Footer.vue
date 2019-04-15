<template>
  <div class="Footer__group">
    <ul class="Footer__social">
      <li>
        <a
          target="_new"
          href="https://github.com/apertureless">Github</a>
      </li>
      <li>
        <a
          target="_new"
          href="https://dribbble.com/apertureless">Dribble</a>
      </li>
      <li>
        <a
          target="_new"
          href="https://twitter.com/apertureless">Twitter</a>
      </li>
      <li>
        <a
          target="_new"
          href="https://medium.com/@apertureless">Medium</a>
      </li>
      <li>
        <a
          target="_new"
          href="https://stackoverflow.com/users/3791380/jakub-juszczak">Stackoverflow</a>
      </li>
    </ul>
    <ul class="Footer__sub">
      <li>
        <nuxt-link
          exact
          active-class="is-active"
          to="/impressum">Impressum</nuxt-link>
      </li>
      <li>
        <nuxt-link
          exact
          active-class="is-active"
          to="/legal">Datenschutz</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageFooter'
  }
</script>

<style lang="scss">
@import "~@nextindex/next-scss/next-scss";

.Footer__group {
  position: relative;
  margin: rem(64) 0 0 0;
  padding: rem(32) 0;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2;

  &:after {
    content: '';
    position: absolute;
    height: rem(10);
    width: 80%;
    background: #FE4845;
    left: 50%;
    transform: translate(-50%,-50%);
    top: 0;
  }
}

.Footer__social,
.Footer__sub {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include media($sm-up) {
    flex-direction: row;
  }

  li {
    display: inline-block;
    margin: 0 rem(16);
  }

  a {
    color: #000;
    font-size: rem(16);
    font-weight: bold;
    text-decoration: none;

    &:hover,
    &:focus {
      color: #FE4845;
    }
  }
}
</style>
