import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! I'm a full-stack developer, who has experience with Laravel and
          React.js. I also love Software Engineering stuff, like DevOps and
          project manegement. Coffee lover {" <3"}{" "}
        </p>
      </section>
    </Layout>
  );
}
