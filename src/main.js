import {createApp} from 'vue';
import App from '@/App.vue';
import store from '@/store';

import '@/assets/scss/index.scss';

const clickOutside = {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = event => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value();
            }
        };
        document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: el => {
        document.removeEventListener("click", el.clickOutsideEvent);
    },
};

createApp(App)
    .use(store)
    .directive('click-outside', clickOutside)
    .mount('#app');
