var fs = require('fs');
var pug = require('pug');
var less = require('less');
//var minify = require('html-minifier').minify;

var data = {}

var templateFn = pug.compileFile(`${__dirname}/template.pug`);

less.render(fs.readFileSync(__dirname + '/main.less', {encoding: 'utf8'}))
    .then(function(output) {
				data.css = output.css
    })
		.catch((e) => {
			console.log(e.message || e)
		})
		.then(() => {
      fs.readdirSync(`${__dirname}/js`)
        .forEach((item) => {
          data.scritpFileName = `../js/${item}`
          var html = templateFn(data)
          fs.writeFileSync(`${__dirname}/dist/${item}.html`, html);
        })
			// data.source.forEach((item, index) => {
			// 	data.index = index
			// 	var html = templateFn(data)
			// 	fs.writeFileSync(`${__dirname}/dist/${index + 1}.html`, html);
			// })
		})
