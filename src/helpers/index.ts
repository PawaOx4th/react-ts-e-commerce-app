export function definedStore(storeName: string) {
  return {
    name: "e-commerce-app",
    store: storeName,
    enabled: import.meta.env.MODE === "development" ? true : false,
  }
}
