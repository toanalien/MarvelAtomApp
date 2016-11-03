'use strict';

const electron = require('electron');
const app = electron.app;
const BowserWindow = electron.BowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = new BowserWindow({width: 800, height: 600});
	mainWindow.loadURL('file://' + __dirname + '/app/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});