<!--
  main app entry point which contains the mast and the footer that wrap
  the router-view that contains the dynamic site content
 -->

<style>
  @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../assets/css/transitions.css";

  html {
    overflow-y: scroll;
  }

  body {
    /*background-image: url("../assets/img/geometry.png");
    background-repeat: repeat-x repeat-y;*/
  }

  #router {
    padding: 0;
    padding-bottom: 20px;

    /*margin: auto;
    width: 95%;
    display: inline-block;*/
  }

  .hvu-list-head {
    background-color: #384c9e !important;
    border-color: #384c9e !important;
    color: white;
  }

  a {
    color: #384c9e;
  }
  .content {
    margin-left: 250px;
}
.navbar-header{
  width: 100%;
  background: #fbfbfb;
  border: 1px solid #e7e7e7;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
}
.navbar-header p {
  text-align: center;
}
</style>

<template>
  <div id="app">
    <mast></mast>
    <!--<router-view id="router" class="panel panel-default col-lg-10 col-lg-offset-1"></router-view>-->
    <div class="content">
    <div class="navbar-header">
        <p>
          <a class="hvu-logo navbar-brand" href="#">
            <img alt="HVU" src="../assets/img/hvu.png" width="150px">
         </a>
        </p>
    </div>
    <div class="row">
      <router-view id="router" class="panel panel-default col-md-10 col-md-offset-1"></router-view>
    </div>
    <foot></foot>
    </div>
  </div>
</template>

<script>
  import mast from './mast.vue'
  import foot from './footer.vue'

  export default {
    created() {
      if(this.classTitle) {
        document.title = `HVU - ${this.classTitle}`
      }
    },
    vuex: {
      getters: {
        classTitle: state => state.classData.classTitle
      }
    },
    components: {
      mast,
      foot
    }
  }
</script>
