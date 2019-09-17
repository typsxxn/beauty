<template>
  <div v-if="isShowList === 'VC'" class="VC">
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
        des:'淡化已生成的黑色素，改善暗沉，提亮肤色；刺激胶原蛋白再生，减缓皱纹产生',
        goodsList:[
          {
            title:'倩碧VC精华',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/vc/qb.png')
          },
          {
            title:'修丽可臻白精华 ',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/vc/xlk.png')
          },
          {
            title:'赛贝格淡斑粉',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/vc/sbg.png')
          },

          {
            title:'科颜氏亮肤精华',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/vc/kys.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
