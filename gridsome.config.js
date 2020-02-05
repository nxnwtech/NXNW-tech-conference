// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const tailwind = require('tailwindcss')

// const postcssPlugins = [
//   tailwind(),
// ]


module.exports = {
  siteName: 'NXNW',
  icon: './static/assets/favicon.png',
  plugins: [
    // Speakers 
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Speakers',
        baseDir: './content/speakers',
      }
    },
     // CallForProposalsIntro
     {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'callForProposalsIntro',
        baseDir: './content/callForProposalsIntro',
      }
    },
    // Call To Pages 
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'callToPapers',
        baseDir: './content/callToPapers',
      }
    },
    // Sschdule
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'schedule',
        baseDir: './content/schedule',
      }
    },
    // Site Config
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'siteConfig',
        baseDir: './content/site-config',
      }
    },
    // About
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'about',
        baseDir: './content/about',
      }
    },
    // Code of Conduct
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'codeOfConduct',
        baseDir: './content/codeOfConduct',
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-157593979-1'
      }
    }
  ],
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: postcssPlugins,
  //     },
  //   },
  // },
}
