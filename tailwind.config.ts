/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        xs: "480px"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      fontSize: {
        "head-title": [
          "24px",
          {
            lineHeight: "120%",
            fontWeight: "Bold",
            letterSpacing: "-0.03em"
          }
        ],
        "title-title-M": [
          "18px",
          {
            lineHeight: "150%",
            fontWeight: "700",
            letterSpacing: "0"
          }
        ],
        "title1-title": [
          "18px",
          {
            lineHeight: "120%",
            fontWeight: "700",
            letterSpacing: "0",
            color: "red"
          }
        ],
        "title-title": [
          "18px",
          {
            lineHeight: "21.6px",
            fontWeight: "400",
            letterSpacing: "0",
            color: "#19191B"
          }
        ],
        "body-title": [
          "16px",
          {
            lineHeight: "120%",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "body-input-label": [
          "16px",
          {
            lineHeight: "120%",
            fontWeight: "medium",
            letterSpacing: "0"
          }
        ],
        "body-150": [
          "16px",
          {
            lineHeight: "150%",
            fontWeight: "regular",
            letterSpacing: "0"
          }
        ],
        "body-120": [
          "16px",
          {
            lineHeight: "120%",
            fontWeight: "regular",
            letterSpacing: "0"
          }
        ],
        "paragraph-150": [
          "14px",
          {
            lineHeight: "150%",
            fontWeight: "regular",
            letterSpacing: "0"
          }
        ],
        "paragraph-120": [
          "14px",
          {
            lineHeight: "120%",
            fontWeight: "regular",
            letterSpacing: "0"
          }
        ],
        "paragraph-title": [
          "14px",
          {
            lineHeight: "120%",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "caption-120": [
          "12px",
          {
            lineHeight: "120%",
            fontWeight: "regular",
            letterSpacing: "0"
          }
        ]
      },
      colors: {
        scheme: {
          100: "#FFFFFF",
          200: "#F5F6F7",
          300: "#EDF0F3",
          400: "#E0E5EA",
          500: "#C6CCD1",
          600: "#A6ABAF",
          700: "#7B8287",
          800: "#494F54",
          900: "#25292C",
          1000: "#191B1C"
        },
        text: {
          error: "#FA685F",
          white: "#FFFFFF",
          disabled: "#C6CCD1",
          lite: "#A6ABAF",
          dark: "#494F54",
          black: "#494F54"
        },
        background: {
          white: "#FFFFFF",
          container: "#FFFFFF",
          gray: "#F5F6F7",
          chips: "#E0E5EA",
          placeholder: "#E0E5EA",
          focus: "#191B1C"
        },
        icon: {
          white: "#FFFFFF",
          lite: "#A6ABAF",
          dark: "#494F54",
          black: "#191B1C"
        },
        line: {
          white: "#FFFFFF",
          lite: "#EDF0F3",
          medium: "#E0E5EA",
          dark: "#494F54",
          focus: "#25292C"
        }
      }
    },
    plugins: []
  }
};
