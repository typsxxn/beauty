<template>
  <div v-if="isShow === 'white'" class="type-wrap">
    <div class="type-left">
      <div class="before-list" >
        主要成分
      </div>
      <div class="type-list">
        <li
          v-for="(item,index) in whiteInnerLists"
          @click="change(item.toKey,index)"
          :class="{active:index===nowIndex}"
        >{{item.name}}</li>
      </div>
    </div>
    <div class="type-right">
      <div class="type-goods">
        <y-x-a :isShowList="currentList"></y-x-a>
        <v-c :isShowList="currentList"></v-c>
        <c-m-s :isShowList="currentList"></c-m-s>
        <t-s-s :isShowList="currentList"></t-s-s>
        <x-g-g :isShowList="currentList"></x-g-g>
        <q-s :isShowList="currentList"></q-s>
      </div>
    </div>
  </div>
</template>

<script>
  import YXA from '../../components/white/yxa'
  import VC from '../../components/white/vc'
  import CMS from '../../components/white/cms'
  import TSS from '../../components/white/377'
  import XGG from '../../components/white/xgg'
  import QS from '../../components/white/qs'
  export default {
    components :{
      YXA,
      VC,
      CMS,
      TSS,
      XGG,
      QS
    },
    props:{
      isShow:{
        type:String,
      }
    },
    data(){
      return {
        nowIndex:0,
        whiteInnerLists:[
          {
            name:'烟酰胺',
            toKey:'YXA'
          },
          {
            name:'维C',
            toKey:'VC'
          },
          {
            name:'传明酸',
            toKey: 'CMS'
          },
          {
            name:'377',
            toKey:'377'
          },
          {
            name:'熊果苷',
            toKey:'XGG'
          },
          {
            name:'曲酸',
            toKey:'QS'
          },
        ],
        currentList:'YXA'

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

<style >
/*.white-wrap{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.white-left{
  float: left;
  width:100px;
}
.white-right{
  float: left;
  width:1180px;
  margin-left: 20px;
}

  .white-list{
    margin-top: 1px;
    width:150px;
    background: black;
    color:white;
    text-align: center;
    border-top-color:black;
    letter-spacing: 2px;
    font-weight: 600;
    font-size:16px;
  }
.white-list li{
    height:50px;
    !*border-bottom-style: solid;*!
    !*border-bottom-color: black;*!
}
  .white-list li:hover{
    background: white;
    color:black;

  }*/
.des{
  font-size: 18px;
  font-weight: 500;
  margin-left: 50px;
}
.type-right{
  float: right;
  margin-top: 20px;
}
.goods-list{
  float: left;
  overflow: hidden;
}
.goods-item{
  float: left;
  width: 300px;
  text-align: center;
  padding: 20px 0;
}

</style>
