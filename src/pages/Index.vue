<template>
  <div>
    <div>
      <Navbar :isNavOpen="isNavOpen" />
      <section id="landing-section" class="landing bg-color--primary">
        <div class="landing__hamburger">
          <g-image
            src="/assets/hamburger-light.svg"
            alt="navigation menu icon"
            v-on:click="toggleNav"
          />
        </div>
        <transition appear name="fade">
          <g-image class="landing__logo" src="/assets/logo.png" alt="nxnw heading logo" />
        </transition>
        <!-- <button class="btn btn--primary">Get Tickets</button> -->
      </section>
      <Layout>
        <quickInfoBar />
        <!-- ABOUT -->
        <section id="about-section" class="about">
          <div v-for="edge in $page.about.edges" :key="edge.node.id">
            <div class="text-left">
              <h1 class="section-heading font-bold">{{ edge.node.title}}</h1>
            </div>
            <div class="text-left">
              <VueShowdown
                :markdown="edge.node.content"
                flavor="github"
                :options="{ emoji: false }"
              />
            </div>
          </div>
        </section>
        <div class="split-logo">
          <g-image src="/assets/x-shapes.svg" alt="navigation menu icon" />
        </div>
        <!-- CALLFORPROPOSALSINTRO -->
        <section id="call-for-proposals-intro-section" class="callForProposalsIntro">
          <div v-for="edge in $page.callForProposalsIntro.edges" :key="edge.node.id">
            <div class="text-left">
              <h1 class="section-heading font-bold">{{ edge.node.title}}</h1>
            </div>
            <div class="text-left">
              <VueShowdown
                :markdown="edge.node.content"
                flavor="github"
                :options="{ emoji: false }"
              />
            </div>
          </div>
        </section>
        <!-- CALL TO PAPERS -->
        <section id="call-to-papers-section" class="papers" v-if="showPapers">
          <!-- <div class="text-center">
            <h1 class="section-heading text-center font-bold">CALL TO PAPERS</h1>
          </div>-->
          <div class="papers__grid">
            <CallToPapersListItem
              v-for="edge in $page.callToPapers.edges"
              :key="edge.node.id"
              :track="edge.node"
            />
          </div>
          <div class="papers-card__btn-wrapper">
            <button class="btn">Submit Talk</button>
          </div>
        </section>
        <div class="split-logo">
          <g-image src="/assets/x-shapes-2.svg" alt="navigation menu icon" />
        </div>

        <!-- SPEAKERS -->
        <section id="speakers-section" class="speakers" v-if="showSpeakers">
          <div class="text-center">
            <h1 class="section-heading text-center font-bold">SPEAKERS</h1>
          </div>
          <div class="speakers__grid">
            <Card v-for="edge in $page.speakers.edges" :key="edge.node.id" :speaker="edge.node" />
          </div>
        </section>

        <!-- Schedule-->
        <section id="schedule-section" class="schedule" v-if="showSchedule">
          <div class="text-center">
            <h1 class="section-heading text-center font-bold">SCHEDULE</h1>
          </div>
          <div class="schedule__grid">
            <Schedule
              v-for="edge in $page.schedule.edges"
              :key="edge.node.id"
              :schedule="edge.node"
            />
          </div>
        </section>
        <!-- Code of Conduct-->
        <section id="conduct-section" class="conduct">
          <div v-for="edge in $page.codeOfConduct.edges" :key="edge.node.id">
            <div class="text-left">
              <h1 class="section-heading font-bold">{{ edge.node.title}}</h1>
            </div>
            <div class="text-left">
              <VueShowdown :markdown="edge.node.intro" flavor="github" :options="{ emoji: false }" />
            </div>
            <div class="text-left">
              <h2 class="sub-section-heading font-bold">{{ edge.node.quickTitle}}</h2>
            </div>
            <div class="text-left">
              <VueShowdown
                :markdown="edge.node.quickVersion"
                flavor="github"
                :options="{ emoji: false }"
              />
            </div>
            <div class="text-left">
              <h2 class="sub-section-heading font-bold">{{ edge.node.longTitle}}</h2>
            </div>
            <div class="text-left">
              <VueShowdown
                :markdown="edge.node.longVersion"
                flavor="github"
                :options="{ emoji: false }"
              />
            </div>
            <div class="credits">
              <VueShowdown
                :markdown="edge.node.credits"
                flavor="github"
                :options="{ emoji: false }"
              />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  </div>
</template>

<page-query>
  query callToPapers {
    callForProposalsIntro: allCallForProposalsIntro {
      edges {
        node {
          id,
          title,
          content
        }
      }
    }
    callToPapers: allCallToPapers {
      edges {
        node {
          id
          name
          description
          trackImage
          Item {
            topic
          }
        }
      }
    }

    speakers: allSpeakers {
      edges {
        node {
          id,
          name,
          subject,
          job,
          profileImage,
          github,
          twitter,
          linkedin
        }
      }
    }

    schedule: allSchedule {
      edges {
        node {
          id
          name
          Item {
            talk,
            time,
            duration,
            venue
          }
        }
      }
    }
    siteConfig: allSiteConfig {
      edges {
        node {
          id
          papers,
          speakers,
          schedule
        }
      }
    }
    about: allAbout {
      edges {
        node {
          id,
          title,
          content
        }
      }
    }
    codeOfConduct: allCodeOfConduct {
      edges {
        node {
          id,
          title,
          intro,
          quickTitle,
          quickVersion,
          longTitle,
          longVersion,
          credits
        }
      }
    }
  }
      
</page-query>

<script>
import Card from "~/components/Card.vue";
import CallToPapersListItem from "~/components/CallToPapersListItem.vue";
import Schedule from "~/components/Schedule.vue";
import quickInfoBar from "~/components/quickInfoBar.vue";
import Navbar from "~/components/Navbar.vue";

export default {
  metaInfo: {
    title: "North by North West Tech Conference 2020",
    meta: [
      {
        name: "description",
        content:
          "Find information about the North by North West Tech Conference, including call to papers, speakers, schedule, and sponsors"
      }
    ]
  },
  components: {
    Card,
    CallToPapersListItem,
    Schedule,
    quickInfoBar,
    Navbar
  },
  data() {
    return {
      showPapers: true,
      showSpeakers: true,
      showSchedule: true,
      isNavOpen: false
    };
  },
  created() {
    if (this.$page) {
      this.$page.siteConfig.edges.forEach(data => {
        this.showPapers = data.node.papers;
        this.showSpeakers = data.node.speakers;
        this.showSchedule = data.node.schedule;
      });
    }
  },

  methods: {
    toggleNav: function(event) {
      console.log(123);
      console.log(this.isNavOpen);
      this.isNavOpen = !this.isNavOpen;
      console.log(this.isNavOpen);
    }
  }
};
</script>

<style lang="scss">
body {
  font-family: "IBM Plex Sans", sans-serif;
}
// landing
.landing {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
    height: 50vh;
  }

  .landing__hamburger {
    width: 100%;
    background: #0e153a;
    z-index: 2000;
    position: fixed;
    top: 0;
    left: -5px;
    img {
      width: 70px;
    }
  }

  .landing__logo {
    width: 70%;
    max-width: 350px;
  }
}

// call to papers
.papers {
  margin-bottom: 3em;
  margin-top: 3em;
  .papers__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
  }
  .papers-card__btn-wrapper {
    display: flex;
    justify-content: space-around;
    button {
      background-color: #0e153a;
    }
  }
  @media screen and (max-width: 768px) {
    .papers__grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

// speakers
.speakers {
  margin-bottom: 3em;
  .speakers__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
  }
  @media screen and (max-width: 1024px) {
    .speakers__grid {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 640px) {
      .speakers__grid {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}

.schedule {
  margin-top: 3em;
  margin-bottom: 3em;
}

.callForProposalsIntro {
  margin-top: 3em;
  margin-bottom: 3em;
  max-width: 800px;
  margin: auto;
  font-size: 1.2em;
}

// about
.about {
  margin-top: 3em;
  margin-bottom: 3em;
  max-width: 800px;
  margin: auto;
  font-size: 1.2em;
}

.conduct {
  margin-top: 3em;
  margin-bottom: 3em;
  max-width: 800px;
  margin: auto;
  font-size: 1.2em;
}

.split-logo {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  img {
    width: 20%;
    min-width: 100px;
    max-width: 300px;
  }
}
</style>
