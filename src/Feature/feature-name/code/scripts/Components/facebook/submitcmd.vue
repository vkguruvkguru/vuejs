<template>
  <div>	  
      <h4>Leave a Comment:</h4>
      <form role="form">
        <div class="form-group">
          <textarea class="form-control" rows="3" required v-model="cmdText"></textarea>
        </div>
        <button type="submit" class="btn btn-success" @click.prevent="btnSubmitcmd(icmd)">Submit</button>
      </form>
 </div>
</template>
<script>
export default {
  name: 'facebookSubmitcmd',
  data(){
	return {
		cmdText:'',
		icmd:0
	}
  },
   props:{
	  cmdData:{
		  type: Array,
		  required: false
	  }
  },
  methods:{
	btnSubmitcmd(icmd){
		icmd = icmd + 1;		
		let cmd = {
				"postId": this.cmdData.length + icmd,
				"id": this.cmdData.length + icmd,
				"name": "id labore ex et quam laborum",
				"email": "Eliseo@gardner.biz",
				"body": this.cmdText
			  };			  
		window.eventBus.$emit('cmdupdate', cmd);	  
		this.cmdText = "";
	}
  }
};

</script>