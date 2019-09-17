<template>
  <div v-if="isShowList === 'GS'" class="bns">
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
        des:'促进角质细胞脱落，去除废旧角质、治疗粉刺、缩小毛孔，恢复肌肤细腻光滑；加速黑色素代谢，改善暗沉',
        goodsList:[
          {
            title:'DR.WU杏仁酸精华',
            description:'',
            icon:require('../../assets/typeicon/acneicon/gs/dr.png')
          },
          {
            title:'宝拉珍选果酸精华',
            description:'',
            icon:require('../../assets/typeicon/acneicon/gs/bl.png')
          },

          {
            title:'Alpha Hydrox果酸面霜',
            description:'',
            icon:require('../../assets/typeicon/acneicon/gs/alpha.png')
          },
          {
            title:'MartiDerm焕肤安瓶',
            description:'',
            icon:require('../../assets/typeicon/acneicon/gs/martin.png')
          },
          {
            title:'修丽可果酸精华',
            description:'',
            icon:require('../../assets/typeicon/acneicon/gs/xlk.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
