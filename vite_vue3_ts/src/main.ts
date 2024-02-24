import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from '@/router';
import { errorHandler } from '@/utils/error';

import '@/assets/css/index.scss';

const app = createApp(App);

app.config.errorHandler = errorHandler;

app.use(store).use(router);

app.mount('#app');
