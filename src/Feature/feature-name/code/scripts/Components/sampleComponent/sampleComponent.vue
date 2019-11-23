<template>
  <div class="static-class-name rfp-mctb">
    <div v-for="(item,index) in datas">{{item.title}}
      <button @click="viewData(item)">view</button>
      <button @click="editData(item)">Edit</button>
      <button @click="deleteData(index)">Delete</button>
    </div>
    <button @click="getdatas">Get</button>
    </div>
</template>
<script>
export default {
  name: 'sampleComponent',
  props: {
    propsData: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      datas: []
    };
  },
  methods: {
    getdatas() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response =>  response.json() )
      .then(json =>  this.datas = json )
    },
    viewData(lists) {      
      window.eventBus.$emit('listdatas', lists);
    },
    deleteData(ids) {
      fetch('https://jsonplaceholder.typicode.com/posts/'+ ids, {
        method: 'DELETE'
      });
	  this.datas.splice(ids,1);
	  window.eventBus.$emit('deletelistdatas', '');
    },
	editData(lists){		
      window.eventBus.$emit('editlistdatas', lists);
	}
  },
  computed: {
	test(){
		console.log('plp');
	}
  },
  created() {
    this.getdatas();
  },
  updated() {
	window.eventBus.$on('updatelistdatas', (val) => {	
	console.log('test');
	let Index = this.datas.map((x) => { return x.id; }).indexOf(val.id);		
	(Index != -1) ? this.datas[Index].title = val.title:'';			
    });
  }
};

</script>