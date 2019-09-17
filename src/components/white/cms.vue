<template>
  <div v-if="isShowList === 'CMS'" class="TranAcid">
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
        des:'控制黑素细胞的活性，预防皮肤色素沉淀；消炎止血',
        goodsList:[
          {
            title:'CPB光透白精华',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/cms/cpb.png')
          },
          {
            title:'IPSA自律美白乳 ',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/cms/ipsa.png')
          },
          {
            title:'欧珀莱淡斑精华',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/cms/opl.png')
          },
          {
            title:'资生堂盼丽风姿精华',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/cms/zst.png')
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
