<template>
  <div class="Card">
    <div
      :class="categoryClass"
      class="Card__overlay">
      <div class="Card__tag">
        <div class="Tag">
          {{ category }}
        </div>
      </div>
      <component :is="iconComponent"/>
    </div>
    <div class="Card__content">
      <h3>{{ title }}</h3>
      <p class="small">{{ excerpt }}</p>

      <div class="Card__action">
        <a
          :href="buttonLink"
          :class="{disabled: disabled}"
          target="_blank"
          class="button">{{ buttonLabel }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  const allowedCategories = ['games', 'talks', 'open source', 'client']

  export default {
    name: 'Card',
    props: {
      title: {
        type: String,
        default: ''
      },
      excerpt: {
        type: String,
        default: ''
      },
      category: {
        type: String,
        default: 'client',
        validator: value => allowedCategories.some(cat => cat === value)
      },
      buttonLabel: {
        type: String,
        default: 'Case Study'
      },
      buttonLink: {
        type: String,
        default: '#'
      },
      disabled: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      categoryClass () {
        return this.category
          .toLowerCase()
          .split(' ')
          .join('')
      },
      iconComponent () {
        return () => import(`~/components/icons/${this.categoryClass}.vue`)
      }
    }
  }
</script>

<style lang="scss">
  @import "~@nextindex/next-scss/next-scss";

  .Card {
    border-radius: rem(10);
    box-shadow: 0 rem(4) rem(15) rgba(0, 0,0, .15);

    display: grid;
    grid-template-columns: rem(130) 1fr;
    grid-template-rows: auto;

    @include media($sm-up) {
      grid-template-columns: rem(230) 1fr;
      min-height: rem(290);
    }
  }

  .Card__overlay {
    padding: rem(20);
    border-radius: rem(10);

    &.client {
      background: #FF615F;
    }

    &.opensource {
      background: #63B086;
    }

    &.games {
      background: #A163B0;
    }

    &.talks {
      background: #63A7B0;
    }
  }

  .Card__content {
    padding: rem(20);
    display: grid;
    grid-template-columns: 1fr;

    h3, p {
      margin: 0;
    }
  }

  .Card__tag {
    margin-bottom: rem(15);
  }

  .Card__action {
    align-self: end;
  }

  .Tag {
    background: rgba(0, 0, 0, .3);
    color: #fff;
    font-size: rem(11);
    border-radius: rem(20);
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    text-align: center;
    padding: rem(5);
    text-transform: uppercase;
    font-weight: bold;

    @include media($sm-up) {
      font-size: rem(14);
    }
  }

  .button {
    text-decoration: none;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    padding: rem(15) rem(20);
    border: 1px solid currentColor;
    color: black;
    border-radius: rem(50);
    text-transform: uppercase;
    font-size: rem(13);
    font-weight: bold;
    display: block;
    text-align: center;

    &.disabled {
      color: #ababab;
      cursor: not-allowed;
      &:hover,
      &:active,
      &:focus {
        color: #ababab;
      }
    }

    &:hover,
    &:active,
    &:focus {
      color: #FE4845;
    }
  }
</style>
