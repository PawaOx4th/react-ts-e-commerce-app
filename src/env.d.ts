/* eslint-disable @typescript-eslint/naming-convention */
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: import("config/env").ENVType;
  //         ^?
}
