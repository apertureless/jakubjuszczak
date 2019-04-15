<template>
  <section class="container">
    <HeroHeader text="Client Projects, Open Source, Talks & Games"/>
    <SectionHeader>
      <h2>Work</h2>
    </SectionHeader>
    <ProjectFilter v-model="activeFilter"/>
    <div class="Card__group">
      <Card
        v-for="(project, index) in filteredProjects"
        :key="`${index}-${project.title}`"
        :title="project.title"
        :excerpt="project.excerpt"
        :category="project.category"
        :button-label="project.label"
        :button-link="project.link"
        :disabled="project.disabled"
      />
    </div>
  </section>
</template>

<script>
const HeroHeader = () => import('~/components/HeroHeader.vue')
const SectionHeader = () => import('~/components/SectionHeader.vue')
const Card = () => import('~/components/work/Card.vue')
const ProjectFilter = () => import('~/components/work/Filter.vue')

export default {
  components: { HeroHeader, SectionHeader, Card, ProjectFilter },
  data: () => ({
    activeFilter: '',
    projects: [{
       category: 'open source',
       title: 'vue-chartjs',
       excerpt: 'A simple wrapper for Chart.js to kickstart beautiful charts.',
       link: 'https://github.com/apertureless/vue-chartjs',
       label: 'GitHub',
       disabled: false
      }, {
       category: 'client',
       title: 'Shine Management',
       excerpt: 'A medium-sized model agency from Essen',
       link: '#/',
       label: 'Case Study',
       disabled: true
      }, {
       category: 'talks',
       title: 'Frontend on Steroids',
       excerpt: 'My PottJS talk about Vue.js',
       link: 'https://speakerdeck.com/apertureless/frontend-on-steroids-with-vue-dot-js',
       label: 'Speakerdeck',
       disabled: false
      }, {
       category: 'games',
       title: 'Prisoned',
       excerpt: 'Prisoned is a short narrative adventure about depression and the struggle of loneliness.',
       link: 'https://hasukimchi.itch.io/prisoned',
       label: 'itch.io',
       disabled: false
    }, {
       category: 'client',
       title: 'PhotoEditorSDK Vue Plugin',
       excerpt: 'Vue.js plugin for the PhotoEditorSKD',
       link: 'https://github.com/imgly/pesdk-wrapper-vuejs',
       label: 'GitHub',
       disabled: false
    }, {
       category: 'client',
       title: 'Visquid',
       excerpt: 'Visquid is an open data visualization portal, based on the python library pive.',
       link: '#/',
       label: 'Case Study',
       disabled: true
    }, {
       category: 'talks',
       title: 'Testing vuex',
       excerpt: 'Slides of my talk about testing a vuex store.',
       link: 'https://speakerdeck.com/apertureless/testing-vuex',
       label: 'SpeakerDeck',
       disabled: false
    }, {
       category: 'open source',
       title: 'Colour Hunt',
       excerpt: 'Small Community for sharing color palettes.',
       link: 'https://www.colourhunt.com/',
       label: 'Site',
       disabled: false
    }, {
       category: 'open source',
       title: 'npm stats',
       excerpt: 'Small web appliation to check download statistics of npm packges.',
       link: 'http://npm-stats.org/',
       label: 'Site',
       disabled: false
    }, {
       category: 'open source',
       title: 'Sketch Flip Size',
       excerpt: 'Sketch plugin to flip the artboard',
       link: 'https://github.com/apertureless/sketch-flip-size',
       label: 'GitHub',
       disabled: false
    }, {
       category: 'games',
       title: 'Adventureless',
       excerpt: 'A surreal point-and-click adventure about desire and loneliness',
       link: 'https://gamejolt.com/games/adventureless/22344',
       label: 'GameJolt',
       disabled: false
    }, {
       category: 'client',
       title: 'Calao',
       excerpt: 'Calao Beach Wear',
       link: 'https://calao.de/',
       label: 'Site',
       disabled: false
    }]
  }),
  computed: {
    filteredProjects () {
      return this.activeFilter ?
        this.projects
          .filter((project) => project.category === this.activeFilter) :
        this.projects
    }
  }
}
</script>

<style lang="scss">
  @import "~@nextindex/next-scss/next-scss";

  .Card__group {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: rem(24);

    @include media($sm-up) {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
