<template>
  <div class="container-fluid">
	<div class="row content">
	{{typeof viewpostData}}
		<facebook-sidenav></facebook-sidenav>
		<template v-if="viewpostData">
		<facebook-recentpost :recent-data="viewpostData"></facebook-recentpost>
		</template>
		{{reversedMessage}}
	</div>
  </div>
</template>
<script>
import fbSidenav from '../facebook/sidenav.vue'
import fbRecentpost from '../facebook/recentpost.vue'
export default {
  name: 'facebookHome',
  component: {
    fbSidenav,
	fbRecentpost
  },
  data() {
    return {
      viewpostData: [],
	  userDataDetail:[]
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
  }
  created() {
    this.viewPost();
	this.userData();
  },
  mounted(){
	if(this.userDataDetail){
	  Object.keys(this.userDataDetail).forEach(function(key) {

		console.log(key, this.userDataDetail[key]);

	  });
	  }
  }
};

</script>