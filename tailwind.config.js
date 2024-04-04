/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/src/Assets/Backgrounds/Background.png')",
        clearday:
          "url('/src/Assets/Backgrounds/Weather=Clear, Moment=Day.png')",
        clearnight:
          "url('/src/Assets/Backgrounds/Weather=Clear, Moment=Night.png')",
        cloudsday:
          "url('/src/Assets/Backgrounds/Weather=Cloudy, Moment=Day.png')",
        cloudsnight:
          "url('/src/Assets/Backgrounds/Weather=Cloudy, Moment=Night.png')",
        rainday: "url('/src/Assets/Backgrounds/Weather=Rain, Moment=Day.png')",
        fewcloudsday:
          "url('/src/Assets/Backgrounds/Weather=Few Clouds, Moment=Day.png')",
        fewcloudsnight:
          "url('/src/Assets/Backgrounds/Weather=Few Clouds, Moment=Night.png')",
        stormy: "url('/src/Assets/Backgrounds/Weather=Storm, Moment=Day.png')",
      }),
      fontFamily: {
        nunito: ["Nunito", "Helvetica Neue", "sans-serif"],
      },
      width: {
        90: "22rem",
        150: "150px",
      },
      height: {
        150: "150px",
      },
      colors: {
        "custom-purple": "rgb(127, 128, 150)",
        "custom-blue-transparent": "rgba(22, 22, 30, 0.5)",
        "gray-900": "#13131A",
        "gray-800": "#16161F",
        "gray-700": "#1C1C27",
        "gray-600": "#22222F",
        "gray-500": "#3B3B54",
        "gray-400": "#7F7F98",
        "gray-300": "#ABABC4",
        "gray-200": "#BFBFD4",
        "gray-100": "#FAFAFA",
        "blue-dark": "#22222F",
        "blue-light": "#8FB2F5",
      },
    },
  },
  plugins: [],
};
