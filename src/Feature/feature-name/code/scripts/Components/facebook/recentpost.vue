<template>
  <div class="col-sm-9">
	  <template v-if="search.length && searchtxtbox !=''" v-for="(recentDataValue,index) in search">
	  <h4><small>RECENT POSTS</small></h4>
      <hr>
      <h2>{{recentDataValue.title}}</h2>
      <h5><span class="glyphicon glyphicon-time"></span> <template v-for="userDataValue in userData" v-if="userDataValue.id == recentDataValue.userId">Post by {{userDataValue.name}},</template> Sep 27, 2015.</h5>
      <h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5><br>
      <p>{{recentDataValue.body}}</p>
      </template>
	  <template v-if="!search.length && searchtxtbox !=''">
	  <div>no data</div>
	  </template>
	  
	  <template v-if="searchtxtbox == ''" v-for="(recentDataValue,index) in recentLastData">
	  <h4><small>RECENT POSTS</small></h4>
      <hr>
      <h2>{{recentDataValue.title}}</h2>
      <h5><span class="glyphicon glyphicon-time"></span> <template v-for="userDataValue in userData" v-if="userDataValue.id == recentDataValue.userId">Post by {{userDataValue.name}},</template> Sep 27, 2015.</h5>
      <h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5><br>
      <p>{{recentDataValue.body}}</p>
      </template>
      <hr>		
	  <facebook-submitcmd :cmd-data="cmdData"></facebook-submitcmd>
      <br><br>
      <facebook-viewcmd :cmd-data="cmdData" :user-data="userData"></facebook-viewcmd>
      
    </div>
</template>
<script>
export default {
  name: 'facebookRecentpost',
  data(){
    return{
		search:[],
		searchtxtbox:''
	}
  },
  props:{
	recentData: {
      type: Array,
      required: false
    },
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
	recentLastData(){
		let recentLastData = '';
			if (this.recentData === null || this.recentData === undefined) {
				return false;
			}
		recentLastData = this.recentData.slice(0,3);	
		return recentLastData;
	}
  },
  methods:{
	searchdata(txt){
		this.searchtxtbox = txt
		let searchArray = txt.trim().split(' ');		
		let newData = [];
		this.recentLastData.filter(item => {	
				searchArray.map(searchdata => {				
					if(newData.includes(item) == false && 
					  (item.body.toLowerCase().indexOf(searchdata) !== -1 
					   || item.title.toLowerCase().indexOf(searchdata) !== -1)){	
						newData.push(item);						
					}
				});							
		});		
		this.search = newData
	}
  },
  updated() {	  
	window.eventBus.$off('searchdata', this.searchdata);
	window.eventBus.$on('searchdata', this.searchdata);	
  }
};

</script>