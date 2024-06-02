import plugin from 'tailwindcss/plugin'

module.exports = plugin(function ({ addUtilities, theme }) {
  addUtilities({
    '.regular-16': {
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.6'),
      fontWeight: '400',
    },
    '.medium-16': {
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.6'),
      fontWeight: '500',
    },
    '.bold-16': {
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.6'),
      fontWeight: '700',
    },
    '.regular-18': {
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight.7'),
      fontWeight: '400',
    },
    '.medium-18': {
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight.7'),
      fontWeight: '500',
    },
    '.bold-18': {
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight.7'),
      fontWeight: '700',
    },
    '.regular-20': {
      fontSize: theme('fontSize.xl'),
      lineHeight: theme('lineHeight.7'),
      fontWeight: '400',
    },
    '.medium-20': {
      fontSize: theme('fontSize.xl'),
      lineHeight: theme('lineHeight.7'),
      fontWeight: '500',
    },
    '.bold-20': {
      fontSize: theme('fontSize.xl'),
      lineHeight: theme('lineHeight.7'),
      fontWeight: '700',
    },
    '.regular-24': {
      fontSize: theme('fontSize.2xl'),
      lineHeight: theme('lineHeight.8'),
      fontWeight: '400',
    },
    '.medium-24': {
      fontSize: theme('fontSize.2xl'),
      lineHeight: theme('lineHeight.8'),
      fontWeight: '500',
    },
    '.bold-24': {
      fontSize: theme('fontSize.2xl'),
      lineHeight: theme('lineHeight.8'),
      fontWeight: '700',
    },
    '.regular-28': {
      fontSize: '1.75rem',
      lineHeight: theme('lineHeight.9'),
      fontWeight: '400',
    },
    '.medium-28': {
      fontSize: '1.75rem',
      lineHeight: theme('lineHeight.9'),
      fontWeight: '500',
    },
    '.bold-28': {
      fontSize: '1.75rem',
      lineHeight: theme('lineHeight.9'),
      fontWeight: '700',
    },
    '.regular-32': {
      fontSize: '2rem',
      lineHeight: theme('lineHeight.10'),
      fontWeight: '400',
    },
    '.medium-32': {
      fontSize: '2rem',
      lineHeight: theme('lineHeight.10'),
      fontWeight: '500',
    },
    '.bold-32': {
      fontSize: '2rem',
      lineHeight: theme('lineHeight.10'),
      fontWeight: '700',
    },
    '.regular-36': {
      fontSize: theme('fontSize.4xl'),
      lineHeight: theme('lineHeight.10'),
      fontWeight: '400',
    },
    '.medium-36': {
      fontSize: theme('fontSize.4xl'),
      lineHeight: theme('lineHeight.10'),
      fontWeight: '500',
    },
    '.bold-36': {
      fontSize: theme('fontSize.4xl'),
      lineHeight: theme('lineHeight.10'),
      fontWeight: '700',
    },
  })
})
