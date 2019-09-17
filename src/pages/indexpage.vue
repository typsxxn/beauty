<template>
  <div class="index--wrap">
    <div class="index-slide">
        <slide-show :slides="slides" @onchange="doSomethingOnSlideChange"></slide-show>
    </div>
    <div class="index-type">
      <div class="index-type-list">
        <div class="index-type-item" >
            <li
              v-for="(item,index) in typeList"
              @click="change(item.toKey,index)"
              :class="{active:index===nowIndex}"
            >{{item.title}}</li>
        </div>
      </div>
      <div class="index-type-detail" >
          <type-white :isShow="currentType"></type-white>
          <type-antiage :isShow="currentType"></type-antiage>
          <type-repair :isShow="currentType"></type-repair>
          <type-acne :isShow="currentType"></type-acne>
          <type-hydration :isShow="currentType"></type-hydration>
          <type-antiinflam :isShow="currentType"></type-antiinflam>
       </div>
    </div>

  </div>
</template>

<script>
  import slideShow from '../components/slideshow'
  // import typeDetail from './typedetail'
  import typeWhite from './typedetail/white'
  import typeAntiage from './typedetail/antiage'
  import typeRepair from './typedetail/repair'
  import typeAcne from './typedetail/acne'
  import typeHydration from './typedetail/hydration'
  import typeAntiinflam from './typedetail/antiinflam'
export default {
    components:{
      slideShow,
      // typeDetail,
      typeWhite,
      typeAntiage,
      typeRepair,
      typeAcne,
      typeHydration,
      typeAntiinflam
    },
  data(){
    return{
      nowIndex:0,
      invTime:2000,
      slides:[
        {
          src:require('../assets/slideshow/1.png'),
          title:'olay',
          href:'brand/olay'
        },
        {
          src:require('../assets/slideshow/2.png'),
          title:'theOrdinary',
          href:'brand/theOrdinary'
        },
      ],
      typeList:[
        {
          index:1,
          title:'美白',
          toKey:'white',
        },
        {
          index:2,
          title:'抗衰老',
          toKey:'antiage',
        },
        {
          index:3,
          title:'修复',
          toKey:'repair',
        },
        {
          index:4,
          title:'祛痘',
          toKey:'acne',
        },
        {
          index:5,
          title:'补水',
          toKey:'hydration',
        },
        {
          index:6,
          title:'抗炎',
          toKey:'antiinflam',
        }
      ],
      currentType:'white'
    }
  },
  methods:{
    doSomethingOnSlideChange(){
      console.log('doSomethingOnSlideChange run!')
    },
    change(type,index){
      this.nowIndex=index
      this.currentType=type
    }
  }
}
</script>

<style>
  li{
    list-style: none;
  }
.index--wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-type{
    line-height: 50px;
    width: 1200px;
    font-size: 15px;
  }
.index-type-list {
  width:1200px;
  height:50px;
  font-size: 16px;
}
.index-type-item li{
  float: left;
  display: inline;
  width:200px;
  text-align: center;
  font-size: 16px;
}

  .index-type-list li.active,
  .index-type-list li:hover {
    background:black;
    color:white;
  }

.index-type-detail{
  width:1200px;
  min-height: 500px;
  color:black;
  background: rgb(234, 234, 241);
  overflow-style: scrollbar;
}
.before-list{
  width:150px;
  height:75px;
  text-align: center;
  line-height: 60px;
  font-weight: 700;
  font-size:20px;
  background-image:url(../assets/inner.png);
  letter-spacing: 3px;
}
.type-wrap{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.type-left{
  float: left;
  width:150px;
}
.type-right{
  float: left;
  width:950px;
  margin-left: 50px;
  margin-right: 50px;
}

.type-list{
  margin-top: 1px;
  width:150px;
  background: black;
  color:white;
  text-align: center;
  border-top-color:black;
  letter-spacing: 2px;
  font-weight: 500;
  font-size:14px;
}
.type-list li{
  height:50px;
  /*border-bottom-style: solid;*/
  /*border-bottom-color: black;*/
}
.type-list li:hover{
  background: white;
  color:black;
}
  .type-list li.active{
    background: rgba(224,224,224 ,1);
    color:black;
    font-weight: 700;
  }

</style>
