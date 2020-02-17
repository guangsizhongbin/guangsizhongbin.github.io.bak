var spawn = require('child_process').spawn;

hexo.on('new', function (data) {
	spawn('nvim', [data.path], {stdio: 'inherit'});
});
