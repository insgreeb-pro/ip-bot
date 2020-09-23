const {
  networkInterfaces
} = require('os');

function getIP() {
  const nets = networkInterfaces();
  const results = Object.create(null);

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  return results
}

function toText(ip) {
  let text = ""
  for (const name of Object.keys(ip)) {
    text += `${name}\n`
    for (const addr of ip[name]) {
      text += `- ${addr}\n`
    }
  }
  return text
}

module.exports = {
  getIP,
  toText
}