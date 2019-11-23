import Vue from 'vue';
import 'es6-promise/auto';
import 'idempotent-babel-polyfill';

import sampleComponent from './Components/sampleComponent/sampleComponent.vue';
import viewDataComponent from './Components/sampleComponent/viewDatas.vue';
import editDataComponent from './Components/sampleComponent/editDatas.vue';
import lifecycle from './Components/lifecycle/lifecycle.vue';
import alert from './Components/alert.vue';
import sampleView from './Components/sampleView.vue';
import btn from './Components/button.vue';
import dropdown from './Components/dropdown.vue';
import formGroup from './Components/formGroup.vue';
import groupButton from './Components/groupButton.vue';
import image from './Components/image.vue';
import list from './Components/list.vue';
import pagination from './Components/pagination.vue';


import facebookHome from './Components/facebook/home.vue';
import facebookSidenav from './Components/facebook/sidenav.vue';
import facebookSearchblog from './Components/facebook/searchblog.vue';
import facebookRecentpost from './Components/facebook/recentpost.vue';
import facebookSubmitcmd from './Components/facebook/submitcmd.vue';
import facebookViewcmd from './Components/facebook/viewcmd.vue';

Vue.component(sampleComponent.name, sampleComponent);
Vue.component(viewDataComponent.componentName, viewDataComponent);
Vue.component(editDataComponent.componentName, editDataComponent);
Vue.component(lifecycle.name, lifecycle);
Vue.component(alert.name, alert);
Vue.component(sampleView.name, sampleView);
Vue.component(btn.name, btn);
Vue.component(dropdown.name, dropdown);
Vue.component(formGroup.name, formGroup);
Vue.component(groupButton.name, groupButton);
Vue.component('custom-image', image);
Vue.component('custom-list', list);
Vue.component('custom-pagination', pagination);

Vue.component(facebookHome.name, facebookHome);
Vue.component(facebookSidenav.name, facebookSidenav);
Vue.component(facebookSearchblog.name, facebookSearchblog);
Vue.component(facebookRecentpost.name, facebookRecentpost);
Vue.component(facebookSubmitcmd.name, facebookSubmitcmd);
Vue.component(facebookViewcmd.name, facebookViewcmd);

window.eventBus = new Vue();

new Vue({
  el: '#app'
});
