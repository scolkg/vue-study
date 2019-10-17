<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component :table-data="tableData"  />
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>
</template>

<script>
    import TableComponent from './TableComponent';

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