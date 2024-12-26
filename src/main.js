import './assets/main.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import meImage from './assets/img/me.jpg';
import i18n from './i18n.js';
import router from './router';

config.autoAddCss = false;
library.add(fas, fab, far);

const head = document.head;
head.innerHTML = head.innerHTML.replace('%url%', window.location.origin).replace('%image_url%', `${window.location.origin}${meImage}`);

createApp(App)
  .use(i18n)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
