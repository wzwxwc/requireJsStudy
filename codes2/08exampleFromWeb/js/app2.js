requirejs.config ({
    baseUrl: 'js'
});

require(['lib/hello'], function(hello) {
    hello.hello("RquireJS");
});