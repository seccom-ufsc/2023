<template>
  <v-container class="pulsar-radio-canvas"></v-container>  
</template>

<script>
import Vue from 'vue'
import PulsarRadio from './../js/PulsarRadio.js'
import p5 from 'p5'

export default Vue.extend({
  data () {
    return {
      sketch: null,
      instance: null
    }
  },
  mounted () {
    this.sketch = function (p) {
      const wave = new Fourier(p, 0.03, 70, '#2D78BA', 5)

      p.setup = function () {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight)
        document.querySelector('.pulsar-radio-canvas').appendChild(canvas.elt)
        p.frameRate(60)
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
})
</script>

<style lang="scss">
  .fourier-canvas {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
  }
</style>
