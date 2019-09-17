<template>
    <div v-if="isShowList === 'YXA'" class="yxa">
      <div class="des">
        {{des}}
      </div>
      <div class="goods-list">
        <div
          class="goods-item"
          v-for="(item,index) in goodsList"
        >
          <div class="goods-item-inner">
            <img :src="item.icon" >
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props:{
      isShowList:{
        type:String,
      }
    },
    data(){
      return {
        des:'多面小能手，美白提亮、减缓衰老、抑制油脂分泌、修复受损肌肤',
        goodsList:[
          {
            title:'贝德玛烟酰胺修护霜',
            description:'',
            icon:require('../../assets/typeicon/repairicon/yxa/bdm.png')
          },
          {
            title:'宝拉珍选屏障欢颜精华',
            description:'',
            icon:require('../../assets/typeicon/repairicon/yxa/bl.png')
          },
          {
            title:'理肤泉特安舒缓夜间修护霜',
            description:'',
            icon:require('../../assets/typeicon/repairicon/yxa/lfq.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>
  /*.goods-list{
    float: left;
    overflow: hidden;
  }
  .goods-item{
    float: left;
    width: 300px;
    text-align: center;
    padding: 20px 0;
  }*/
</style>
