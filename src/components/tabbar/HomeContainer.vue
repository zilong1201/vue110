<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
          </mt-swipe>
        <h3>HomeContainer</h3>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        created(){
           this.getLunbotu()
        },
        methods: {
            getLunbotu(){  //获取轮播图数据
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
                    console.log(result)
                }).catch(e=>e)
            }
        }
    }
</script>

<style lang='scss' scope>
    
    .mint-swipe{
        height: 200px;

        .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }

            &:nth-child(2){
                background-color: green;
            }
        }

    }
    
</style>