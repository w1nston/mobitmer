const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const developmentLoadURL = 'http://localhost:3000';
// TODO: Use correct one depending on environment
// const productionLoadURL = url.format({
//   pathname: path.join(__dirname, 'public/index.html'),
//   protocol: 'file:',
//   slashes: true
// });

// TODO: Investigate [mitt](https://github.com/developit/mitt)
// TODO: for communication between here and react

let browserWindow;

function createBrowserWindow() {
  browserWindow = new BrowserWindow({ width: 800, height: 600 });

  browserWindow.loadURL(developmentLoadURL);

  browserWindow.webContents.openDevTools();

  browserWindow.on('close', () => { browserWindow = null; })
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
