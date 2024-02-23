/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/*.jsx",
"./src/pages/*.jsx",
"./src/components/*.jsx"
],
  theme: {
    extend: {
      colors:{
        "pinkii":"#F9C04F",
        "page-col":"#000002",
        "sidebar":"#FCF9FC",
        "dash-col":"#FFFFFF",
        "item-col":"#132D46",
        "person-col":"#191E29",
        "delete":"#CD2929",
        "search-col":"#E4EEF2",
        "filter":"#25546D",
        "filter-after":"#183646",
         "settings-col":" #173857",
         "admin-bg":"#E4EEF2",
         "text-col":"#191E29",
         "light-white": "rgba(255,255,255,0.17)",
         "green": "#22C014",
         "grad": ""
      },
      screens: {
        'xs': '468px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

