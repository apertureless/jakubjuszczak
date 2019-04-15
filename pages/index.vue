<!-- eslint-disable -->
<template>
  <section class="container">
    <HeroHeader/>
    <SectionHeader>
      <h2>About</h2>
    </SectionHeader>
    <div class="content">
      <div class="content__image">
        <img
          src="~/assets/img/profile.jpg"
          alt="Profile Image Jakub Juszczak">
      </div>
      <div class="content__text">
        <p class="intro">
          Hi 👋,<br>

          my name is Jakub, I am a frontend developer 🦄 and open source enthusiast. I love working with modern technologies, building and designing awesome projects and pushing boundaries.
        </p>
        <p>Modern technologies make the web awesome! And I try to keep up to date in the fast-moving web scene. And building cool products, people enjoy.</p>

        <p>I am mostly active in two categories: Frontend Development and UI / UX Design. No one likes ugly interfaces and no one likes bad UX. However, I have experience in different fields and with different technologies.</p>

        <h3>Frontend</h3>
        <p>So let's talk about the frontend: I mostly work with Vue.js in the frontend. I have several open source components on <a target="_new" href="https://github.com/apertureless">GitHub</a> and held some talks about Vue.js. Furthermore, I've got the possibility to do a technical review of the book <a target="_new" href="http://shop.oreilly.com/product/0636920103455.do">Vue.js: Up and Running</a> which was fun!</p>

        <p>But I am not limited to Vue.js only. I've also built mobile applications with react native.</p>

        <h4>Tools & Frameworks</h4>

        <ul>
          <li>Vue.js</li>
          <li>React Native</li>
          <li>Expo</li>
          <li>Webpack</li>
          <li>Apollo / GraphQL</li>
          <li>Nuxtjs</li>
          <li>Gridsome</li>
        </ul>

        <h3>Design</h3>
        <p>I prefer minimalistic & clean designs with strong user experience. I strongly prefer Sketch as my design tool of choice. However, I keep a close eye on Figma and Framer, too. As they got their own benefits in certain areas.</p>
        <p>I also like motion design and got some experience in various multimedia areas like 3D modelling, sound design and game development. I am very interested in VR / AR, interactive applications and creative coding.</p>

        <h4>Tools</h4>
        <ul>
          <li>Sketch</li>
          <li>Figma</li>
          <li>Framer</li>
          <li>Principle</li>
          <li>After Effects</li>
          <li>Blender 3D</li>
          <li>Pen & Paper</li>
          <li>Reaper</li>
          <li>Game Maker</li>
          <li>Unity 3D</li>
        </ul>

        <h3>Backends & DevOps</h3>
        <p>Backend development is not my strongest trait, but the experience is there. For client websites, I mostly choose WordPress (Bedrock Stack with ACF). But I also have experience with GraphQL, AWS Amplify, Nodejs (express), Strapi, Laravel and other frameworks.</p>
        <p>I am a big fan of Docker and automatization (CI, CD, Ansible, Terraform) and you can often meet me on local meetups.</p>
        <h4>Tools</h4>
        <ul>
          <li>Terraform</li>
          <li>Docker</li>
          <li>Ansible</li>
          <li>Prisma</li>
          <li>GraphQL Yoga</li>
          <li>Strapijs</li>
        </ul>
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
