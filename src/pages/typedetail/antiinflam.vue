<template>
  <div v-if="isShow === 'antiinflam'" class="type-wrap">
    <div class="type-left">
      <div class="before-list" >
        主要成分
      </div>
      <div class="type-list">
        <li
          v-for="(item,index) in antiinflamInnerLists"
          @click="change(item.toKey,index)"
          :class="{active:index===nowIndex}"
        >{{item.name}}</li>
      </div>
    </div>
    <div class="type-right">
      <div class="type-goods">
        <g-c-s :isShowList="currentList"></g-c-s>
        <h-m-y-c :isShowList="currentList"></h-m-y-c>
        <n-n-s :isShowList="currentList"></n-n-s>
        <z-w-t-q-w :isShowList="currentList"></z-w-t-q-w>
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
  import GCS from '../../components/antiinflam/gcs'
  import HMYC from '../../components/antiinflam/hmyc'
  import NNS from '../../components/antiinflam/nns'
  import ZWTQW from '../../components/antiinflam/zwtqw'
  export default {
    components :{
      GCS,HMYC,NNS,ZWTQW
    },
    props:{
      isShow:{
        type:String,
      }
    },
    data(){
      return {
        nowIndex:0,
        antiinflamInnerLists:[
          {
            name:'甘草酸二钾',
            toKey:'GCS'
          },
          {
            name:'红没药醇',
            toKey:'HMYC'
          },
          {
            name:'尿囊素',
            toKey: 'NNS'
          },
          {
            name:'植物提取物',
            toKey:'ZWTQW'
          }
        ],
        currentList:'GCS'

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
