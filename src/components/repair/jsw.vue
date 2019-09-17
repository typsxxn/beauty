<template>
    <div v-if="isShowList === 'JSW'" class="jsw"><!--烟酰胺 -->
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
        des:'有助于肌肤屏障的修复，增强皮肤抵抗能力，防止肌肤水分流失',
        goodsList:[
          {
            title:'理肤泉安心乳',
            description:'',
            icon:require('../../assets/typeicon/repairicon/jsw/lfq.png')
          },
          {
            title:'雅漾舒缓修护霜 ',
            description:'',
            icon:require('../../assets/typeicon/repairicon/jsw/yy.png')
          },
          {
            title:'HABA鲨烷美容油',
            description:'',
            icon:require('../../assets/typeicon/repairicon/jsw/haba.png')
          },
          {
            title:'伊丽莎白雅顿金胶',
            description:'',
            icon:require('../../assets/typeicon/repairicon/jsw/yd.png')
          },
          {
            title:'科颜氏夜间修护精华',
            description:'',
            icon:require('../../assets/typeicon/repairicon/jsw/kys.png')
          },
          {
            title:'德美丝角质层修护乳',
            description:'',
            icon:require('../../assets/typeicon/repairicon/jsw/dms.png')
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
