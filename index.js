#!/usr/bin/env node

'use strict';


// Declare required variables
var http = require('http');
var path = require('path');
var express = require('express');
var request = require('request');
var program = require('commander');


program
  .version('0.0.1')
  .description('Custom CORS Proxy')
  .usage('<target> [options]')
  .option('-p, --port <p>', 'Proxy port', 3000)
  .option('-l, --local <path>', 'Path to local files')

  .on('--help', function() {
    console.log();
    console.log('  Examples:');
    console.log();
    console.log('    $ corsproxy http://www.google.com --port=4000');
    console.log('    $ corsproxy http://api.mydomain.com --port=4000 -l /Users/myname/code/dev');
    console.log();
  })

  .action(function(target) {
    var app = express();

    var proxyPort = program.port || 3000;
    var localStaticPath = program.local || path.join(__dirname, 'public');

    // Static content
    app.use('/cors', express.static(localStaticPath));

    // Home page
    app.all("/corshome" , function(req, res) {
      res.send('CORS Proxy that reroutes requests to ' + target).end();
    });

    app.all("/*" , function(req, res) {
      var url = target + req.url;
      //console.log('Rerouting to: ', url);
      req.pipe(request(url)).pipe(res);
    });

    // Start Application
    var server = http.createServer(app);
    server.listen(proxyPort, function() {
      var address = server.address();
      var port = address.port;

      console.log('Running CORS Proxy:');
      console.log('  Listening on port %s', port);
      console.log('  Local static path: %s', localStaticPath);
      console.log('  Rerouting all other requests to %s', target);
    });
  })
  .parse(process.argv);

if (!program.args.length) {
  program.help();
}
