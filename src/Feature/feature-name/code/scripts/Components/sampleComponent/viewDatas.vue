<template>
  <div class="static-class-name rfp-mctb">    
	<ul>
	<li v-for="datain in datas">
		{{datain}}
	</li>	
	</ul>
  </div>
</template>
<script>
export default {
  componentName: 'view-data-component',
  data() {
    return {
      datas: []
    };
  },
  created() {
    window.eventBus.$on('listdatas', (val) => {
      this.datas = val
    });
  },
  updated() {
	window.eventBus.$on('deletelistdatas', () => {	
      this.datas = '';
    });
  }
};

</script>
