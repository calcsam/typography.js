// @flow
import React from 'react'

module.exports = (options: any) =>
  React.createClass({
    displayName: 'GoogleFont',

    render () {
      // Create family + styles string
      let fontsStr = ''
      if (options.googleFonts) {
        const fonts = options.googleFonts.map((font) => {
          let str = ''
          str += font.name.split(' ').join('+')
          str += ':'
          str += font.styles.join(',')

          return str
        })

        fontsStr = fonts.join('|')

        if (fontsStr) {
          return React.DOM.link({
            href: `//fonts.googleapis.com/css?family=${fontsStr}`,
            rel: 'stylesheet',
            type: 'text/css',
          })
        } else {
          return null
        }
      } else {
        return null
      }
    },
  })

