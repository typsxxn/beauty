<template>
  <div v-if="isShowList === 'VE'" class="bns">
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
        des:'抵御紫外线对皮肤的伤害，预防光老化，搭配VC能发挥更大的功效',
        goodsList:[
          {
            title:'修丽可CE精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/ve/xlk.png')
          },
          {
            title:'Blackmores维E面霜',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/ve/black.png')
          },

          {
            title:'Aveeno婴儿燕麦保湿乳',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/ve/aveeno.png')
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>
