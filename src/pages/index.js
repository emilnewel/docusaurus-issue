import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
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
          <h1 className="hero__title">Fonts don't load</h1>
          <p className="hero__subtitle">😢</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
                styles.heroButton
              )}
              to={useBaseUrl("docs/")}
            >
              Go to Docs
            </Link>
          </div>
        </div>
      </header>
      
      s
    </Layout>
  );
}

export default Home;
