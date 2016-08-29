<template>
	<ul>
		<li 
			v-for ="item in puzzles"
			draggable="true"
			v-on:dragstart = "dragStart($index)"
			v-on:dragenter.prevent = "dragEnter"
			v-on:dragover.prevent = "dragOver"
			v-on:drop.prevent = "dropLeave($index)"
			>
			<img :src="item" />
		</li>
	</ul>
</template>

<script>
export default {
  data () {
    return {
      puzzles: []
    }
    
  },
  methods: {
  	render(){
  		let puzzleArr = [],
      		i = 1

	    for (i; i <= 9; i++) {
	        puzzleArr.push("/static/"+i+".png");
	    }
	
	    // 随机打乱数组
	    puzzleArr = puzzleArr.sort(() => {
	        return Math.random() - 0.5;
	    });
				
	    this.puzzles = puzzleArr;
  	},
  	dragStart(index){
  		let dragItem = event.target;
		event.dataTransfer.setData("URL",dragItem.src);//记录srcElement的src
		event.dataTransfer.setData("text",index);//记录拖动起点的数组索引
		event.dataTransfer.effectAllowed = 'move';
  	},
  	dragEnter(){
		//console.log("dragEnter");
  	},
  	dragOver(){
		//console.log("dragOver")
  	},
  	dropLeave(index){
  		let dragItem = event.target;
        let sIndex = event.dataTransfer.getData('text');//srcElement的index
        let sURL = event.dataTransfer.getData('URL');//srcElement的src
        let toURL = dragItem.src;//目标的src
        this.puzzles.$set(sIndex, toURL);
        this.puzzles.$set(index, sURL);
		this.isSuccess();
  	},
  	isSuccess() {
  		let puzzleArr = this.puzzles;
  		let isPass = puzzleArr.every((e, i) => e.substr(-5,1) == i + 1);

		if(isPass){
			setTimeout(function(){
				alert("拼图成功!")},0);
		}
  	}
  },
  ready(){
    	this.render();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  display: flex;
  width: 458px;
  height: 388px;
  padding: 0;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: space-between;
}
li {
	height: 100px;
	line-height: 100px;
	list-style: none;
	flex: 0 0 33%;
}
</style>
