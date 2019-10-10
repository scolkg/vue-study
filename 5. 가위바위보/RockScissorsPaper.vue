<template>
	<div>
		<div id="computer" :style="computedStyleObject" ></div>
		<div>
			<button @click="onClickButton('바위')">바위</button>
			<button @click="onClickButton('가위')">가위</button>
			<button @click="onClickButton('보')">보</button>
		</div>
		<div>{{result}}</div>
		<div>현재 {{score}}점</div>
		<lifecycle-example v-if="true" />
	</div>
</template>

<script>
/**
 * created, moundted, updated, destroyed
 * 
 * 
 */


const rspCoords = {
	바위: '0',
	가위: '-142px',
	보: '-284px',
};

export default {
	data() {
		return {
			imgCoord: rspCoords.바위,
			result: '',
			score: 0,
		};
	},
	computed: {
		computedStyleObject() {
			return {
				background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0` ,
			};
		}
	},
	methods: {
		onClickButton(choice){
			console.log(choice);
		}
	},

	beforeCreate() {
		console.log('beforeCreate');
	},

	// 모든 설정?이 완료되지만 화면에 나타나기 전
	created() {
		console.log('created');
	},

	beforeMount() {
		console.log('beforeMount');
	},

	// 화면에 모두 나타낸 후
	mounted() {
		console.log('mounted');
		interval = setInterval(() => {
			if( this.imgCoord === rspCoords.바위 ){
				this.imgCoord = rspCoords.가위;
			}else if( this.imgCoord === rspCoords.가위 ){
				this.imgCoord = rspCoords.보;
			}else if( this.imgCoord === rspCoords.보){
				this.imgCoord = rspCoords.바위;
			}
		}, 100);
	},

	beforeUpdate() {
		console.log('beforeUpdate');
	},

	// 데이터가 변경되어 화면을 다시 고칠 때
	updated() {
		console.log('updated');
	},
	
	beforeDestroy() {
		console.log('beforeDestroy');
	},

	// 화면에서 사라지고 나서
	destroyed() {
		console.log('destroyed');
	},

};
</script>

<style scoped>
#computer {
	width: 142px;
	height: 200px;	
	background-position: 0 0;
}
</style>