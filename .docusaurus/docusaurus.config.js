export default {
  "title": "Reproducible demo",
  "tagline": "Some tagline",
  "url": "https://example.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "emilnewel",
  "projectName": "Issue",
  "plugins": [
    "docusaurus-plugin-sass"
  ],
  "themeConfig": {
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "collapsible": true,
    "collapsed": true,
    "hideableSidebar": true,
    "navbar": {
      "title": "Reproducible demo",
      "items": [
        {
          "to": "docs",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "HMS",
          "items": [
            {
              "label": "Borgartúni 21, 105 Rvk",
              "to": "/#"
            },
            {
              "label": "Ártorgi 1, 550 Sauðárkróki",
              "to": "/#"
            },
            {
              "label": "kt. 581219-1480",
              "to": "/#"
            }
          ]
        },
        {
          "title": "Þjónustuver HMS",
          "items": [
            {
              "label": "Afgreiðslutími:",
              "href": "/#"
            },
            {
              "label": "mán-fim 09:00 - 16:00",
              "href": "/#"
            },
            {
              "label": "föstudaga 09:15 - 16:00",
              "href": "/#"
            }
          ]
        },
        {
          "title": "Flýtileiðir",
          "items": [
            {
              "label": "Húsnæðis- og mannvirkjastofnun",
              "to": "blog"
            },
            {
              "label": "Brunavarnir",
              "href": "/#"
            },
            {
              "label": "Byggingar",
              "href": "/#"
            },
            {
              "label": "Rafmagnsöryggi",
              "href": "/#"
            }
          ]
        }
      ]
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/brutzki/Documents/GitHub/docusaurus-issue/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/brutzki/Documents/GitHub/docusaurus-issue/src/css/custom.scss"
        }
      }
    ]
  ],
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};