import { urlRoute, urlLocationHandler } from './router.js';
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('nav li a')) {
      return;
    }
    event.preventDefault();
    urlRoute();
  });

  window.onpopstate = urlLocationHandler;
  window.route = urlRoute;
  urlLocationHandler();
});
