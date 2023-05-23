const app = 'pwa-pomotimer-v1';
const filesToCache = [
	'../',
	'timer.js',
	'main.js',
	'../index.html',
	'../assets/css/bootstrap.min.css',
	'../assets/js/bootstrap.min.js',
	'../assets/js/jquery-3.6.0.min.js',
	'../assets/illustration/break-illustration.png',
	'../assets/illustration/work-illustration.png',
	'../assets/icons/icon.png',
	'../assets/alarm/alaskarobotics_1000-hz-beeps.wav',
	'../assets/alarm/dcloh_alarm-clock.wav',
	'../assets/alarm/kizilsungur_military-alarm.wav',
	'../assets/alarm/rudmer-rotteveel_chicken-alarm-call-full-with-occasional-bird-sound.wav',
	'../assets/alarm/splicesound_smoke-detector-alarm-close-perspective.wav',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', (e) => {
	console.log('[Service Worker] Install');
	e.waitUntil(
		(async () => {
			const cache = await caches.open(cacheName);
			console.log('[Service Worker] Caching all: app shell and content');
			await cache.addAll(contentToCache);
		})(),
	);
});

/* Serve cached content when offline */
self.addEventListener('fetch', (e) => {
	e.respondWith(
		(async () => {
			const r = await caches.match(e.request);
			console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
			if (r) {
				return r;
			}
			const response = await fetch(e.request);
			const cache = await caches.open(cacheName);
			console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
			cache.put(e.request, response.clone());
			return response;
		})(),
	);
});
