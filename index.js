var phpServer = require('node-php-server');

// Create PHP server
phpServer.createServer({
    port: 8000,
    hostname: '127.0.0.1',
    base: './php/public',
    keepalive: false,
    open: false,
    bin: 'php',
    router: __dirname + '/php/server.php'
});
