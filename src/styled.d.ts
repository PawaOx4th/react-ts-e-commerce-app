import { ThemeType } from "style/theme";
import "styled-components";

type CustomThemeType = ThemeType;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme extends CustomThemeType {}
}
