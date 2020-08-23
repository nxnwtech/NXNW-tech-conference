<template>
  <div class="info-box shadow--large">
    <div class="info-box__item">
      <g-image class="info-icon" src="/assets/location.svg" alt="conferenece location" />
      <h1 class="font-bold">LYIT Letterkenny</h1>
    </div>
    <div class="info-box__item">
      <g-image class="info-icon" src="/assets/calendar.svg" alt="conferenece location" />
      <h1 class="font-bold">3rd June 2021</h1>
    </div>
    <div class="info-box__item">
      <g-image class="info-icon" src="/assets/speakers.svg" alt="conferenece location" />
      <h1 class="font-bold">16+ Speakers</h1>
    </div>
    <div class="info-box__item">
      <g-image class="info-icon" src="/assets/seats.svg" alt="conferenece location" />
      <h1 class="font-bold">300 seats</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.info-box {
  margin-bottom: 2em;
  padding: 30px;
  background-color: #fff;
  width: 100%;
  border-radius: 3px;
  margin-top: -70px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  justify-items: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 10px;
  }

  .info-box__item {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  .info-icon {
    width: 70px;
    @media screen and (max-width: 640px) {
      width: 40px;
    }
  }

  h1 {
    font-size: 1.2em;
  }
}
</style>