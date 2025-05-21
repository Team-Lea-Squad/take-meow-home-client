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
        "head-120-B": [
          "24px",
          {
            lineHeight: "28px",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "head-sub": [
          "22px",
          {
            lineHeight: "28px",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],

        "title-120-B": [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "title-150-B": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "body-120-B": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "body-150-B": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "body-120-M": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            letterSpacing: "0"
          }
        ],
        "body-120-R": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0"
          }
        ],
        "body-150-R": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
            letterSpacing: "0"
          }
        ],
        "paragraph-120-B": [
          "14px",
          {
            lineHeight: "16px",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "paragraph-150-B": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "paragraph-150-M": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            letterSpacing: "0"
          }
        ],
        "paragraph-120-R": [
          "14px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0"
          }
        ],
        "paragraph-150-R": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0"
          }
        ],
        "caption-120-B": [
          "12px",
          {
            lineHeight: "14px",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "caption-120-R": [
          "12px",
          {
            lineHeight: "14px",
            fontWeight: "400",
            letterSpacing: "0"
          }
        ],
        "onboarding-bold": [
          "42px",
          {
            lineHeight: "120%",
            fontWeight: "bold",
            letterSpacing: "0"
          }
        ],
        "onboarding-light": [
          "36px",
          {
            lineHeight: "120%",
            fontWeight: "300",
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
