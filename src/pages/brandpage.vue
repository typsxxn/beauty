<template>
    <div class="brand-wrap">
      <div class="brand-left">
        <div class="brand-board">
          <ul >
            <router-link v-for="item in brands" :to="{path:item.path}" tag="li"
            active-class="active">
              <img :src="item.icon">
            </router-link>
          </ul>
        </div>
      </div>

      <div class="brand-right">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        brands:[
          {
            name:'OLAY',
            path:'olay',
            icon: require("../assets/brandicon/bolay.png"),
            active:false
          },
          {
            name:'The Ordinary',
            path:'theordinary',
            icon: require("../assets/brandicon/btheordinary.png"),
            active:false
          }
        ],
        imgMap: {
          '/brand/olay' :require("../assets/brandicon/bolay.png"),
          '/brand/theordinary' :require("../assets/brandicon/btheordinary.png")
        }
      }
    },
    computed:{
      brandIcon()
      {
        console.log(this.$router.path)
        return this.imgMap[this.$router.path]
      }
    }
  }
</script>

<style>
  .brand-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
  .brand-left {
    float: left;
    width: 200px;
    text-align: center;
  }
  .brand-right {
    float: left;
    width: 980px;
    margin-left: 20px;
  }
  .brand-board {
    /* background: #e3e4e8; */
    padding: 10px 0;
  }
  .brand-board ul {
    margin-top: 0px;
  }
  .brand-board li {
    list-style: none;
    text-align: center;
    padding: 5px 0px;
    cursor: pointer;
  }
  .brand-board li.active,
  .brand-board li:hover {
    /*height:60px;*/
   background: rgba(234, 234, 241,0.8);
   /*  color: #fff;*/
  }
  .brand-board li a {
    display: block;
  }
</style>
