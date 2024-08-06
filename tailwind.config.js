let colors = require("tailwindcss/colors")

module.exports = {
  content: ["./safelist.html", "./index.html", "./404.html"],
  darkMode: 'class',
  important: true,
  theme: {
      extend: {
          transitionProperty: {
              "width": "width"
          },
          keyframes: {
              'fade-in': {
                  '0%': {
                      opacity: '0'
                  },
                  '100%': {
                      opacity: '1'
                  }
              },
              'fade-out': {
                  '0%': {
                      opacity: '1'
                  },
                  '100%': {
                      opacity: '0'
                  }
              },
              'pulsate': {
                  '0%': {
                      transform: 'scale(1)'
                  },
                  '50%': {
                      transform: 'scale(1.2)'
                  },
                  '100%': {
                      transform: 'scale(1)'
                  }
              },
              'slide-in': {
                  '0%': {
                      opacity: '0',
                      transform: 'translateY(-100%)'
                  },
                  '100%': {
                      opacity: '1',
                      transform: 'translateY(0%)'
                  },
              },
              'slide-out': {
                  '0%': {
                      opacity: '1',
                      transform: 'translateY(0%)'
                  },
                  '100%': {
                      opacity: '0',
                      transform: 'translateY(-100%)'
                  },
              },
              'slide-up': {
                  '0%': {
                      opacity: '0',
                      transform: 'translateY(50%)'
                  },
                  '100%': {
                      opacity: '1',
                      transform: 'translateY(0%)'
                  }
              },
              'slide-down': {
                  '0%': {
                      opacity: '1',
                      transform: 'translateY(0%)'
                  },
                  '100%': {
                      opacity: '0',
                      transform: 'translateY(-50%)'
                  }
              },
              'nod': {
                  '0%': {
                      transform: 'translateX(0%)'
                  },
                  "20%": {
                      transform: "translateX(-0.5rem)"
                  },
                  "40%": {
                      transform: "translateX(0.5rem)"
                  },
                  "60%": {
                      transform: "translateX(-0.5rem)"
                  },
                  "80%": {
                      transform: "translateX(0.5rem)"
                  },
                  '100%': {
                      transform: 'translateX(0%)'
                  }
              },
              "ping2": {
                  "75%, 100%": {
                      transform: "scale(1.5)",
                      opacity: "0"
                  }
              }
          },
          animation: {
              'fade-in': 'fade-in 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              'fade-out': 'fade-out 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              'slide-in': 'slide-in 0.2s cubic-bezier(.08,.52,.01,.98)',
              'slide-out': 'slide-out 0.2s cubic-bezier(.08,.52,.01,.98)',
              'select': 'pulsate 0.3s cubic-bezier(.08,.52,.01,.98)',
              'slide-up': 'slide-up 0.2s cubic-bezier(.08,.52,.01,.98)',
              'slide-down': 'slide-down 0.2s cubic-bezier(.08,.52,.01,.98)',
              'nod': 'nod 0.5s cubic-bezier(.08,.52,.01,.98)',
              'ping2': 'ping2 1s cubic-bezier(.01,.66,.2,.98)'
          },
          colors: {
              neutral: colors.slate,
              positive: colors.green,
              urge: colors.violet,
              warning: colors.yellow,
              info: colors.blue,
              critical: colors.red,
              violet: colors.violet
          }
      }
  },
  safelist: ["block", "animate-fade-in", "animate-fade-out"],
  plugins: [require("a17t")],
}
