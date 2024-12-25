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

createApp(App)
  .use(i18n)
  .use(createHead())
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
