<template>
  <div v-if="isShowList === 'FM'" class="fm">
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
        des:'辅酶Q10清除氧自由基，减缓胶原蛋白的降解，提高皮肤修复再生能力，减轻皱纹',
        goodsList:[
          {
            title:'HABA辅酶美容油',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/fm/haba.png')
          },
          {
            title:'DHC润白霜',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/fm/dhc.png')
          },

          {
            title:'优色林Q10修护晚霜',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/fm/ysl.png')
          },
          {
            title:'伊丽莎白雅顿橘灿精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/fm/yd.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
