import "styled-components"
import theme, { ThemeType } from "style/theme"

type CustomTheme = ThemeType

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
