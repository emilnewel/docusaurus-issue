import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.scss";

const features = [
  {
    links: [
      { title: "Íbúðir og íbúðarhús", url: "#" },
      { title: "Byggingarstjórar", url: "#" },
      { title: "Samkomuhús", url: "#" },
      { title: "Burðarvirki", url: "#" },
    ],
  },
  {
    links: [
      { title: "Burðarþol", url: "#" },
      { title: "Handrið og handlistar", url: "#" },
      { title: "Skilti", url: "#" },
      { title: "Hönnun brunarvarna", url: "#" },
    ],
  },
  {
    links: [
      { title: "Burðarþol", url: "#" },
      { title: "Handrið og handlistar", url: "#" },
      { title: "Skilti", url: "#" },
      { title: "Hönnun brunarvarna", url: "#" },
    ],
  },
];

function Links({ links }) {
  return (
    <div className={clsx("col col--4", styles.links)}>
      {links.map((link, index) => (
        <div>
          <a key={`link-${index}`} href={link.url}>
            {link.title}
          </a>
        </div>
      ))}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Allt sem þú þarft að vita varðandi Byggingarreglugerð"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
                styles.heroButton
              )}
              to={useBaseUrl("docs/")}
            >
              Skoða nánar
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Links key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
