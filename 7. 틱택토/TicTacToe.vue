<template>
    <div>
        <h1>틱택토</h1>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data(){
            return {

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

</style>