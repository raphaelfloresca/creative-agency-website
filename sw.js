console.log('SW file');
const CACHE_NAME = "cache-v1";
const assetToCache = [
    "index.html",
    "services.html",
    "work.html",
    "contact.html",
    "images/001.png",
    "images/002.png",
    "images/003.png",
    "images/004.png",
    "images/005.png",
    "images/006.png",
    "images/address.png",
    "images/call.png",
    "images/close.png",
    "images/email.png",
    "images/email2.png" ,
    "images/home-img.jpg",
    "images/img1.jpg",
    "images/instagram.png",
    "images/menu.png",
    "images/portfolio-item1.jpg ",
    "images/portfolio-item10.jpg",
    "images/portfolio-item11.jpg",
    "images/portfolio-item12.jpg",
    "images/portfolio-item13.jpg",
    "images/portfolio-item14.jpg",
    "images/portfolio-item15.jpg",   
    "images/portfolio-item2.jpg",
    "images/portfolio-item3.jpg",
    "images/portfolio-item4.jpg",
    "images/portfolio-item5.jpg",
    "images/portfolio-item6.jpg",
    "images/portfolio-item7.jpg",
    "images/portfolio-item8.jpg",
    "images/portfolio-item9.jpg",
    "images/screenshot.png",
    "images/twitter.png",
];
self.addEventListener("install", function(event) {
    console.log("Installing", self);
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log(assetToCache);
                return cache.addAll(assetToCache);
            })
            .catch(console.error)
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});