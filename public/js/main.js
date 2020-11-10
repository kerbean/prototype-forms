//$(document).ready(function() {
/*if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
            console.log('Service worker successfully registered on scope', registration.scope);
        }).catch(function(error) {
            console.log('Service worker failed to register');
        });
    });
}*/
//});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}