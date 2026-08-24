import React from 'react';
import { useParams } from 'react-router-dom';
import * as Pages from 'views';

const StaticPage = () => {
  const { page } = useParams();
  if (Pages[page]) {
    const Page = Pages[page];
    return <Page />;
  }
  return <Pages.NotFound />;
};

export default StaticPage;
