<template>
  <div v-if="isShowList === 'ZWTQW'" class="zwtqw">
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
            title:'黛珂紫苏水',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/zwtqw/dk.png')
          },
          {
            title:'科颜氏金盏花水',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/zwtqw/kys.png')
          },
          {
            title:'无印良品化妆水',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/zwtqw/muji.png')
          },
          {
            title:'薇诺娜舒敏修护霜',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/zwtqw/wnn.png')
          },
          {
            title:'孔凤春马齿苋调养水',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/zwtqw/kfc.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
