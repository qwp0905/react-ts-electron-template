declare global {
  interface Window {
    "api": {
      request: (channel: string, data: any) => void,
      recieveOnce: (channel: string, func: any) => void
    }
  }
}

export { }