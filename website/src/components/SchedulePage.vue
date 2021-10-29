<template>
  <v-container id="schedule-page">
    <div class="text-h2 my-15 text-center">Programação</div>
    <v-sheet :max-width="window.innerWidth">
      <v-calendar
        v-model="value"
        ref="calendar"
        locale="pt-br"
        start="2020-10-05"
        end="2020-10-10"
        first-time="13:00"
        last-time="21:00"
        :interval-count="8"
        :interval-height="80"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-color="getEventColor"
        @change="getEvents"
        @click:event="showEvent"
      ></v-calendar>
      <v-menu
        v-model="selectedOpen"
        :close-on-content-click="false"
        :activator="selectedElement"
        offset-x
      >
        <v-card
          color="grey lighten-4"
          min-width="350px"
          flat
        >
          <v-toolbar :color="selectedEvent.color" dark>
            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <span v-html="selectedEvent.details"></span>
          </v-card-text>
          
          <v-card-actions>
            <v-btn
              text
              color="secondary"
              @click="selectedOpen = false"
            >
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-sheet>
  </v-container>
</template>

<script>
import events from './../config/events.json'

export default {
  name: 'SchedulePage',
  data: () => ({
    container: document.querySelector('#schedule-page'),
    window: window,
    type: 'week',
    mode: 'column',
    modes: ['stack', 'column'],
    weekday: [1, 2, 3, 4, 5],
    value: '',
    events: [],
    colors: ['#474793', '#4c4ca8', '#2e2e5e'],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
  }),
  methods: {
    getEvents () {
      events.forEach((event) => {
        event.color = this.colors[this.rnd(0, this.colors.length - 1)]
      })
      this.events = events
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    getEventColor (event) {
      return event.color
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
  mounted () {
    this.container = document.querySelector('#schedule-page')
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

  .v-window__prev, .v-window__next {
    background: rgba(0, 0, 0, 0) !important;    
  }

  div.v-event-timed {
    padding: 6px;
  }
</style>
