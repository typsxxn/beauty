<template>
  <div v-if="isShowList === 'GY'" class="gy">
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
            title:'倩碧黄油',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/gy/qb.png')
          },
          {
            title:'百雀羚甘油一号',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/gy/bql.png')
          },

          {
            title:'MINON氨基酸保湿乳',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/gy/minon.png')
          },
          {
            title:'芙丽芳丝保湿修护乳',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/gy/flfs.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
