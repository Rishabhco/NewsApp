self.addEventListener("install", (e) => {
	e.waitUntil(
		caches.open("static").then((cache) => {
			return cache.addAll([
				"./favicon.ico",
				"./logo192.png",
				"./logo512.png",
				"./robots.txt",
			])
		})
	)
})

self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.match(e.request).then((response) => {
			return response || fetch(e.request)
		})
	)
})