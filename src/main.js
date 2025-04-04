import { createApp } from 'vue';
import App from './App.vue';  // No file extension needed
import router from './router'; // No file extension needed
import './style.css'; // If you're using Tailwind CSS or any global styles

const app = createApp(App);

app.use(router);

app.mount('#app');


