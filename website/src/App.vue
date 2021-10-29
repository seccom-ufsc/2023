<template>
  <v-app>
    <v-app-bar app color="primary">
      <img style="height: 80%" src="./assets/logo.png">
      <div class="text-h6 roboto-mono px-3 blue-text-must-click mobile-hide">SECCOM</div>
      <v-spacer></v-spacer>
      <v-tabs v-model="activeTab" right slider-color="#BCBCDC" slider-size="4" color="#BCBCDC">
        <v-tab @click="changeTab(index)" v-for="(tab, index) in tabs" :key="tab.id" :id="tab.id" class="roboto-mono">
          {{tab.title}}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <StartPage/>
      <SchedulePage/>
      <SpeakersPage/>
      <ContactPage/>
      <RegistrationPage/>
      <PulsarRadioBackground/>
    </v-main>
  </v-app>
</template>

<script>
import StartPage from './components/StartPage'
import SchedulePage from './components/SchedulePage'
import SpeakersPage from './components/SpeakersPage'
import ContactPage from './components/ContactPage'
import RegistrationPage from './components/RegistrationPage'
import PulsarRadioBackground from './components/PulsarRadioBackground'

export default {
  name: 'App',
  components: {
    StartPage,
    SchedulePage,
    SpeakersPage,
    ContactPage,
    RegistrationPage,
    PulsarRadioBackground
  },
  data: () => ({
    marks: {
      home: null,
      schedule: null,
      speakers: null,
      contact: null,
      registration: null
    },
    tabs: [
      { id: 'start-page-tab', title: 'INÍCIO', container: 'start-page' },
      { id: 'schedule-page-tab', title: 'PROGRAMAÇÃO', container: 'schedule-page' },
      { id: 'speakers-page-tab', title: 'PALESTRANTES', container: 'speakers-page' },
      { id: 'contact-page-tab', title: 'CONTATO', container: 'contact-page' },
      // { id: 'registration-page-tab', title: 'INSCRIÇÕES', container: 'registration-page' },
    ],
    activeTab: 0,
  }),
  mounted () {
    this.marks.home = document.querySelector('#start-page')
    this.marks.schedule = document.querySelector('#schedule-page')
    this.marks.speakers = document.querySelector('#speakers-page')
    this.marks.contact = document.querySelector('#contact-page')
    // this.marks.registration = document.querySelector('#registration-page')
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      if (window.scrollY >= (this.marks.contact.offsetTop)) {
        this.activeTab = 3
      } else if (window.scrollY >= (this.marks.speakers.offsetTop)) {
        this.activeTab = 2
      } else if (window.scrollY >= (this.marks.schedule.offsetTop)) {
        this.activeTab = 1
      } else {
        this.activeTab = 0
      }
    },
    changeTab (index) {
      this.activeTab = index
      window.scrollTo({
        top: document.getElementById(this.tabs[index].container).offsetTop,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
  .v-toolbar__content .roboto-mono {
    font-family: 'Roboto Mono', monospace !important;
  }

  .v-toolbar__content .blue-text-must-click {
    color: #BCBCDC;
  }

  @media (max-aspect-ratio: 1/1) {
    .mobile-hide {
      display: none;
    }
  }

  .v-tab {
    color: #BCBCDC;
  }
</style>
