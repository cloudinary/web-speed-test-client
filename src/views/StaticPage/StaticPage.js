import React from 'react';
import * as Pages from 'views';

const StaticPage = (props) => {
  const page = props.page;
  if (Pages[page]) {
    const Page = Pages[page];
    return <Page />;
  }
  return <Pages.NotFound />;
};

export default StaticPage;
