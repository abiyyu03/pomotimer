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

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (installEvent) => {
	installEvent.waitUntil(
		caches.open(app).then((cache) => {
			cache.addAll(filesToCache);
		}),
	);
});

self.addEventListener('activate', (event) => {
	console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (fetchEvent) => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return res || fetch(fetchEvent.request);
		}),
	);
});
