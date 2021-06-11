module.exports = (hex, alpha) => {
  let r,g,b,a
  x = new RegExp('#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$')

  if (x.test(hex)) {
    a = isNaN(+alpha) ? alpha : +alpha

    const h = hex.replace(/^#/, '')
    if (h.length === 3) {
      r = '0x' + h[0] + h[0]
      g = '0x' + h[1] + h[1]
      b = '0x' + h[2] + h[2]
      return alpha ? `rgba(${+r}, ${+g}, ${+b}, ${a})` : `rgb(${+r}, ${+g}, ${+b})`
    } else if (h.length === 6) {
      r = '0x' + h[0] + h[1]
      g = '0x' + h[2] + h[3]
      b = '0x' + h[4] + h[5]
      return alpha ? `rgba(${+r}, ${+g}, ${+b}, ${a})` : `rgb(${+r}, ${+g}, ${+b})`
    }
  } else {
    return 'invalid hex'
  }
}