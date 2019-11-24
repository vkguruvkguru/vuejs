<template>
  <div>	  
      <p><span class="badge">2</span> Comments:</p><br>     
      <div class="row" v-if="cmdData" v-for="(cmdDataValue,index) in cmdData">
        <div class="col-sm-2 text-center">
          <img src="bandmember.jpg" class="img-circle" height="65" width="65" alt="Avatar">
        </div>
        <div class="col-sm-10">
          <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
          <p>{{cmdDataValue.body}}</p>
          <br>
        </div>       
      </div>
 </div>
</template>
<script>
export default {
  name: 'facebookViewcmd',
  props:{
	  cmdData:{
		  type: Array,
		  required: false
	  },  
  }
};
</script>