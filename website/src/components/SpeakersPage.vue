<template>
  <v-container id="speakers-page" style="min-height: 100vh">
    <div class="text-h2 my-15 text-center">Convidados</div>
    <v-row class="d-flex justify-center align-start">
      <SpeakerCard class="ma-4" v-for="(speaker, index) in speakers" :key="index" :speaker="speaker"/>
    </v-row>
  </v-container>
</template>

<style lang='scss'>
  .blue-text-must-click {
    color: #474793;
  }
  
  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }
</style>
