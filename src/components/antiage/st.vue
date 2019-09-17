<template>
  <div v-if="isShowList === 'ST'" class="bns">
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
        des:'胜肽激活细胞，促进胶原蛋白增生，对抗松弛肌肤，让肌肤变饱满紧实',
        goodsList:[
          {
            title:'Olay大红瓶',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/st/olay.png')
          },
          {
            title:'SK2大红瓶',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/st/sk2.png')
          },

          {
            title:'雅诗兰黛紧塑精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/st/ysld.png')
          },
          {
            title:'彼得罗夫抗皱精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/st/bdlf.png')
          },
          {
            title:'The Ordinary 多重胜肽精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/st/theordinary.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
