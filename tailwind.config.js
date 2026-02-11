module.exports = {
  purge: ["./site/**/*.njk"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "1.5rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1120px",
    },
    colors: {
      gray: "#141414",
      white: "#ffffff",
      yellow: "#FFB906",
      hue: "#F86849",
      none: "transparent",
      link: "#68abda",
      green: "#26b565",
      current: "currentColor",
    },
    opacity: {
      0: "0",
      2: ".02",
      5: ".05",
      10: ".1",
      25: ".25",
      60: ".6",
      75: ".75",
      90: ".9",
      100: "1",
    },
    fontFamily: {
      display: ["Sporting Grotesque", "sans-serif", "Arial"],
      text: ["trade-gothic-next", "sans-serif", "Arial"],
    },
    extend: {
      fontSize: {
        xxs: ".75rem",
        xs: ".8125rem",
        base: [
          "1rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.035em",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.035em",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.035em",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.035em",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "1.375",
            letterSpacing: "0.035em",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "1.4",
            letterSpacing: "0.035em",
          },
        ],
      },
      spacing: {
        38: "9.5rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        full: "100%",
        px: "1px",
      },
      zIndex: {
        "-1": "-1",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        0: "0ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      translate: {
        50: "50%",
        "-50": "-50%",
        25: "25%",
        "-25": "-25%",
      },
      rotate: {
        135: "135deg",
      },
      scale: {
        103: "1.03",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  variants: {
    extend: {
      translate: ["focus"],
      rotate: ["group-hover"],
      scale: ["group-hover"],
      textColor: ["group-hover"],
      borderColor: ["group-hover"],
      borderWidth: ["last"],
      backgroundColor: ["group-hover"],
      display: ["group-hover", "group-focus", "focus-within"],
      opacity: ["group-hover"],
      ringWidth: ["group-focus"],
      padding: ["first", "last"],
      animation: ["motion-safe", "motion-reduce", "group-hover"],
    },
  },
  plugins: [],
};
