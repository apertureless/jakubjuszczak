<template>
  <div class="main-navigation">
    <nav aria-labelledby="mainmenulabel">
      <ul>
        <li>
          <nuxt-link
            exact
            active-class="is-active"
            to="/">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            active-class="is-active"
            to="/work">
            Work
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            active-class="is-active"
            to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <h2
      id="mainmenulabel"
      class="visuallyhidden">Main Menu</h2>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss">
@import "~@nextindex/next-scss/next-scss";

.main-navigation {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  nav {
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      padding-left: 0;
      justify-content: center;

      @include media($sm-up) {
        justify-content: flex-end;
      }
    }

    li {
      margin: 0 rem(20);
      @include media($sm-up) {
        margin: 0 rem(40);
      }
    }
  }

  a {
    font-size: rem(16);
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    position: relative;
    padding-bottom: rem(10);

    @include media($sm-up) {
      font-size: rem(18);
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: rem(6);
      background: #FE4845;
      bottom: 0;
      left: 0;
      right: 0;
      transition: width .2s ease-out;
    }

    &:hover, &.is-active {
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: rem(6);
        background: #FE4845;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
}

.visuallyhidden {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
</style>
