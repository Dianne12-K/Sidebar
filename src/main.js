import { createApp } from 'vue';
import App from './App.vue';  // No file extension needed
import router from './router'; // No file extension needed
import './style.css'; // If you're using Tailwind CSS or any global styles
import 'flowbite';
import 'flowbite-datepicker';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';


const app = createApp(App);
app.use(Toast, {
    position: POSITION.TOP_RIGHT, // You can change the position
    timeout: 3000, // Toast duration in milliseconds
    closeOnClick: true,
  pauseOnHover: true,
  });

app.use(router);

app.mount('#app');


