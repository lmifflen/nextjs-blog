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
        <p>Hello I'm <bold>Luke</bold> A software developer from Calgary. You can contact me on <a href='https://www.linkedin.com/in/luke-mifflen/' target={'_blank'}>LinkedIn</a></p>
        <p>
          (This is a sample website - built following the NextJS tutorial{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}