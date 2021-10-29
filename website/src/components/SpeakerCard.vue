<template>
  <v-card class="speaker-card">
    <v-row class="d-flex justify-center pa-8">
      <v-avatar size="150" rounded="circle">
        <img :src="speaker.photo" style="object-fit: cover">
      </v-avatar>
    </v-row>
    <v-card-title>{{speaker.name}}</v-card-title>
    <v-card-subtitle>{{speaker.title}}</v-card-subtitle>
    <v-card-actions @click="show = !show">
      <h4>{{show ? "Ver menos" : "Ver mais"}}</h4>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text style="text-align: justify">{{speaker.bio}}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      show: false
    }
  },
  props: ['speaker'],
})

</script>

<style>
  .speaker-card {
    width: 400px;
    flex-grow: 1;
  }

  .v-card__text {
    width: 100%;
  }

  .v-card__actions h4 {
    padding: 8px;
  }
  
  @media (max-aspect-ratio: 1/1) {
    .speaker-card {
      max-width: 100%;
    }
  }
</style>
