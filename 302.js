addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
})
async function fetchAndApply(request) {
    url = 'https://example.com' // 需要跳转到的地址
    return Response.redirect(url, 302)
}
