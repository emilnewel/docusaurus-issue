module.exports = {
  title: "Reproducible demo",
  tagline: "Some tagline",
  url: "https://example.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "emilnewel", // Usually your GitHub org/user name.
  projectName: "Issue", // Usually your repo name.
  plugins: ["my-loaders"],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    collapsible: true,
    collapsed: true,
    hideableSidebar: true,
    navbar: {
      title: "Reproducible demo",
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "HMS",
          items: [
            {
              label: "Borgartúni 21, 105 Rvk",
              to: "/#",
            },
            {
              label: "Ártorgi 1, 550 Sauðárkróki",
              to: "/#",
            },
            {
              label: "kt. 581219-1480",
              to: "/#",
            },
          ],
        },
        {
          title: "Þjónustuver HMS",
          items: [
            {
              label: "Afgreiðslutími:",
              href: "/#",
            },
            {
              label: "mán-fim 09:00 - 16:00",
              href: "/#",
            },
            {
              label: "föstudaga 09:15 - 16:00",
              href: "/#",
            },
          ],
        },
        {
          title: "Flýtileiðir",
          items: [
            {
              label: "Húsnæðis- og mannvirkjastofnun",
              to: "blog",
            },
            {
              label: "Brunavarnir",
              href: "/#",
            },
            {
              label: "Byggingar",
              href: "/#",
            },
            {
              label: "Rafmagnsöryggi",
              href: "/#",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};
