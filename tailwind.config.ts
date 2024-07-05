import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)', ...fontFamily.sans],
      },
      fontSize: {
        // Reference: https://github.com/tailwindlabs/tailwindcss/issues/11529

        /** 12px size / 1rem height / regular */
        'regular-12': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
        /** 12px size / 1rem height / medium */
        'medium-12': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
        /** 12px size / 1rem height / semi-bold */
        'semi-12': ['0.75rem', { lineHeight: '1rem', fontWeight: '600' }],

        /** 14px size / 1.25rem height / regular */
        'regular-14': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        /** 14px size / 1.25rem height / medium */
        'medium-14': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        /** 14px size / 1.25rem height / semi-bold */
        'semi-14': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }],

        /** 16px size / 150% height / regular */
        'regular-16': ['1rem', { lineHeight: '150%', fontWeight: '400' }],
        /** 16px size / 150% height / medium */
        'medium-16': ['1rem', { lineHeight: '150%', fontWeight: '500' }],
        /** 16px size / 150% height / bold */
        'bold-16': ['1rem', { lineHeight: '150%', fontWeight: '700' }],

        /** 18px size / 144.444% height / regular */
        'regular-18': ['1.125rem', { lineHeight: '144.444%', fontWeight: '400' }],
        /** 18px size / 144.444% height / medium */
        'medium-18': ['1.125rem', { lineHeight: '144.444%', fontWeight: '500' }],
        /** 18px size / 144.444% height / bold */
        'bold-18': ['1.125rem', { lineHeight: '144.444%', fontWeight: '700' }],

        /** 20px size / 145.455% height / regular */
        'regular-20': ['1.25rem', { lineHeight: '145.455%', fontWeight: '400' }],
        /** 20px size / 145.455% height / medium */
        'medium-20': ['1.25rem', { lineHeight: '145.455%', fontWeight: '500' }],
        /** 20px size / 145.455% height / bold */
        'bold-20': ['1.25rem', { lineHeight: '145.455%', fontWeight: '700' }],

        /** 24px size / 141.667% height / medium */
        'medium-24': ['1.5rem', { lineHeight: '141.667%', fontWeight: '500' }],
        /** 24px size / 141.667% height / bold */
        'bold-24': ['1.5rem', { lineHeight: '141.667%', fontWeight: '700' }],

        /** 28px size / 146.667% height / medium */
        'medium-28': ['1.75rem', { lineHeight: '146.667%', fontWeight: '500' }],
        /** 28px size / 146.667% height / bold */
        'bold-28': ['1.75rem', { lineHeight: '146.667%', fontWeight: '700' }],

        /** 32px size / 138.889% height / medium */
        'medium-32': ['2rem', { lineHeight: '138.889%', fontWeight: '500' }],
        /** 32px size / 138.889% height / bold */
        'bold-32': ['2rem', { lineHeight: '138.889%', fontWeight: '700' }],
        /** 32px size / 138.889% height / extra-bold */
        'extra-bold-32': ['2rem', { lineHeight: '138.889%', fontWeight: '800' }],

        /** 36px size / 138.889% height / medium */
        'medium-36': ['2.25rem', { lineHeight: '138.889%', fontWeight: '500' }],
        /** 36px size / 138.889% height / bold */
        'bold-36': ['2.25rem', { lineHeight: '138.889%', fontWeight: '700' }],
        /** 36px size / 138.889% height / extra-bold */
        'extra-bold-36': ['2.25rem', { lineHeight: '138.889%', fontWeight: '800' }],

        /** 40px size / 137.5% height / medium */
        'medium-40': ['2.5rem', { lineHeight: '137.5%', fontWeight: '500' }],
        /** 40px size / 137.5% height / bold */
        'bold-40': ['2.5rem', { lineHeight: '137.5%', fontWeight: '700' }],
        /** 40px size / 137.5% height / extra-bold */
        'extra-bold-40': ['2.5rem', { lineHeight: '137.5%', fontWeight: '800' }],

        /** 48px size / 142.857% height / medium */
        'medium-48': ['3rem', { lineHeight: '142.857%', fontWeight: '500' }],
        /** 48px size / 142.857% height / bold */
        'bold-48': ['3rem', { lineHeight: '142.857%', fontWeight: '700' }],
        /** 48px size / 142.857% height / extra-bold */
        'extra-bold-48': ['3rem', { lineHeight: '142.857%', fontWeight: '800' }],
      },
      colors: {
        border: 'hsl(var(--border))',
        divider: 'hsl(var(--divider))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        header: {
          DEFAULT: 'hsl(var(--header))',
          foreground: 'hsl(var(--header-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          foreground: 'hsl(var(--sidebar-foreground))',
          active: 'hsl(var(--sidebar-active))',
          'active-foreground': 'hsl(var(--sidebar-active-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      screens: {
        xs: '480px',
        '2xl': '1400px',
      },
      spacing: {
        'header-height': 'var(--header-height)',
        'sidebar-width': 'var(--sidebar-width)',
      },
      boxShadow: {
        section: 'var(--section-shadow)',
        popover: 'var(--popover-shadow)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/aspect-ratio')],
} satisfies Config

export default config
