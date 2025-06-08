/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      // 기존 커스텀 컬러, 폰트 등 그대로 사용
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
