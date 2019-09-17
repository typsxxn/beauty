<template>
  <div v-if="isShowList === 'BNS'" class="bns">
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
            title:'薇姿89精华露',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/bns/wz.png')
          },
          {
            title:'太阳社玻尿酸原液',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/bns/tys.png')
          },

          {
            title:'欧莱雅玻尿酸安瓶',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/bns/oly.png')
          },
          {
            title:'芭乐雅玻尿酸安瓶',
            description:'',
            icon:require('../../assets/typeicon/hydrationicon/bns/bly.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
