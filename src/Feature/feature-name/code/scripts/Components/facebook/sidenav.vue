<template>
  <div class="col-sm-3 sidenav">
		  <h4>John's Blog</h4>
		  <ul class="nav nav-pills nav-stacked">
			<li class="active"><a href="#section1">Home</a></li>
			<li><a href="#section2">Friends</a></li>
			<li><a href="#section3">Family</a></li>
			<li><a href="#section3">Photos</a></li>
		  </ul><br>
		  <facebook-searchblog></facebook-searchblog>
  </div>
</template>
<script>
import fbSearchblog from '../facebook/searchblog.vue'
export default {
  name: 'facebookSidenav',
  components:{
	fbSearchblog
  }  
};

</script>