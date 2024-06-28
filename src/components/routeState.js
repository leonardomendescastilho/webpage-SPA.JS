export const urlPageTitle = 'Explore o Universo';

export const routeState = {
  404: {
    template: '/components/templates/404.html',
    title: '404 | ' + urlPageTitle,
    description: 'Page not found',
    background: 'bg-black ',
  },
  '/': {
    template: '/src/components/templates/home.html',
    title: 'Home | ' + urlPageTitle,
    description: 'This is a home page',
    background: 'bg-hero-pattern'
  },
  '/universe': {
    template: '/src/components/templates/universe.html',
    title: 'Universe | ' + urlPageTitle,
    description: 'This is a about univese page',
    background: 'bg-universe-pattern'
  },
  '/explorer': {
    template: '/src/components/templates/explorer.html',
    title: 'Explorer | ' + urlPageTitle,
    description: 'This ia a explorer page',
    background: 'bg-explorer-pattern'
  },
};

// erro pode ser o caminho e também pesquisar sobre o css, no tailwind.conig talvez o content tá estranho
