import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm Sarah</p>
        <p>
        Just your average nerd, with kaleidoscope interests and an infinity for making things. You can find me tasting my own questionable fermentation projects, watching some cheesy 70's sci-fi movie, doing handicrafts or plant-spotting. Crawling out of a tent, starting a campfire on a cold morning while drinking a cup of coffee is one of my favorite things.
        </p>
      </section>
    </Layout>
  );
}