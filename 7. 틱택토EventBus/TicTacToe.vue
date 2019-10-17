<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component :table-data="tableData"  />
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>
</template>

<script>
    import TableComponent from './TableComponent';
    import EventBus from './EventBus';

    export default {
        components: {
            TableComponent,
        },
        data(){
            return {
                tableData: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ],
                turn: 'O',
                winner: '',
            };
        },
        computed: {

        },
        methods: {
            onClickTd( rowIndex, cellIndex ) {
                console.log(rowIndex, cellIndex)


                // 원래 인덱스를 이용하여 데이터를 업데이트하면 화면이 바뀌지 않는다. 대신 :turn="turn" 이렇게 자식컴퓨
                // 넌트까지 바인딩하여 내려받으면 화면에 업데이트된다.
                //rootData.tableData[rowIndex][cellIndex] = rootData.turn;

                // 인덱싱으로 데이터 바꿔주면 화면이 바뀌지 않아 아래처럼 했어야만 했다.
                this.$set(this.tableData[rowIndex], cellIndex, this.turn);


                let win = false;
                if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
                    win = true;
                }

                if (win) { // 이긴 경우: 3줄 달성

                    this.winner = this.turn;
                    this.turn = 'O';
                    this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
                } else { // 무승부
                    let all = true; // all이 true면 무승부라는 뜻
                    this.tableData.forEach((row) => { // 무승부 검사
                        row.forEach((cell) => {
                            if (!cell) {
                                all = false;
                            }
                        });
                    });
                    if (all) { // 무승부
                        this.winner = '';
                        this.turn = 'O';
                        this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
                    } else {
                        this.winner = '';
                        this.turn = this.turn === 'O' ? 'X' : 'O';
                    }
                }

            },
        },

        beforeCreate() {
            console.log('beforeCreate');
        },

        // 모든 설정?이 완료되지만 화면에 나타나기 전
        created() {
            console.log('created');
            EventBus.$on('clickTd', this.onClickTd);
        },

        beforeMount() {
            console.log('beforeMount');
        },

        // 화면에 모두 나타낸 후
        mounted() {
            console.log('mounted');
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
    }

</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>