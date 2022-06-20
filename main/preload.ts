const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
  'api',{
    request:(channel,data)=>{
      ipcRenderer.send(channel,data)
      ipcRenderer.on('reply',(event,arg)=>{
        console.log(arg)
      })
    }
  }
)
