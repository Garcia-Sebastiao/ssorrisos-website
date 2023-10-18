/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: "rubikRegular",
        rubikMedium: "rubikMedium",
        rubikBold: "rubikBold",
        assistantSemiBold: "assistantSemiBold",
        assistantBold: "assistantBold",
        DMSans: "DMSans",
        DMSansMedium: "DMSansMedium",
        DMSansSemiBold: "DMSansSemiBold",
        DMSansBold: "DMSansBold",
      },
      colors: {
        primaryColor: "#BE9F41",
        secondaryColor: "#1e1e1e",
        primaryFont: "#404040",
      },
    },
  },
  plugins: [],
};
