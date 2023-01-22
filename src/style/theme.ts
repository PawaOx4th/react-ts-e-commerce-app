const theme = {
  color: {
    primary: "#41CBBF",
    secondary: "#164E63",
    gray: "#BEC9DF",
    white: "#F8FAFC",
  },
  breakpoints: {
    xs: 0,
    sm: 600, // mobile landscape, tablet (portrait)
    md: 1024, // chromebooks, ipad pro (portrait), tablet (landscape)
    lg: 1600, // most laptops and desktops
    xl: 2048, // 2k and up
  },
} as const

export type ThemeType = typeof theme
export default theme
