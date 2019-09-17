<template>
  <div v-if="isShowList === '377'" class="377">
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
        des:'从源头阻断黑色素合成，改善肤色暗沉，淡化色斑。美白效果是曲酸的10倍以上',
        goodsList:[
          {
            title:'城野医生377精华',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/377/cy.png')
          },
          {
            title:'卡尼尔全效美白精华 ',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/377/kne.png')
          },
          {
            title:'兰蔻焕白霜',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/377/lk.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
