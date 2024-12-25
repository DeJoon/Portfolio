import './assets/main.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createHead } from '@unhead/vue';
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n.js';
import router from './router';

config.autoAddCss = false;
library.add(fas, fab, far);
const head = createHead();
head.push({
  title: 'Home - My Vue App',
  meta: [
    { name: 'description', content: 'Welcome to my Vue 3 SSR app.' },
    { property: 'og:title', content: 'Home - My Vue App' },
    { property: 'og:description', content: 'Welcome to my Vue 3 SSR app.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://example.com/' },
    { property: 'og:image', content: 'https://example.com/og-image.jpg' },
  ],
});

createApp(App)
  .use(i18n)
  .use(head)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
