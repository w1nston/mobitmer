const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron');
const path = require('path');
const url = require('url');

const developmentLoadURL = 'http://localhost:3000';
// TODO: Use correct one depending on environment
// const productionLoadURL = url.format({
//   pathname: path.join(__dirname, 'public/index.html'),
//   protocol: 'file:',
//   slashes: true
// });

let browserWindow;

function createBrowserWindow() {
  browserWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  browserWindow.loadURL(developmentLoadURL);

  browserWindow.webContents.openDevTools();

  browserWindow.on('close', () => { browserWindow = null; });
}

app.on('ready', createBrowserWindow);

app.on('all-windows-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (browserWindow === null) {
    createBrowserWindow();
  }
});

// ipcMain.on('ping', (event, msg) => {
//   console.log('pinging from redux! msg', msg);
//   event.sender.send('ping', 'whaaat!?');
// });

// TOOD:  I need to establish a communication channel.
//        It needs to listen on some defined channel...
