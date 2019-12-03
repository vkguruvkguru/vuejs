<template>
  <div class="container-fluid">
	<div class="row content">	
		<facebook-sidenav></facebook-sidenav>
		<template v-if="viewpostData">
		<facebook-recentpost :recent-data="viewpostData" :user-data="userDataDetail":cmd-data="cmdData"></facebook-recentpost>
		</template>		
	</div>
  </div>
</template>
<script>
import fbSidenav from '../facebook/sidenav.vue'
import fbRecentpost from '../facebook/recentpost.vue'
import 'whatwg-fetch';
export default {
  name: 'facebookHome',
  component: {
    fbSidenav,
	fbRecentpost
  },
  data() {
    return {
      viewpostData: [],
	  userDataDetail:[],
	  cmdData:[]
    };
  },
  methods: {
	viewPost() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response =>  response.json() )
      .then(json =>  this.viewpostData = json )	 
    },
	userData() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json() )
      .then(json =>  this.userDataDetail = json )	  
    },
	commentData() {
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response =>  response.json() )
      .then(json =>  this.cmdData = json )	  
    },
  },
  created() {
    this.viewPost();
	this.userData();	
  },
  mounted(){
	this.commentData();	
  }
};

</script>