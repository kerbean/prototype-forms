var cacheName = 'fpc-forms';
var filesToCache = [
    './'
    /*,
        './index.html',
        './fpc94.html',
        './package.json',
        './package-lock.json',
        './server.js',
        './sw.js',
        '/public/images/fly.jpg',
        '/public/images/logo.jpg',
        '/public/js/main.js',
        '/public/stylesheets/styles.css'*/
];
/*
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.info('[sw.js] cached all files');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response
            }
            // not in cache, return from network
            return fetch(event.request, { credentials: 'include' });
        })
    );
});*/

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.info('[sw.js] cached all files');
            console.log(filesToCache);
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(event) {

    var cacheAllowlist = ['pages-cache-v1', 'blog-posts-cache-v1'];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheAllowlist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response
            } else {
                // clone request stream
                // as stream once consumed, can not be used again
                var reqCopy = event.request.clone();

                /*return fetch(reqCopy, { credentials: 'include' }) // reqCopy stream consumed
                    .then(function(response) {
                        // bad response
                        // response.type !== 'basic' means third party origin request
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response; // response stream consumed
                        }

                        // clone response stream
                        // as stream once consumed, can not be used again
                        var resCopy = response.clone();


                        // ================== IN BACKGROUND ===================== //

                        // add response to cache and return response
                        caches.open(cacheName)
                            .then(function(cache) {
                                return cache.put(reqCopy, resCopy); // reqCopy, resCopy streams consumed
                            });

                        // ====================================================== //


                        return response; // response stream consumed
                    })*/

                return fetch(event.request).then(
                    function(response) {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        var responseToCache = response.clone();

                        caches.open(cacheName)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            }
        })
    );
});