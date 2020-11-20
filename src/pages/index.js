import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.scss";

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
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        incidunt porro, deleniti laudantium accusantium, eum corrupti dolorum
        repellat officiis eveniet soluta illo aspernatur reiciendis, dignissimos
        numquam dolor alias blanditiis velit.
      </p>
    </Layout>
  );
}

export default Home;
