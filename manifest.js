'use strict';


//
// Require some modules
//


var Mincer = require('mincer');


//
// Get Mincer environment
//


var environment = require('./environment');


//
// Create and compile Manifest
//


var manifest = new Mincer.Manifest(environment, __dirname + '/public/assets');


manifest.compile(['application.js', 'application.css'], function (err, assetsData) {
  if (err) {
    console.error("Failed compile assets: " + (err.message || err.toString()));
    process.exit(128);
  }

  console.info('\n\nAssets were successfully compiled.\n' +
               'Manifest data (a proper JSON) was written to:\n' +
               manifest.path + '\n\n');
  console.dir(assetsData);
});
