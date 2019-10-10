<template>
    <div>
        <div>당첨 숫자</div>
        <div id="result-div">
            <lotto-ball v-for="ball in winBalls" :key="ball" v-bind:number="ball"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
        <button v-if="redo" @click="onClickRedo">한 번 더!</button>
    </div>
</template>

<script>
    import LottoBall from './LottoBall';

    function getWinNumbers(){
        console.log('getWinNumbers');
        const candidate = Array(45).fill().map( (v, i) => i + 1 );
        const shuffle = [];

        while( candidate.length > 0 ){
            shuffle.push( candidate.splice( Math.floor(Math.random() * candidate.length), 1 )[0]);
        }

        console.log(shuffle);

        const bonusNumber = shuffle[shuffle.length-1];
        const winNumbers = shuffle.slice(0, 6).sort( (p, c) => p - c );

        console.log(winNumbers);

        return [...winNumbers, bonusNumber];
    }

    const timeouts = [];

    export default {
        components: {
          'lotto-ball': LottoBall,
        },
        data(){
            return {
                winNumbers: getWinNumbers(),
                winBalls: [],
                bonus: null,
                redo: false,
            };
        },
        computed: {

        },
        methods: {
            onClickRedo() {
                this.winNumbers = getWinNumbers();
                this.winBalls = [];
                this.bonus = null;
                this.redo = false;
                this.showBalls();
            },
            showBalls(){
                for( let i = 0 ; i < this.winNumbers.length - 1; i++ ){
                    timeouts[i] = setTimeout( () => {
                        this.winBalls.push( this.winNumbers[i] );
                    }, (i + 1 ) * 1000 );
                }
                timeouts[6] = setTimeout(() => {
                    this.bonus = this.winNumbers[6];
                    this.redo = true;
                }, 7000);
            },
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
            this.showBalls();
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
            timeouts.forEach((t) => {
                console.log("--- cleared timeout["+t+"]")
                clearTimeout( t );
            })
        },

        // 화면에서 사라지고 나서
        destroyed() {
            console.log('destroyed');
        },

        // 어떤 값에 변경이 있는지 감시하여 동작. - 최대한 쓰지 말자
        /*
        watch: {
            redo( val, oldVal ) {
                console.log("===================s")
                console.log(val, oldVal);
                console.log("===================e")
                if( !redo ){
                    console.log("watched!!");
                    this.showBalls();
                }
            }
        },
        */
    }

</script>

<style scoped>
    .ball {
        display: inline-block;
        border: 1px solid black;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>