<template>
  <nav class="navbar">
    <!-- <div class="navbar__logo">LOGO</div> -->
    <div class="container">
      <div class="navbar__links">
        <a href="#" class="navbar__item" v-scroll-to="'#about-section'">About</a>
        <a href="#" class="navbar__item" v-scroll-to="'#call-for-proposals-intro-section'">Call for Proposals</a>
        <!-- <a href="#" class="navbar__item" v-scroll-to="'#speakers-section'">Speakers</a>
        <a href="#" class="navbar__item" v-scroll-to="'#schedule-section'">Schedule</a> -->
        <a href="#" class="navbar__item" v-scroll-to="'#conduct-section'">Code Of Conduct</a>
        <!-- <a href="#" class="navbar__item" v-scroll-to="'#call-to-papers-section'">FAQ</a> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar {
  padding: 20px;
  background: #0e153a;
  color: #fff;
  font-size: 1.5em;
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: relative;
  top: 10px;
  top: 10px;
  margin-top: -10px;
  @media screen and (max-width: 768px) {
    display: none;
  }

  .navbar__links {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>