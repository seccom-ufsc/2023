<template>
  <v-container class="fourier-canvas"></v-container>  
</template>

<script>
import Vue from 'vue'
import Fourier from './../js/Fourier'
import p5 from 'p5'

export default Vue.extend({
  data () {
    return {
      sketch: null,
      instance: null
    }
  },
  mounted () {
    this.attachCanvas()
  },
  methods: {
    attachCanvas () {
      const isDark = this.$vuetify.theme.isDark

      this.sketch = function (p) {
        const mobile = window.innerHeight > window.innerWidth 
        const wave = new Fourier(p, mobile ? 0.02 : 0.05, 70, '#474793', 7, isDark)

        p.setup = function () {
          const canvas = p.createCanvas(window.innerWidth, window.innerHeight)
          document.querySelector('.fourier-canvas').appendChild(canvas.elt)
        }

        p.draw = function () {
          p.clear()
          p.translate(p.width - 120, p.height / 2)
          p.rotate(p.PI)
          wave.show()
        }
      }

      this.instance = new p5(this.sketch)
    }
  }
})
</script>

<style lang="scss">
  .fourier-canvas {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    // z-index: -3;
  }
</style>
