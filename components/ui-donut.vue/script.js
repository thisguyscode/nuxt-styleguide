export default {
  data: () => {
    return {
      foregroundColor: '#badaff',
      backgroundColor: '#bada55',
      radius: 95,
      strokeWidth: 10
    }
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    outOf: {
      type: Number,
      required: true
    }
  },
  computed: {
    percentage: function () {
      return (this.value / this.outOf) * 100
    },
    // If more than 50% filled we need to switch arc drawing mode from less than 180 deg to more than 180 deg
    largeArc: function () {
      return this.percentage < 50 ? 0 : 1
    },
    // Where to put x coordinate of center of circle
    x: function () {
      return 100
    },
    // Where to put y coordinate of center of circle
    y: function () {
      return 100 - this.radius
    },
    // Calculate X coordinate of end of arc (+ 100 to move it to middle of image)
    // add some rounding error to make arc not disappear at 100%
    endX: function () {
      return -Math.sin(this.radians) * this.radius + 100 - 0.0001
    },
    // Calculate Y coordinate of end of arc (+ 100 to move it to middle of image)
    endY: function () {
      return Math.cos(this.radians) * this.radius + 100
    },
    // Calculate length of arc in radians
    radians: function () {
      var degrees = (this.percentage / 100) * 360
      var value = degrees - 180 // Turn the circle 180 degrees counter clockwise
      return (value * Math.PI) / 180
    },
    // If we reach full circle we need to complete the circle, this ties into the rounding error in X coordinate above
    z: function () {
      return this.percentage === 100 ? 'z' : ''
    },
    dBg: function () {
      return 'M ' + this.x + ' ' + this.y + ' A ' + this.radius + ' ' + this.radius + ' 0 1 1 ' + (this.x - 0.0001) + ' ' + this.y + ' z'
    },
    d: function () {
      return 'M ' + this.x + ' ' + this.y + ' A ' + this.radius + ' ' + this.radius + ' 0 ' + this.largeArc + ' 1 ' + this.endX + ' ' + this.endY + ' ' + this.z
    },
    computedValue: function () {
      if (this.value) {
        return this.value
      } else {
        return 'XYZ'
      }
    }
  }
}
