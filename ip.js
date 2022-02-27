addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});
 
/**
 * Return user real ip as response in plain text.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
  const clientIP = request.headers.get("CF-Connecting-IP")
  return new Response(clientIP);
}
