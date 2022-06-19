import { app, BrowserWindow } from 'electron';
import path from 'path'

let win: BrowserWindow

const createWindow = () => {
  win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, `/preload.js`)
    }
  })
  win.webContents.openDevTools()
  win.loadURL('http://localhost:3000/')
  win.on('close', () => {
    win = null!
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})