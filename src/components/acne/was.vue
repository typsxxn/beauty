<template>
  <div v-if="isShowList === 'WAS'" class="bns">
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
        des:'促进表皮细胞更新，改善粉刺痤疮，毛周角化。属于处方药，效果比较猛',
        goodsList:[
          {
            title:'维A酸乳膏',
            description:'',
            icon:require('../../assets/typeicon/acneicon/was/wasrg.png')
          },
          {
            title:'阿达帕林凝胶',
            description:'',
            icon:require('../../assets/typeicon/acneicon/was/adpl.png')
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>
