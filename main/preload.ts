import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron"

contextBridge.exposeInMainWorld('api', {
  request: (channel: string, data: any) => {
    ipcRenderer.send(channel, data)
  },
  recieveOnce:(channel:string,func:any)=>{
    ipcRenderer.once(channel, (event: IpcRendererEvent, arg: any) => {
      return func(arg)
    })
  }
})
