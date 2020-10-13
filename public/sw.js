let cacheData='appV1'

this.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/app.b8de8c8d7db1f29a6f96.js',
				'/static/DynamicPage.b8de8c8d7db1f29a6f96.js',
				'/static/NoMatch.b8de8c8d7db1f29a6f96.js',
				'/static/styles.b8de8c8d7db1f29a6f96.js',
				'/static/vendor.b8de8c8d7db1f29a6f96.js',
				'/styles/styles.b8de8c8d7db1f29a6f96.css',
                '/index.html',
                'dynamic',
                '/',
                '/styles/semantic.min.css'
				
            ]) 
        })
    )
})


this.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp){
                return resp
            }
        })
    )
})


