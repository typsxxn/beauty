<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">Username: </span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="input username">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">Password：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="input password">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">Log in</a>
        </div>
      </div>
      <p>{{errorText}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        usernameModel:'',
        passwordModel:'',
        errorText:''
      }
    },
    computed:{
      userErrors(){
        let errorText,status
        if(!/@/g.test(this.usernameModel)){
          status=false
          errorText='Should contain @'
        }
        else{
          status=true
          errorText=''
        }
        if(!this.userFlag){
          errorText=''
          this.userFlag=true
        }
       return {
          status,
          errorText
       }
      },
      passwordErrors(){
        let errorText,status
        if(!/^\w{0,6}$/g.test(this.passwordModel)){
          status=false
          errorText='Should in 1-6'
        }
        else{
          status=true
          errorText=''
        }
        if(!this.passwordFlag){
          errorText=''
          this.passwordFlag=true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods:{
      onLogin(){
        if(!this.userErrors.status||!this.passwordErrors.status){
          this.errorText='username or password has error'
        }
        else{
          this.errorText=''
          this.$http.get('api/login')
            .then((res)=>{
              this.$emit('has-log',res.data)
            },(err)=>{
              console.log(err)
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
