<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="dark"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <img src="./assets/swan-tech.png" alt="swan-tech, llc" id="navLogo">
        <q-toolbar-title id="navTitle" class="mobile-hide">
          {{ navTitle }}
          <span slot="subtitle">
            {{ subTitle }}
          </span>
        </q-toolbar-title>
        <q-btn-dropdown label="Sections" color="primary" glossy>
          <a href="#your-website" v-smooth-scroll="{ duration: 1000, offset: -50 }">
            <q-item class="nav-items">
              <q-item-main>
                <q-item-tile label>Your Website</q-item-tile>
              </q-item-main>
            </q-item>
          </a>
          <a href="#development-process" v-smooth-scroll="{ duration: 1000, offset: -50 }">
            <q-item class="nav-items">
              <q-item-main>
                <q-item-tile label>Development Process</q-item-tile>
              </q-item-main>
            </q-item>
          </a>
          <a href="#project-timeline" v-smooth-scroll="{ duration: 1000, offset: -50 }">
            <q-item class="nav-items">
              <q-item-main>
                <q-item-tile label>Project Timeline</q-item-tile>
              </q-item-main>
            </q-item>
          </a>
          <a href="#pricing" v-smooth-scroll="{ duration: 1000, offset: -50 }">
            <q-item class="nav-items">
              <q-item-main>
                <q-item-tile label>Pricing</q-item-tile>
              </q-item-main>
            </q-item>
          </a>
          <a href="#project-terms" v-smooth-scroll="{ duration: 1000, offset: -50 }">
            <q-item class="nav-items">
              <q-item-main>
                <q-item-tile label>Project Terms</q-item-tile>
              </q-item-main>
            </q-item>
          </a>
        </q-btn-dropdown>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <Home />
    </q-page-container>
    <!-- <q-layout-footer color="dark" class="q-pa-md text-right"><strong>&copy; 2018 JD Dudley</strong></q-layout-footer> -->
  </q-layout>
</template>

<script>
import { openURL, scroll } from "quasar";
import Home from "./components/Home.vue";

// custom smooth scroll to element
const { getScrollTarget, setScrollPosition } = scroll;

export default {
  name: "LayoutDefault",
  components: {
    Home
  },
  data() {
    return {
      navTitle: "Proposal",
      subTitle: "Web Development"
    };
  },
  methods: {
    openURL,
    scrollToElement: function(el) {
      let target = getScrollTarget(el);
      let offset = el.offsetTop - el.scrollHeight;
      let duration = 1000;
      setScrollPosition(target, offset, duration);
    }
  }
};
</script>

<style>
p {
  line-height: 2;
}
/* #navLogo {
  float: left;
  position: absolute;
  top: 0;
  z-index: 999;
} */
#navLogo {
  max-width: 75%;
}
#navTitle {
  /* margin-left: 60px; */
  font-size: 1.5rem;
}
a {
  text-decoration: none;
  color: black;
}
.nav-items {
  width: 100%;
  text-align: right;
}
.nav-items:hover {
  background-color: #29aae2;
  color: white;
}
</style>
