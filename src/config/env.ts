const env = {
  VITE_API_URL: "",
  VITE_WEB_NAME: "",
  MODE: "" as unknown,
} as const;

export type ENVType = typeof env;

export default env;
