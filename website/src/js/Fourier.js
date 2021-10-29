export default class Fourier {
  constructor (p5Instance, increment, radius, color, n, darkTheme = false) {
    this.baseRadius = radius
    this.radius = radius
    this.speed = increment
    this.time = 0
    this.wave = []
    this.color = color
    this.x = 0
    this.y = 0
    this.n = n
    this.prevX = null
    this.prevY = null
    this.waveDistance = radius * 2
    this.p5Instance = p5Instance
    this.darkTheme = darkTheme
  }

  update (n) {
    this.radius = this.baseRadius * (4 / (n * Math.PI))

    this.prevX = this.x
    this.prevY = this.y

    this.x += this.radius * this.p5Instance.cos(n * this.time)
    this.y += this.radius * this.p5Instance.sin(n * this.time)

    if (this.wave.length > window.innerWidth) {
      this.wave.pop()
    }
  }

  show () {
    this.x = 0
    this.y = 0
    this.time += this.speed
    for (let i = 0; i < this.n; i++) {
      this.update(i * 2 + 1)

      // Outter circle
      this.p5Instance.noFill()
      this.p5Instance.stroke(this.darkTheme ? 255 : 0)
      this.p5Instance.ellipse(this.prevX, this.prevY, this.radius * 2)

      // Inside circle
      this.p5Instance.fill(this.color)
      this.p5Instance.stroke(this.color)
      this.p5Instance.line(this.prevX, this.prevY, this.x, this.y)
      this.p5Instance.ellipse(this.x, this.y, 8)
    }

    this.wave.unshift({
      x: this.x,
      y: this.y
    })

    this.p5Instance.line(this.x, this.y, this.waveDistance, this.wave[0].y)

    this.p5Instance.translate(this.waveDistance, 0)
    this.p5Instance.beginShape()
    this.p5Instance.noFill()

    for (let index = 0; index < this.wave.length; index++) {
      this.p5Instance.vertex(index, this.wave[index].y)
    }

    this.p5Instance.endShape()
    this.p5Instance.translate(-this.waveDistance, 0)
  }
}
