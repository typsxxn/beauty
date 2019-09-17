<template>
  <div class="dialog-wrap"  >
    <div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
    <div class="dialog-content" v-if="isShow">
      <p class="dialog-close" @click="closeMyself">x</p>
      <slot>empty</slot>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      isShow:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      closeMyself(){
        this.$emit('on-close')
      }
    }
  }
</script>

<style >
  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width: 400px;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: rgba(206, 206, 225, 0.6);
    top: 20%;
    left: 60%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid rgb(208, 208, 225);
    padding: 2%;
    line-height: 1.6;
    font-family: "Times New Roman";
    font-size: 18px;
    font-weight: 600;
  }
  .dialog-close {
    position: absolute;
    right: 2px;
    top: 0px;
    width: 20px;
    height: 20px;
    margin: 0px 1px;
    text-align: center;
    cursor: pointer;
    font-size:24px;
    font-weight: 800;
  }
  .dialog-close:hover {
    color: rgba(128,0,0 ,1);
  }
</style>
