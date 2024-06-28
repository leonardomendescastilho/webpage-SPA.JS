import { routeState } from './routeState.js';

export function urlRoute(event) {
  event = event || window.event;
  event.preventDefault();
  let currentHref = event.target.href;
  window.history.pushState({}, '', currentHref);

  urlLocationHandler();
}

export const urlLocationHandler = async () => {
  let location = window.location.pathname;
  if (location === 0) {
    location = '/';
  }
  const route = routeState[location];


  if (!route || !route.template) {
    console.error('Template not found for the given route');
    return;
  }

  try {
    const response = await fetch(route.template);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();

    const main = document.getElementById('content');
    if (main) {
      main.innerHTML = html;
      document.title = route.title;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', route.description);
    }

    const bodyBackgroundImage = document.querySelector(`body`);
    if (bodyBackgroundImage) {
      bodyBackgroundImage.setAttribute(
        'class',
        `${route.background} px-8 bg-cover min-h-dvh`
      );
    }
  } catch (error) {
    console.error('Error loading template:', error);
  }
};
