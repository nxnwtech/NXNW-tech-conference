<template>
  <div class="speakers-card card-rounded shadow--large">
    <div class="speakers-card__body">
      <g-image
        class="speakers-card__image mx-auto"
        :src="speaker.profileImage"
        alt="speaker profile picture"
      />
      <div class="text-center">
        <div class="speakers-card__name font-semibold">{{speaker.name}}</div>
        <div class="speakers-card__job color--secondary font-semibold">{{speaker.job}}</div>
        <h1 class="speakers-card__subject font-bold">{{speaker.subject}}</h1>
      </div>
    </div>
    <div class="speakers-card__footer">
      <div class="speakers-card__social flex">
        <g-link :to="speaker.github" aria-label="Link to github page">
          <font-awesome :icon="['fab', 'github-square']" class="social__icon" />
        </g-link>
        <g-link :to="speaker.linkedin" aria-label="Link to linkedin page">
          <font-awesome :icon="['fab', 'linkedin']" class="social__icon" />
        </g-link>
        <g-link :to="speaker.twitter" aria-label="Link to linkedin page">
          <font-awesome :icon="['fab', 'twitter-square']" class="social__icon" />
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["speaker"]
};
</script>

<style lang="scss">
.speakers-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;

  .speakers-card__image {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .speakers-card__subject {
    font-size: 1.125rem;
  }

  .speakers-card__footer {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .social__icon {
      font-size: 30px;
      color: #707070;
      margin-right: 0.5rem;
    }
  }
}
</style>