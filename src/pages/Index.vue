<template>
  <div>
    <div>
        <Navbar/>
      <section id="landing-section" class="landing bg-color--primary">
        <div class="landing__hamburger">
          <g-image src="/assets/hamburger-light.svg" alt="navigation menu icon" />
        </div>
        <transition appear name="fade">
        <g-image
          class="landing__logo"
          src="/assets/heading-light.svg"
          alt="nxnw heading logo"
        />
        </transition>
        <button class="btn btn--primary">Get Tickets</button>
      </section>
      <Layout>
        <quickInfoBar/>
        <!-- ABOUT -->
        <section id="about-section" class="about">
          <div v-for="edge in $page.about.edges" :key="edge.node.id">
            <h1 class="section-heading text-center font-bold">{{ edge.node.title}}</h1>
            <div class="text-left">
              <VueShowdown
                :markdown="edge.node.content"
                flavor="github"
                :options="{ emoji: false }"
              />
            </div>
          </div>
        </section>
        <!-- CALLFORPROPOSALSINTRO -->
        <section id="callforproposalsintro-section" class="callForProposalsIntro">
          <div v-for="edge in $page.callForProposalsIntro.edges" :key="edge.node.id">
            <div class="text-center">
              <h1 class="section-heading text-center font-bold">{{ edge.node.title}}</h1>
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
          <div class="text-center">
            <h1 class="section-heading text-center font-bold">CALL TO PAPERS</h1>
          </div>
          <div class="papers__grid">
            <CallToPapersListItem
              v-for="edge in $page.callToPapers.edges"
              :key="edge.node.id"
              :track="edge.node"
            />
          </div>
        </section>

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

        <section id="conduct-section" class="conduct">
          <div v-for="edge in $page.codeOfConduct.edges" :key="edge.node.id">
            <div class="text-center">
              <h1 class="section-heading text-center font-bold">{{ edge.node.title}}</h1>
              <VueShowdown
                :markdown="edge.node.content"
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
          content
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
  }
};
</script>

<style lang="scss">
// landing
.landing {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
    height: 50vh;
  }

  .landing__hamburger {
    position: absolute;
    top: 20px;
    left: -5px;
    img {
      width: 70px;
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .landing__logo {
    width: 50%;
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

.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}
</style>
