<template>
  <div v-if="isShow === 'antiage'" class="type-wrap">
    <div class="type-left">
      <div class="before-list" >
        主要成分
      </div>
      <div class="type-list">
        <li
          v-for="(item,index) in antiageInnerLists"
          @click="change(item.toKey,index)"
          :class="{active:index===nowIndex}"
        >{{item.name}}</li>
      </div>
    </div>
    <div class="type-right">
      <div class="type-goods">
        <a-c :isShowList="currentList"></a-c>
        <b-l-l-c :isShowList="currentList"></b-l-l-c>
        <s-t :isShowList="currentList"></s-t>
        <v-e :isShowList="currentList"></v-e>
        <f-m :isShowList="currentList"></f-m>
      </div>
    </div>
    <div class="type-content">
      <ul>
        <span></span>
      </ul>
    </div>
  </div>
</template>

<script>
  import AC from '../../components/antiage/ac'
  import BLLC from '../../components/antiage/bllc'
  import ST from '../../components/antiage/st'
  import VE from '../../components/antiage/ve'
  import FM from '../../components/antiage/fm'
  export default {
    components :{
      AC,
      BLLC,
      ST,
      VE,
      FM,
    },
    props:{
      isShow:{
        type:String,
      }
    },
    data(){
      return {
        nowIndex:0,
        antiageInnerLists:[
          {
            name:'A醇',
            toKey:'AC'
          },
          {
            name:'白藜芦醇',
            toKey:'BLLC'
          },
          {
            name:'胜肽',
            toKey:'ST'
          },
          {
            name:'维E',
            toKey:'VE'
          },
          {
            name:'辅酶Q10艾地苯',
            toKey:'FM'
          },
        ],
        currentList:'AC'
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
