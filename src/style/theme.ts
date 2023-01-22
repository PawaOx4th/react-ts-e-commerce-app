const theme = {
  main: "blue",
  primary: "#41CBBF",
  secondary: "#164E63",
  gray: "#BEC9DF",
  white: "#F8FAFC",
} as const

export type ThemeType = typeof theme
export default theme
