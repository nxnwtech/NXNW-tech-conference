<template>
  <nav id="myNav" class="overlay" :class="isNavOpen ? 'is-open' : 'is-closed'">
    <div class="overlay-content">
        <a  v-on:click="toggleNav" href="#" class="navbar__item" v-scroll-to="'#about-section'">About</a>
        <a v-on:click="toggleNav" href="#" class="navbar__item" v-scroll-to="'#call-for-proposals-intro-section'">Call for Proposals</a>
        <!-- <a href="#" v-on:click="toggleNav" class="navbar__item" v-scroll-to="'#speakers-section'">Speakers</a>
        <a href="#" v-on:click="toggleNav" class="navbar__item" v-scroll-to="'#schedule-section'">Schedule</a> -->
        <a href="#" v-on:click="toggleNav" class="navbar__item" v-scroll-to="'#conduct-section'">Code Of Conduct</a>
        <!-- <a href="#" v-on:click="toggleNav" class="navbar__item" v-scroll-to="'#call-to-papers-section'">FAQ</a> -->
    </div>
  </nav>
</template>

<script>
export default {
  props: ["isNavOpen"],
  methods: {
    toggleNav: function() {
       this.$emit('navItemClicked', false)
    }
  },
};
</script>

<style lang="scss">
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #0e153a;
  opacity: 0.9;
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #fff;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  cursor: pointer;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
}

.is-closed {
  width: 0% !important;
}
.is-open {
  width: 100% !important;
}
</style>