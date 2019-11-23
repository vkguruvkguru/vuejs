<template>
  <div class="static-class-name rfp-mctb"> 
	<template v-if="editenable">
	<input type="text" v-model="editInput"/>	
	<button @click="updateData(datasy)">save</button>	
	</template>
  </div>
</template>
<script>
export default {
  componentName: 'edit-data-component',
  props: {    
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      datasy: [],
	  editInput:"",
	  editenable:false
    };
  },
  created() {
    window.eventBus.$on('editlistdatas', (val) => {
      this.datasy = val
	  this.editInput = val.title;
	  this.editenable = true;
    });
  },
  methods: {    
	updateData(lists){		 
		//console.log(lists);
		if(this.editInput !=''){
			lists.title = this.editInput;		
			window.eventBus.$emit('updatelistdatas', lists);
			this.editInput = "";
			this.editenable = false;
		}
	}
  },
};

</script>
