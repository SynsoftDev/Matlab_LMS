<!--
  site header and navigation
 -->

<style>
  .hvu-logo {
    margin-bottom: 10px;
  }
  
  .navbar-header a {
    line-height: 30px;
  }
  .home-btn {
    margin-top: 15px;
  }
  #sidebar-wrapper {
  top: 0px;
  left: -200px;
  width: 250px;
  background-color: #969fc2;
  color: white;
  position: fixed;
  height: 100%;
  z-index: 1;
  overflow-y:scroll; 
}
.sidebar-nav {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
}
.sidebar-nav li {
  text-indent: 20px;
  line-height: 50px;
}
.sidebar-nav li a {
  color: white;
  display: block;
  text-decoration: none;
}
.sidebar-nav li a:hover {
  background: rgba(255,255,255,0.25);
  color: white;
  text-decoration: none;
}
.sidebar-nav li a:active, .sidebar-nav li a:focus {
  text-decoration: none;
}
#sidebar-wrapper.sidebar-toggle {
  transition: all 0.3s ease-out;
  margin-left: -200px;
}
@media (min-width: 768px) {
  #sidebar-wrapper.sidebar-toggle {
    transition: 0s;
    left: 200px;
  }
}
.navbar {
    position: fixed;
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
}
.sidebar-nav li.active-menu{
  background: #364b9f
}

</style>

<template>
<div class="mast row">
 <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div id="sidebar-wrapper" class="sidebar-toggle">
      <ul class="sidebar-nav">
        <li class="active-menu">
          <strong><a v-link="{ path: '/class' }" type="button">Class Home</a></strong>
        </li>
        <li v-for="chapter in cdata.chapters" >
          <strong><a href="#!/class/{{chapter.cid}}">{{ chapter.name }}</a></strong>
          <ul v-for="version in chapter.versions">
              <a href="#!/class/{{chapter.cid}}">{{version.name}}</a>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>

<script>
  export default {
      name: 'Class',
      vuex: {
          getters: {
              cdata: state => state.classData
          }
      }
  }
</script>
