const {exec} = require('child_process')

exec(`ng deploy --host ${process.env.DEPLOY_HOST} --username ${process.env.DEPLOY_USER} --password ${process.env.DEPLOY_PASS}`);
