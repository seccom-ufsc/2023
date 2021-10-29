<template>
  <v-container id="registration-page"></v-container>
</template>

<script>
export default {
  name: 'RegistrationPage',
  components: {},
  data: () => ({
    container: document.querySelector('#registration-page'),
    
  }),
  mounted () {
    this.container = document.querySelector('#registration-page')
  }
}
</script>

<style lang="scss">
  .blue-text-must-click {
    color: #474793;
  }

  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }
</style>
