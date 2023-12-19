import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
// import GoogleTagManager from './GoogleTagManager/GoogleTagManager'
// import ReactGA from 'react-ga';

import './services/i18n';

import Header from './components/Header/Header';
import PreFooter from './components/PreFooter/PreFooter';
import Footer from './components/Footer/Footer';
import StaticPage from './views/StaticPage/StaticPage';
import WebSpeedPage from './views/WebSpeedPage/WebSpeedPage';

import './styles/styles.scss';

function App(props) {
  return (
    <CloudinaryContext
      cloudName={import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME}
      cname={import.meta.env.VITE_APP_CLOUDINARY_CNAME}
    >
      {/* {import.meta.env.VITE_APP_GTM &&
        <GoogleTagManager gtmId={import.meta.env.VITE_APP_GTM} />
      } */}
      <div className="webspeedtest page-container">
        <Header />

        <Switch>
          <Route exact path={['/results/:testId', '/']}>
            <WebSpeedPage />
          </Route>
          <Route
            path="/:page"
            render={(props) => <StaticPage page={props.match.params.page} />}
          />
        </Switch>

        <PreFooter />
        <Footer />
      </div>
    </CloudinaryContext>
  );
}

export default React.memo(App);
