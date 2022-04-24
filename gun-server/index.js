/* eslint-disable @typescript-eslint/no-var-requires */
const port =
	process.env.OPENSHIFT_NODEJS_PORT ||
	process.env.VCAP_APP_PORT ||
	process.env.PORT ||
	process.argv[2] ||
	8765;
const express = require('express');
const Gun = require('gun');
require('gun/axe');

const app = express();
app.use(Gun.serve);
app.use(express.static(__dirname));

const server = app.listen(port);
const gun = Gun({ file: 'data', web: server });

global.Gun = Gun; /// make global to `node --inspect` - debug only
global.gun = gun; /// make global to `node --inspect` - debug only

console.log('Server started on port ' + port + ' with /gun');
