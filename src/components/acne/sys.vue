<template>
  <div v-if="isShowList === 'SYS'" class="bns">
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
        des:'深入毛孔溶解堆积的油脂，疏通毛孔；抑菌抗炎，改善痤疮痘肌',
        goodsList:[
          {
            title:'法国珍贵水',
            description:'',
            icon:require('../../assets/typeicon/acneicon/sys/zgs.png')
          },
          {
            title:'博乐达超分子水杨酸',
            description:'',
            icon:require('../../assets/typeicon/acneicon/sys/bld.png')
          },

          {
            title:'宝拉珍选 2% 水杨酸精华',
            description:'',
            icon:require('../../assets/typeicon/acneicon/sys/bl.png')
          },
          {
            title:'理肤泉K+乳',
            description:'',
            icon:require('../../assets/typeicon/acneicon/sys/lfqk.png')
          },
          {
            title:'理肤泉AI乳',
            description:'',
            icon:require('../../assets/typeicon/acneicon/sys/lfqai.png')
          },
          {
            title:'理肤泉DUO+乳',
            description:'',
            icon:require('../../assets/typeicon/acneicon/sys/lfqduo.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
