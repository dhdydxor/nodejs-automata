console.log("Hello world");

let http = require('http');
let options = {
   hostname: 'httpbin.org',
   path: '/ip'
};

module.exports = function (app)
{
   if (typeof app === 'function')
   {
      app = http.createServer(app);
   }
};