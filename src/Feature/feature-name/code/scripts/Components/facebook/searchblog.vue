<template>
	  <div class="input-group">
		<input type="text" class="form-control" placeholder="Search Blog.." v-model="searchtxt">
		<span class="input-group-btn">
		  <button class="btn btn-default" type="button" @click="searchbutton()">
			<span class="glyphicon glyphicon-search"></span>
		  </button>
		</span>
	  </div>
 </template>
<script>
export default {
  name: 'facebookSearchblog',
  data(){
	return{
		searchtxt:''
	}
  },
  methods: {
	searchbutton(){
		window.eventBus.$emit('searchdata', this.searchtxt);
		this.searchtxt = ''
	}
  }
};

</script>