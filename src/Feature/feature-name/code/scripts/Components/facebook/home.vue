<template>
  <div class="container-fluid">
	<div class="row content">
		<facebook-sidenav></facebook-sidenav>
		<facebook-recentpost></facebook-recentpost>
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
  }
};

</script>