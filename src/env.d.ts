type A = {
  A: string
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: A
}
