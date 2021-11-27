import React from 'react';
import { GetServerSideProps } from 'next';
import strapiClient from '@services/strapi.client';

import HomeContainer from '@containers/home';
import { HomeProps } from '@views/home/home.type';

const Home = (props: HomeProps): React.ReactElement => (
  <HomeContainer {...props} />
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, locale } = strapiClient.getLocalizedParams(
    context.resolvedUrl,
    context.locale || context.defaultLocale
  );

  try {
    return await strapiClient.getData(slug, locale);
  } catch (error) {
    return { props: {} };
  }
};

export default Home;
