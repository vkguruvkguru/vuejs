<template>
  <div class="col-sm-9">  
	  <template v-if="recentDataValue" v-for="(recentDataValue,index) in recentData">
	  <h4><small>RECENT POSTS</small></h4>
      <hr>
      <h2>{{recentDataValue.title}}</h2>
      <h5><span class="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27, 2015.</h5>
      <h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5><br>
      <p>{{recentDataValue.body}}</p>
      </template>
      <hr>		
	  <facebook-submitcmd></facebook-submitcmd>
      <br><br>
      <facebook-viewcmd :cmd-data="cmdData"></facebook-viewcmd>
      
    </div>
</template>
<script>
export default {
  name: 'facebookRecentpost',  
  props:{
	recentData: {
      type: Array,
      required: false
    },
	cmdData:{
	  type: Array,
	  required: false
	}
  }
};

</script>