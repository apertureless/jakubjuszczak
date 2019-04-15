<!-- eslint-disable -->
<template>
  <section class="container">
    <HeroHeader text="Get in contact"/>
    <SectionHeader>
      <h2>Contact</h2>
    </SectionHeader>
    <div class="content">
      <div class="content__image"> </div>
      <div class="content__text">
        <p class="intro">
          So, you have an exciting project and looking for a motivated and creative developer?
        </p>
        <p>
            Simply write me an e-mail: <a href="mailto:juszczak.j@googlemail.com">juszczak.j@googlemail.com</a> and I get in touch with you as soon as possible! 🚀
        </p>
      </div>
    </div>
  </section>
</template>

<script>
const HeroHeader = () => import('~/components/HeroHeader.vue')
const SectionHeader = () => import('~/components/SectionHeader.vue')

export default {
  components: { HeroHeader, SectionHeader }
}
</script>

<style lang="scss">
</style>
