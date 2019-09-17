<template>
  <div v-if="isShowList === 'FC'" class="fc">
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
        des:'泛醇强效保湿、抗炎、改善角质层屏障功能，增强肌肤渗透性，促进伤口愈合',
        goodsList:[
          {
            title:'理肤泉B5修复霜',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/fc/lfq.png')
          },
          {
            title:'修丽可B5保湿凝胶',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/fc/xlk.png')
          },

          {
            title:'AHC玻尿酸B5保湿精华',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/fc/ahc.png')
          },
          {
            title:'赫莲娜绿宝瓶精华露',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/fc/hln.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
