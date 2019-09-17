<template>
    <div v-if="isShowList === 'EGF'" class="egf">
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
        des:'促进细胞增值分化，重建受损角质，加速创口愈合，预防疤痕',
        goodsList:[
          {
            title:'薇诺娜舒敏修红霜',
            description:'',
            icon:require('../../assets/typeicon/repairicon/egf/wnn.png')
          },
          {
            title:'城野医生EGF修复原液',
            description:'',
            icon:require('../../assets/typeicon/repairicon/egf/cy.png')
          }
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
