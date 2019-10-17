<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
    export default {
        props: {
            cellData: String,
            rowIndex: Number,
            cellIndex: Number,
            turn: String,
        },
        methods: {
            onClickTd() {
                //console.log(this.$root.$data);
                //console.log(this.$parent.$data);

                if( this.cellData ) return;

                const rootData = this.$root.$data;
                // 원래 인덱스를 이용하여 데이터를 업데이트하면 화면이 바뀌지 않는다. 대신 :turn="turn" 이렇게 자식컴퓨
                // 넌트까지 바인딩하여 내려받으면 화면에 업데이트된다.
                //rootData.tableData[this.rowIndex][this.cellIndex] = rootData.turn;

                // 인덱싱으로 데이터 바꿔주면 화면이 바뀌지 않아 아래처럼 했어야만 했다.
                this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);


                let win = false;
                if (rootData.tableData[this.rowIndex][0] === rootData.turn && rootData.tableData[this.rowIndex][1] === rootData.turn && rootData.tableData[this.rowIndex][2] === rootData.turn) {
                    win = true;
                }
                if (rootData.tableData[0][this.cellIndex] === rootData.turn && rootData.tableData[1][this.cellIndex] === rootData.turn && rootData.tableData[2][this.cellIndex] === rootData.turn) {
                    win = true;
                }
                if (rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn) {
                    win = true;
                }
                if (rootData.tableData[0][2] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][0] === rootData.turn) {
                    win = true;
                }

                if (win) { // 이긴 경우: 3줄 달성

                    rootData.winner = rootData.turn;
                    rootData.turn = 'O';
                    rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
                } else { // 무승부
                    let all = true; // all이 true면 무승부라는 뜻
                    rootData.tableData.forEach((row) => { // 무승부 검사
                        row.forEach((cell) => {
                            if (!cell) {
                                all = false;
                            }
                        });
                    });
                    if (all) { // 무승부
                        rootData.winner = '';
                        rootData.turn = 'O';
                        rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
                    } else {
                        rootData.winner = '';
                        rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
                    }
                }


            }
        }
    }
</script>

<style>

</style>