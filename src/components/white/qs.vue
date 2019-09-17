<template>
  <div v-if="isShowList === 'QS'" class="KohicAcid">
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
        des:'阻碍黑色素生成，提高皮肤通透度，但有一定的致敏性',
        goodsList:[
          {
            title:'黛珂粹白精华',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/qs/dk.png')
          },
          {
            title:'黛珂白檀美白水',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/qs/dkbt.png')
          },
          {
            title:'修丽可Phyto+色修精华',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/qs/xlk.png')
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
