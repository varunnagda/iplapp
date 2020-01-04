<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-info" type="dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="../src/assets/images/ipllogo.png" width="45" height="45" alt />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  HOME
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/varunnagda">GIT HUB</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <team />
    <season />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import team from "./components/team.vue";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import season from "./components/season";

Vue.use(BootstrapVue);
export default {
  name: "app",
  components: {
    team,
    season
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
