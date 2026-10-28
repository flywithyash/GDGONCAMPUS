/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111827',
          hero: '#10151F',
          surface: '#161D2B',
          muted: '#1F293D',
          hover: '#242F45',
        },
        canvas: {
          bg: '#F7F8FA',
          subtle: '#EEF0F4',
          card: '#FFFFFF',
          border: '#E2E6ED',
          'border-strong': '#CBD2DE',
        },
        gdg: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853',
        },
        content: {
          primary: '#111827',
          secondary: '#657082',
          muted: '#8D99AE',
          invert: '#F9FAFB',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 12px -2px rgba(17, 24, 39, 0.06), 0 2px 4px -2px rgba(17, 24, 39, 0.04)',
        'elevated': '0 12px 24px -4px rgba(17, 24, 39, 0.08), 0 4px 6px -2px rgba(17, 24, 39, 0.04)',
        'hero-card': '0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'accent-blue': '0 0 0 1px rgba(66, 133, 244, 0.3), 0 4px 14px 0 rgba(66, 133, 244, 0.15)',
      },
    },
  },
  plugins: [],
}
