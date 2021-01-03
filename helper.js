const logger = require('node-color-log');
const childProcess = require('child_process');

const execShellCommand = cmd => {
	return new Promise(resolve => {
		childProcess.exec(cmd, (error, stdout, stderr) => {
			if (error) {
				console.warn(error);
				resolve();
			}
			resolve(stdout ? stdout : stderr);
		});
	});
};

const greenLog = text => {
	logger.fontColorLog('green', text);
};

const redLog = text => {
	logger.fontColorLog('red', text);
};

module.exports = {
	execShellCommand,
	greenLog,
	redLog
};
