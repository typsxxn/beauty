<template>
  <div v-if="isShow === 'repair'" class="type-wrap">
    <div class="type-left">
      <div class="before-list" >
        主要成分
      </div>
      <div class="type-list">
        <li
          v-for="(item,index) in repairInnerLists"
          @click="change(item.toKey,index)"
          :class="{active:index===nowIndex}"
        >{{item.name}}</li>
      </div>
    </div>
    <div class="type-right">
      <div class="goods">
        <s-j-x-a :isShowList="currentList"></s-j-x-a>
        <j-s-w :isShowList="currentList"></j-s-w>
        <y-x-a :isShowList="currentList"></y-x-a>
        <e-g-f :isShowList="currentList"></e-g-f>
      </div>
    </div>
  </div>
</template>

<script>
  import SJXA from '../../components/repair/sjxa'
  import JSW from '../../components/repair/jsw'
  import YXA from '../../components/repair/yxa'
  import EGF from '../../components/repair/egf'
  export default {
    components:{
      SJXA,JSW,YXA,EGF
    },
    props:{
      isShow:{
        type:String,
      }
    },
    data(){
      return {
        nowIndex:0,
        repairInnerLists:[
          {
            name:'神经酰胺',
            toKey:'SJXA'
          },
          {
            name:'角鲨烷',
            toKey:'JSW'
          },
          {
            name:'烟酰胺',
            toKey:'YXA'
          },
          {
            name:'EGF',
            toKey:'EGF'
          }
        ],
        currentList:'SJXA'
      }
    },
    methods:{
      change(list,index){
        this.nowIndex=index
        this.currentList=list
      }
    }
  }
</script>

<style scoped>

</style>
