<template>
  <div id="layout">
    <div class="layout-head">
      <div class="layout-head-inner">
        <router-link :to="{path:'/'}">
          <img class="logo" src="../assets/logo.png" >
          <img class="logo1" src="../assets/logo1.png" >
        </router-link>
        <div class="head-inner-nav">
          <ul class="nav-list">
            <li>{{username}}</li>
            <li v-if="username!==''" class="nav-pile">|</li>

            <li v-if="username!==''" @click="logOut">LogOut</li>
            <li v-if="username!==''" class="nav-pile">|</li>

            <li v-if="username===''" @click="logClick" >LogIn</li>
            <li  v-if="username===''" class="nav-pile">|</li>

            <li  v-if="username===''" @click="regClick">Register</li>
            <li  v-if="username===''"  class="nav-pile">|</li>

            <li @click="aboutClick">About Us</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="layout-body">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="layout-foot">
      <p>© 2019 &nbsp typxxn</p>
    </div>

    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>

    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <p>register</p>
    </my-dialog>

    <my-dialog :is-show = "isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>Our goal is to provide scientific skin care knowledge to every beautiful girl.</p>
    </my-dialog>
  </div>
</template>

<script>
  import Dialog from '../components/dialog'
  import LogForm from '../components/logform'
  export default {
    components:{
      MyDialog:Dialog,
      LogForm
    },
    data(){
      return {
        username:'',
        isShowLogDialog:false,
        isShowRegDialog:false,
        isShowAboutDialog: false
      }
    },
    methods:{
      logClick(){
        this.isShowLogDialog=true
      },
      regClick(){
        this.isShowRegDialog=true
      },
      aboutClick(){
        this.isShowAboutDialog = true
      },
      closeDialog(attr){
        this[attr]=false
      },
      onSuccessLog(data){
        console.log(data)
        this.closeDialog('isShowLogDialog')
        this.username=data.username
      },
      logOut(){
        alert('Do you want quit?')//增加一个判断是否要做决定的dialog
        alert('You have Log out!')
        this.closeDialog('isShowLogDialog')
        this.username=''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
  }
  header,footer,body,nav{
    display: block;
  }
  ol, ul {
       list-style: none;
     }

  body {
    background: white;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }

  .layout-head {
    background: rgba(234, 234, 241,0.3);
     /* background:#EAEAF1; */
    color: #1e1e1e;
    height: 90px;
    line-height: 90px;
    width: 100%;
    margin: 10px 10px;
    z-index: 10;
    font-size:18px;
    font-weight:500;
  }
  .layout-head-inner{
    width: 1200px;
    margin: 0 auto;
  }
  .logo{
    height:90px;
    width:90px;
    float: left;
  }
  .logo1{
    height:90px;
    width:500px;
    float: left;
    margin:0 180px;
  }

  .head-inner-nav {
    float: right;
  }
  .head-inner-nav ul {
    overflow: hidden;
  }
  .head-inner-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }

  .layout-body{
    width: 100%;
    /*margin-top:90px ;*/
  }
  .layout-foot{
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin: 10px 10px;
  }

  .button {
    background: rgba(128,128,128 ,0.6);
    color: rgba(30, 30, 30, 0.8);
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 15px;
  }
  .g-form {

  }
  .g-form-line {
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input {
    height: 30px;
    width: 150px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
    width:100px;
  }
  .g-form-error {

    color: red;
    padding-left: 5px;
    font-size: 8px;
  }
</style>
