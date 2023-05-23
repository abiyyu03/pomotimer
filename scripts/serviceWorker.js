var app = 'pwa-pomotimer-v1';
var filesToCache = [
	'/',
	'scripts/timer.js',
	'scripts/main.js',
	'../index.html',
	'../assets/css/bootstrap.min.css',
	'../assets/js/bootstrap.min.js',
	'../assets/js/jquery-3.6.0.min.js',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
	e.waitUntil(
		caches.open(app).then((cache) => {
			cache.addAll(filesToCache);
		}),
	);
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
	e.respondWith(
		caches.match(e.request).then(function (response) {
			return response || fetch(e.request);
		}),
	);
});
