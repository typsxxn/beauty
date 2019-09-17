<template>
  <div v-if="isShowList === 'BLLC'" class="bllc">
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
        des:'白藜芦醇减少紫外线照射引起的细胞损伤和炎症反应，加速细胞更新，延缓衰老',
        goodsList:[
          {
            title:'欧缇丽紧致精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/bllc/otl.png')
          },
          {
            title:'Sesderma白藜芦醇精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/bllc/sesderma.png')
          },

          {
            title:'Topix三重抗氧化精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/bllc/topix.png')
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>
