<template>
  <div v-if="isShowList === 'NNS'" class="nns">
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
        des:'维持肌肤水润',
        goodsList:[
          {
            title:'FAB急救修复霜',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/nns/fab.png')
          },
          {
            title:'珂润润浸保湿霜',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/nns/kr.png')
          },
          {
            title:'优家晒后修护乳',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/nns/yj.png')
          },
          {
            title:'玉泽皮肤屏障修护乳',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/nns/yz.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
