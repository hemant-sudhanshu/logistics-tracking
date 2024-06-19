/** @type {import('tailwindcss').Config} */
// export const darkMode = "selector";
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#075985",
      background: "#1A202C",
      secondary: "#D6D3D1",
      card: "#F9FAFB",
      color: "#FFFFFF",
      button: "#D6D3D1",
      hover: "#E5E7EB",
      "button-hover": "#FCA5A5",
      light: "#a1a1aa",
      placeholder: "#6C7275",
      error: "#FF0000",
      success: "#38CB89",
      border: " #E8ECEF",
      white: "#FFFFFF",
      black: "#000000",
      red: "#b91c1c",
      yellow: "#eab308",
      green: "#15803d",
      teal: "#115e59",
    },
    padding: {
      navbar: "72px",
    },
    fontSize: {
      "8px": "8px",
    },
    lineHeight: {
      "8px": "10px",
    },
    // that is animation class
    animation: {
      fadeIn: "fadeIn 0.2s ease-in-out",
      fadeInDown: "fadeInDown 0.2s ease-in",
    },
    // that is actual animation
    keyframes: (theme) => ({
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeInDown: {
        "0%": {
          opacity: "0",
          transform: "translateY(-20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    }),
  },
};
export const plugins = ["prettier-plugin-tailwindcss"];
