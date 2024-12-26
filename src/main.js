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
import meImage from './assets/img/me.jpg';
import i18n from './i18n.js';
import router from './router';

config.autoAddCss = false;
library.add(fas, fab, far);
const head = createHead();
head.push({
  title: 'Home - My Vue App',
  meta: [
    { property: 'og:title', content: 'Portfolio - Jan Lukas Dein' },
    { property: 'og:description', content: 'This is the portfolio of Jan Lukas Dein. If you want to know more about my skills give it a visit.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: window.location.origin },
    { property: 'og:image', content: `${window.location.origin}${meImage}` },
  ],
});

createApp(App)
  .use(i18n)
  .use(head)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
