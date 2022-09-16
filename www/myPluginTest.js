var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'myPluginTest', 'coolMethod', [arg0]);
};

var exec = require('cordova/exec');

exports.toast = function (arg0, success, error) {
    exec(success, error, 'myPluginTest', 'toast', [arg0]);
};