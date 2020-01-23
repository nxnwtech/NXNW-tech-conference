<template>
  <div class="papers-card card-rounded shadow--large">
    <div>
      <!-- tack title -->
      <div class="papers-card__track-wrapper">
        <div
          class="papers-card__track-heading bg-color--primary text-center font-bold"
        >{{track.name}}</div>
      </div>
      <!-- track image -->
      <div class="papers-card__image-wrapper">
        <g-image class="papers-card__track-image" :src="track.trackImage" :alt="track.name" />
      </div>
      <!-- track call to cards  -->
      <div class="papers-card__content">
        <ul class="papers-card__list text-center">
          <li
            class="papers-card__track-item font-bold"
            v-for="item in track.Item"
            :key="item.id"
          >{{item.topic}}</li>
        </ul>
      </div>
    </div>

    <div class="papers-card__btn-wrapper">
      <button class="btn btn--primary">Submit Talk</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["track"]
};
</script>

<style lang="scss">
.papers-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;
  margin-top: 2.5rem;

  .papers-card__track-wrapper {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2.5rem;
    .papers-card__track-heading {
      width: 200px;
      color: #fff;
      padding: 15px;
      border-radius: 5px;
      margin-top: -50px;
    }
  }

  .papers-card__image-wrapper {
    display: flex;
    justify-content: space-around;
    .papers-card__track-image {
      width: 200px;
      height: 1%; // for iphone white space fix
    }
  }
.papers-card__content {
  display: flex;
  justify-content: space-around;
}

.papers-card__list {
  font-size: 1.2em;
  .papers-card__track-item {
    padding: 0.25rem;
    margin-bottom: 0.5rem;
  }
}

  .papers-card__btn-wrapper {
    display: flex;
    justify-content: space-around;
  }
}

</style>