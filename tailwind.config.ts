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
        text: {
          error: "#FA685F",
          title: "#272E41",
          text: "#515860",
          dark: "#555564",
          lite: "#999ba9",
          disabled: "#dcdeeb"
        },
        background: {
          DEFAULT: "#FCFDFF"
        },
        line: {
          DEFAULT: "fff",
          focus: "#555564",
          dark: "#999ba9",
          medium: "#dcdeeb",
          lite: "#eaeef3",
          white: "#fff"
        },
        system: {
          main: "#3182F6s",
          "m-text": "#515860",
          "blue-300": "#173ab6",
          "green-100": "#e8f5e5",
          "green-200": "#b9e1b2",
          "green-300": "##169b00",
          "orange-100": "#fff8e5",
          "orange-200": "#ffeab2",
          "orange-300": "#d98f00"
        }
      }
    },
    plugins: []
  }
};
