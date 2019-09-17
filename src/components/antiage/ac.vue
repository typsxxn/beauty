<template>
  <div v-if="isShowList === 'AC'" class="ac">
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
        des:'A醇增厚表皮厚度，促进胶原蛋白合成，提高皮肤紧致度，恢复皮肤活力和弹性',
        goodsList:[
          {
            title:'露得清A醇晚霜',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/ac/ldq.png')
          },
          {
            title:'资生堂悦薇小熨斗 ',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/ac/zst.png')
          },
          {
            title:'伊丽莎白雅顿小粉胶',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/ac/yd.png')
          },
          {
            title:'彼得罗夫维A夜间精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/ac/bdlf.png')
          },
          {
            title:'ROC维A醇抗皱精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/ac/roc.png')
          },
          {
            title:'肌肤哲理维A醇精华',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/ac/jfzl.png')
          },
          {
            title:'The Ordinary 2% 视黄醇',
            description:'',
            icon:require('../../assets/typeicon/antiageicon/ac/theordinary.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
