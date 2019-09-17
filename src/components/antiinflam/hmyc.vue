<template>
  <div v-if="isShowList === 'HMYC'" class="hmyc">
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
            title:'百洛护肤油',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/hmyc/bl.png')
          },
          {
            title:'启初婴儿多效倍润霜',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/hmyc/qc.png')
          },

          {
            title:'肌研专方舒敏修护面霜',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/hmyc/jy.png')
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>
