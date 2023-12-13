declare module '@/types/lighthouse/internal/node-fetch' {
  // Just reuse the types from the built-in window.fetch
  export = window.fetch
}
