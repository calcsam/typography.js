// @flow
import gray from 'gray-percentage'
import type { OptionsType } from '../Types.js'

const theme: OptionsType = {
  baseFontSize: '19px',
  baseLineHeight: '32px',
  googleFonts: [
    {
      name: 'Noto Serif',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Noto Serif', 'serif'],
  bodyFontFamily: ['Noto Serif', 'serif'],
  headerGray: 20,
  bodyGray: 20,
  headerWeight: '700',
  bodyWeight: 400,
  boldWeight: 700,
  escapeHatch: (styles, setStyles, { adjustFontSizeTo, rhythm }, options) => {
    let newStyles
    newStyles = setStyles(styles, ['h5', 'h6'], {
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    })
    newStyles = setStyles(newStyles, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], {
      marginTop: rhythm(2),
    })
    newStyles = setStyles(styles, ['ul', 'ol'], {
      marginLeft: 0,
    })
    // children ol, ul
    newStyles = setStyles(newStyles, ['li > ol', 'li > ul'], {
      marginLeft: rhythm(2/3),
      marginBottom: 0,
    })
    // Blockquote.
    newStyles = setStyles(styles, 'blockquote', {
      ...adjustFontSizeTo('20px'),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(1/2),
      marginLeft: rhythm(-5/8),
      borderLeft: `${rhythm(1/8)} solid rgba(51, 51, 51, 0.7)`,
    })
    newStyles = setStyles(styles, 'blockquote > :last-child', {
      marginBottom: 0,
    })
    newStyles = setStyles(styles, 'blockquote cite', {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(options.bodyGray),
      fontStyle: 'normal',
    })
    newStyles = setStyles(styles, 'blockquote cite:before', {
      content: '"— "',
    })

    return newStyles
  },
}

export default theme
