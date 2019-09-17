<template>
  <div v-if="isShow === 'acne'" class="type-wrap">
    <div class="type-left">
      <div class="before-list" >
        主要成分
      </div>
      <div class="type-list">
        <li
          v-for="(item,index) in acneInnerLists"
          @click="change(item.toKey,index)"
          :class="{active:index===nowIndex}"
        >{{item.name}}</li>
      </div>
    </div>
    <div class="type-right">
      <div class="type-goods">
        <g-s :isShowList="currentList"></g-s>
        <s-y-s :isShowList="currentList"></s-y-s>
        <w-a-s :isShowList="currentList"></w-a-s>
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
  import GS from '../../components/acne/gs'
  import SYS from '../../components/acne/sys'
  import WAS from '../../components/acne/was'
  export default {
    components :{
      GS,SYS,WAS
    },
    props:{
      isShow:{
        type:String
      }
    },
    data(){
      return {
        nowIndex:0,
        acneInnerLists:[
          {
            name:'果酸',
            toKey:'GS'
          },
          {
            name:'水杨酸',
            toKey:'SYS'
          },
          {
            name:'维A酸',
            toKey:'WAS'
          }
        ],
        currentList:'GS'
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
