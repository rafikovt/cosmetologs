import Vue from 'vue';
import VueMask from 'v-mask';
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

Vue.use(VueMask);