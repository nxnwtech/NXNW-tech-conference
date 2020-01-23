<template>
  <nav class="navbar">
    <!-- <div class="navbar__logo">LOGO</div> -->
    <div class="container">
      <div class="navbar__links">
        <div class="navbar__item">About</div>
        <div class="navbar__item">Speakers</div>
        <div class="navbar__item">Schedule</div>
        <div class="navbar__item">Code Of Conduct</div>
        <div class="navbar__item">FAQ</div>
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