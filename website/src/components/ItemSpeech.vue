<template>
  <v-row>
    <v-col class="flex-grow-0">
      <div class="text-subtitle-1 blue-text-must-click">{{speech.start}}</div>
      <div class="text-subtitle-1 blue-text-must-click">{{speech.end}}</div>
    </v-col>
    <v-col class="flex-grow-1">
      <div class="text-h5">{{speech.title}}</div>
      <div class="text-body-2">{{speech.subtitle}}</div>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ItemSpeech',
  data () {
    return {}
  },
  props: ['speech']
})
</script>

<style lang="scss">
  .blue-text-must-click {
    color: #474793;
  }

  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }
</style>
