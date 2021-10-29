<template>
  <div class="pulsar-radio-canvas"></div>
</template>

<script>
/* eslint-disable func-call-spacing,no-undef,no-unmodified-loop-condition */

import Vue from 'vue'
import p5 from 'p5'

export default Vue.extend({
  data () {
    return {
      sketch: null,
      instance: null
    }
  },
  mounted () {
    const isDark = this.$vuetify.theme.isDark

    this.sketch = function (p) {
      let f = 0

      p.setup = function () {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight * 0.2)
        document.querySelector('.pulsar-radio-canvas').appendChild(canvas.elt)
        p.frameRate(60)
      }

      p.draw = function () {
        f++
        
        p.background(isDark ? '#121212' : '#ffffff')
        p.fill(isDark ? '#121212' : '#ffffff')
        p.stroke(isDark ? 255 : '#474793') 

        for (let y = 100; y < p.height; y += 5) {
          p.beginShape()
          let x = 0
          for (x = 0; x < p.width; ++x) {
            p.vertex(x, y - 80 / (1 + p.pow (x - p.width / 2, 4) / 8e6) * p.noise(x / 30 + f / 50 + y))
          }
          p.vertex(x, 1e4)
          p.endShape()
        }
      }
    }

    this.instance = new p5(this.sketch)
  }
})
</script>

<style lang="scss">
  .pulsar-radio-canvas {
    padding: 0;
    margin: 0;
    // z-index: -3;
  }
</style>
