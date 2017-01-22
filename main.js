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

let browserWindow = null;
let takeFocus = true;

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

ipcMain.on('channelName', (event, msg) => {
  console.log('channelName received from redux!', msg);
  // TODO: This is how I communicate...
  event.sender.send('channelName', 'responding with pong oing from Main process!');
});
