<template>
  <v-container id="contact-page" style="min-height: 100vh">
    <v-row class="d-flex justify-center my-15 roboto-mono px-15" >
      <div class="text-h2" v-text="'Quer falar com a gente?'"></div>
    </v-row>
    <v-row class="d-flex justify-center">
      <ContactCard class="ma-5" :contact="item" v-for="(item, index) in contacts" :key="index"/>
    </v-row>
  </v-container>
</template>

<script>
import ContactCard from './ContactCard'

export default {
  name: 'ContactPage',
  components: {
    ContactCard
  },
  data: () => ({
    container: document.querySelector('#contact-page'),
    contacts: [
      { icon: 'fa-brands fa-facebook', name: '@seccom-ufsc', link: 'https://www.facebook.com/seccom.ufsc' },
      { icon: 'fa-brands fa-instagram', name: '@seccom-ufsc', link: 'https://www.instagram.com/seccom.ufsc/' },
      { icon: 'fa-solid fa-envelope', name: 'seccom.ufsc@gmail.com', link: 'mailto:seccom.ufsc@gmail.com' },
      { icon: 'fa-brands fa-github', name: 'seccom.ufsc@gmail.com', link: 'https://github.com/seccom-ufsc/' },
      { icon: 'fa-brands fa-discord', name: 'seccom.ufsc@gmail.com', link: 'https://discord.gg/zTmGqsh' },
      { icon: 'fa-brands fa-telegram', name: 'seccom.ufsc@gmail.com', link: 'https://t.me/seccomufsc' },
      { icon: 'fa-brands fa-youtube', name: 'seccom.ufsc@gmail.com', link: 'https://www.youtube.com/channel/UCva2-CmrvppJlf8jSAK61vw' },
    ]
  }),
  mounted () {
    this.container = document.querySelector('#contact-page')
  }
}
</script>

<style lang="scss">
  .blue-text-must-click {
    color:#474793;
  }

  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }
</style>
