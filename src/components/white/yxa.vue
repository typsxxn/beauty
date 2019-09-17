<template>
    <div v-if="isShowList === 'YXA'" class="yxa"><!--烟酰胺 -->
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
        des:'多面小能手，美白提亮、减缓衰老、抑制油脂分泌、修复受损肌肤',
        goodsList:[
          {
            title:'SK2小灯泡',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/yxa/sk2.png')
          },
          {
            title:'OLAY淡斑小白瓶 ',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/yxa/olayprox.png')
          },
          {
            title:'OLAY光感小白瓶',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/yxa/olay.png')
          },

          {
            title:'The Ordinary 10% 烟酰胺',
            description:'',
            icon:require('../../assets/typeicon/whiteicon/yxa/theordinary.png')
          },
        ]
      }
    }
  }
</script>

<style scoped>
  /*.goods-list{
    float: left;
    overflow: hidden;
  }
  .goods-item{
    float: left;
    width: 300px;
    text-align: center;
    padding: 20px 0;
  }*/
</style>
