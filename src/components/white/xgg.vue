<template>
  <div v-if="isShowList === 'XGG'" class="Arbutin">
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
        des:'抑制黑色素产生，减少色素沉着。分α和β熊果苷，前者美白效果是后者的10',
        goodsList:[
          {
            title:'宠爱之名熊果苷精华',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/xgg/cazm.png')
          },
          {
            title:'薇诺娜熊果苷精华 ',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/xgg/wnn.png')
          },
          {
            title:'Tunemakers熊果苷原液',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/xgg/tunemakers.png')
          },

          {
            title:'The Ordinary 2% 熊果苷精华',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/xgg/theordinary.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
