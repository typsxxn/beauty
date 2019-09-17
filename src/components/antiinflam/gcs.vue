<template>
  <div v-if="isShowList === 'GCS'" class="gcs">
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
            title:'HABA G露',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/gcs/haba.png')
          },
          {
            title:'IPSA流金水',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/gcs/ipsa.png')
          },

          {
            title:'奥尔滨健康水',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/gcs/aeb.png')
          },
          {
            title:'理肤泉特安润肤水',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/gcs/lfq.png')
          },
          {
            title:'赫莲娜修护舒缓霜',
            description:'',
            icon:require('../../assets/typeicon/antiinflamicon/gcs/hln.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
