<template>
  <div v-if="isShow === 'hydration'" class="type-wrap">
    <div class="type-left">
      <div class="before-list" >
        主要成分
      </div>
      <div class="type-list">
        <li
          v-for="(item,index) in hydrationInnerLists"
          @click="change(item.toKey,index)"
          :class="{active:index===nowIndex}"
        >{{item.name}}</li>
      </div>
    </div>
    <div class="type-right">
      <div class="type-goods">
        <b-n-s :isShowList="currentList"></b-n-s>
        <f-c :isShowList="currentList"></f-c>
        <g-y :isShowList="currentList"></g-y>
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
  import BNS from '../../components/hydration/bns'
  import FC from '../../components/hydration/fc'
  import GY from '../../components/hydration/gy'
  export default {
    components :{
      BNS,FC,GY
    },
    props:{
      isShow:{
        type:String,
      }
    },
    data(){
      return {
        nowIndex:0,
        hydrationInnerLists:[
          {
            name:'玻尿酸',
            toKey:'BNS'
          },
          {
            name:'泛醇',
            toKey:'FC'
          },
          {
            name:'甘油',
            toKey:'GY'
          }
        ],
        currentList:'BNS'
      }
    },
    methods: {
      change (list, index) {
        this.nowIndex = index
        this.currentList = list
      }
    }
  }
</script>

<style scoped>

</style>
