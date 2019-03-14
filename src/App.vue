<template>
  <div id="app">
    <app-header></app-header>
  <!-- Left side column. contains the logo and sidebar -->
  <app-left-side-bar></app-left-side-bar>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <router-view></router-view>
  </div>
  <!-- /.content-wrapper -->
  <app-footer></app-footer>

  <app-right-side-bar></app-right-side-bar>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'                      
import AppFooter from './components/Footer.vue'                      
import AppLeftSideBar from './components/LeftSideBar.vue'                      
import AppRightSideBar from './components/RightSideBar.vue'                      
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    AppLeftSideBar,
    AppRightSideBar
  }
  
}
</script>


