import type { NextPage } from 'next';
import Head from 'next/head';
import { DefaultLayout } from '~components/layouts/default';
import { MessageFormContainer } from '~containers/message-form-container';
import { MessageListContainer } from '~containers/message-list-container';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>AG Assessment</title>
        <meta name="description" content="SEO Meta stuff" />
      </Head>
      <DefaultLayout>
        <MessageFormContainer />
        <MessageListContainer className="margin-top-5" />
      </DefaultLayout>
    </>
  );
};

export default Home;
