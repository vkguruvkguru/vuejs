<template>
  <div>	  
      <p><span class="badge">{{cmdLastData.length}}</span> Comments:</p><br>     
      <div class="row" v-if="cmdData" v-for="(cmdDataValue,index) in cmdLastData">
        <div class="col-sm-2 text-center" v-for="viewImgDataValue in viewImgData" v-if="viewImgDataValue.id == cmdDataValue.id">
          <img :src="viewImgDataValue.thumbnailUrl" class="img-circle" height="65" width="65" alt="Avatar">
        </div>
        <div class="col-sm-10">
          <h4><template v-for="userDataValue in userData" v-if="userDataValue.id == cmdDataValue.id">{{userDataValue.name}}</template> <small>Sep 29, 2015, 9:12 PM</small></h4>
          <p>{{cmdDataValue.body}}</p>
          <br>
        </div>       
      </div>
 </div>
</template>
<script>
export default {
  name: 'facebookViewcmd',
  data(){
	return{
		viewImgData:[]
	}
  },
  props:{
	  cmdData:{
		  type: Array,
		  required: false
	  },
	  userData:{
		  type: Array,
		  required: false
	  }
  },
  computed: {
	cmdLastData(){
		let cmdLastData = '';
			if (this.cmdData === null || this.cmdData === undefined) {
				return false;
			}
		cmdLastData = this.cmdData.reverse().slice(0,3);
		return cmdLastData;
	}
  },
  methods:{
	viewPhoto(){
	fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response =>  response.json() )
      .then(json =>  this.viewImgData = json)
	},
	clickHandler(obj){				
		this.cmdData.reverse().push(obj);
		
	}
  },
  created() {
    this.viewPhoto();	
  },
  updated() {	  
	window.eventBus.$off('cmdupdate', this.clickHandler);
	window.eventBus.$on('cmdupdate', this.clickHandler);	
  }
};
</script>