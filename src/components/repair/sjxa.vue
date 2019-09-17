<template>
    <div v-if="isShowList === 'SJXA'" class="sjxa">
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
        des:'重建皮肤天然屏障，换季过敏和沙漠皮救星',
        goodsList:[
          {
            title:'珂润面霜',
            description:'',
            icon:require('../../assets/typeicon/repairicon/sjxa/kr.png')
          },
          {
            title:'FAB急救修复霜 ',
            description:'',
            icon:require('../../assets/typeicon/repairicon/sjxa/fab.png')
          },
          {
            title:'贝亲婴儿润肤乳',
            description:'',
            icon:require('../../assets/typeicon/repairicon/sjxa/bq.png')
          },
          {
            title:'CeraVe夜间修护',
            description:'',
            icon:require('../../assets/typeicon/repairicon/sjxa/slf.png')
          },
          {
            title:'玉泽皮肤屏障修护乳',
            description:'',
            icon:require('../../assets/typeicon/repairicon/sjxa/yz.png')
          },
          {
            title:'城野医生海洋胶原水凝露',
            description:'',
            icon:require('../../assets/typeicon/repairicon/sjxa/cy.png')
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
