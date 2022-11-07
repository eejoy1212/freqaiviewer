const {app,BrowserWindow} = require('electron');
 
const remote = require('@electron/remote/main');
const connect = require('../src/testmqtt');
remote.initialize()
 
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            enableRemoteModule: true
        }
    })
 
   win.loadURL('http://localhost:3000')
//    win.loadFile('index.html')
 connect();
    remote.enable(win.webContents);
}
 
app.on('ready', createWindow)
 
app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})
 
app.on('activate', function() {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()})