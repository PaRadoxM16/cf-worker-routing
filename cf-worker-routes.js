addEventListener("fetch", event => {
  const path = new URL(event.request.url).pathname;
  
  switch (path) {

    case "/":
      event.respondWith(helloworld(event.request));
      return;
      
    case "/is_paradox_cool":
      event.respondWith(is_paradox_cool(event.request));
      return;
 
    // Not found
    default:
      event.respondWith(resource_not_found(event.request));
      return;
  };
});

async function helloworld(request) {
  return new Response("Hello world");
};

async function resource_not_found(request) {
  return new Response("404 - Resource not found.", {status: 404});
};

async function is_paradox_cool(request) {
  return new Response("Yes!");
};
