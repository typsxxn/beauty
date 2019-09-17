<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label"></span>
        <div class="g-form-input" v-for="formLine in formData">
          <input type="text" v-model="formLine.user" placeholder="input your username">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label"></span>
        <div class="g-form-input" v-for="formLine in formData">
          <input type="password" v-model="formLine.pass" placeholder="input password">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onRegister">Register</a>
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
        formData:[
          {
            user: typxxn ,
            pass: 123456
          }
        ]
      }
    },
    computed: {
      userErrors () {
        let status, errorText
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '必须包含@'
        } else {
          status = true
          errorText = ''
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors () {
        let status, errorText
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '必须包含@'
        }
        else {
          status = true
          errorText = ''
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onRegister () {
        if (!this.userErrors.status || !this.passwordErrors.status) {
          this.errorText = '部分选项未通过'
        }
        else {
          this.errorText = ''
          console.log('reg success')
          /*this.$http.get('api/login')
            .then((res) => {
              this.$emit('has-log', res.data)
            }, (error) => {
              console.log(error)
            })*/
        }
      },
      closeMyself () {
        this.$emit('on-close')
      }
    }

  }
</script>

<style scoped>

</style>
