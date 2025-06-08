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
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif"
        ]
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
        },
        blue: {
          100: "#f0f9ff",
          200: "#e0f2fe",
          300: "#bae6fd",
          400: "#7dd3fc",
          500: "#38bdf8",
          600: "#0ea5e9",
          700: "#0284c7",
          800: "#0369a1",
          900: "#075985",
          1000: "#0c4a6e"
        },
        purple: {
          100: "#f9fafe",
          200: "#ecedfc",
          300: "#d0d2f7",
          400: "#b5b8f2",
          500: "#9a9eec",
          600: "#7a82e4",
          700: "#6167c9",
          800: "#5756a6",
          900: "#494582",
          1000: "#38325d"
        },
        red: {
          100: "#fef2f2",
          200: "#fee2e2",
          300: "#fecaca",
          400: "#fca5a5",
          500: "#f87171",
          600: "#ef4444",
          700: "#dc2626",
          800: "#b91c1c",
          900: "#991b1b",
          1000: "#7f1d1d"
        },
        orange: {
          100: "#fff7ed",
          200: "#feddc5",
          300: "#fed7aa",
          400: "#fdba74",
          500: "#fb923c",
          600: "#f97316",
          700: "#ea580c",
          800: "#c2410c",
          900: "#9a3412",
          1000: "#7c2d12"
        },
        yellow: {
          100: "#fefce8",
          200: "#fef9c3",
          300: "#fef08a",
          400: "#fde047",
          500: "#facc15",
          600: "#eab308",
          700: "#ca8a04",
          800: "#a16207",
          900: "#854d0e",
          1000: "#713f12"
        },
        green: {
          100: "#d3ffe5",
          200: "#adffce",
          300: "#77ffad",
          400: "#3dff8a",
          500: "#01f863",
          600: "#00cc51",
          700: "#029f40",
          800: "#006e2c",
          900: "#015f26",
          1000: "#003515"
        },
        base: {
          100: "#ffffff",
          200: "#f5f6f7",
          300: "#edf0f3",
          400: "#e0e5ea",
          500: "#c6ccd1",
          600: "#a6abaf",
          700: "#7b8287",
          800: "#494f54",
          900: "#25292c",
          1000: "#191b1c"
        }
      },
      spacing: {
        100: "0px",
        200: "2px",
        300: "4px",
        400: "8px",
        500: "12px",
        600: "16px",
        700: "20px",
        800: "24px",
        900: "28px",
        1000: "32px",
        1100: "40px",
        1200: "48px",
        1300: "56px",
        1400: "64px",
        1500: "80px"
      }
    },
    plugins: []
  }
};
