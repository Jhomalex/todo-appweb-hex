import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import Toast, { PluginOptions, POSITION } from 'vue-toastification';
import { loadAuthFromLocal } from './utils/loadAuthFromLocal';

const options: PluginOptions = {
	timeout: 1500,
	hideProgressBar: true,
	position: POSITION.BOTTOM_RIGHT,
	showCloseButtonOnHover: true,
};

loadAuthFromLocal();

createApp(App).use(router).use(Toast, options).mount('#app');
