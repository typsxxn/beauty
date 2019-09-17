<template>
    <div class="type-detail-wrap">
      <div class="detail-cover">
        <div class="detail-content" >
          <!--<slot>empty</slot>-->
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props:{
      isShow:{
        type:String
    }
    },
    data(){
      return {
      }
    }
  }
</script>

<style scoped>
  .type-detail-wrap {
    width: 100%;
    height: 100%;
  }
  .detail-cover {
    opacity: .3;
    width: 100%;
    height: 100%;
  }
  .detail-content {
    width: 100%;
    max-height: 50%;
    overflow: hidden;
    padding: 10px 20px 20px 20px;
  }
</style>
