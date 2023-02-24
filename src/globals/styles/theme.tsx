const theme = {
  colors: {
    primary: "#4EA8DE",
    primaryDark: "#1E6F9F",
    secondary: "#8284FA",
    secondaryDark: "#5E60CE",
    background1: "#0D0D0D",
    background2: "#1A1A1A",
    gray: {
      50: "#F2F2F2",
      100: "#E5E5E5",
      200: "#d9d9d9",
      300: "#808080",
      400: "#333",
      500: "#262626",
      600: "#1A1A1A",
      700: "#0d0d0d",
      800: "#0e0e0e",
      900: "#0f0f0f",
    },
    danger: "#E25858",
  },
  border: {
    radius: 8,
    width: 1,
  },
  fonts: {
    regular: "Inter_400Regular",
    bold: "Inter_700Bold",
  },
} as const;

export default theme;
