import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import {
  Breakpoint,
  BreakpointProvider,
  setDefaultBreakpoints
} from "react-socks";
import Fade from "react-reveal";
import Header from "./sections/header/header.component";
import MobileNav from "./sections/mobile-nav/mobile-nav.component";
import DesktopNav from "./sections/desktop-nav/desktop-nav.component";
import Footer from "./sections/footer/footer.component";

const SearchResultsPage = lazy(() =>
  import("./pages/search-results-page/search-results-page.component")
);
const AllPropertiesPage = lazy(() =>
  import("./pages/all-properties-page/all-properties-page.component")
);
const PropertyPage = lazy(() =>
  import("./pages/property-page/property-page.component")
);
const RentalPolicyPage = lazy(() =>
  import("./pages/rental-policy-page/rental-policy-page.component")
);
const ServicesPage = lazy(() =>
  import("./pages/services-page/services-page.component")
);
const AboutUsPage = lazy(() =>
  import("./pages/about-us-page/about-us-page.component")
);
const ContactPage = lazy(() =>
  import("./pages/contact-page/contact-page.component")
);
const HomePage = lazy(() => import("./pages/home-page/home-page.component"));

const App = () => {
  setDefaultBreakpoints([
    { xsmall: 0 }, // all mobile devices
    { small: 576 }, // bigger mobile devices
    { medium: 768 }, // ipad, ipad pro, ipad mini, etc
    { large: 992 }, // smaller laptops
    { xlarge: 1260 } // laptops and desktops
  ]);
  return (
    <BreakpointProvider>
      <div className="App">
        <Header />
        <div className="body-wrapper">
          <Breakpoint medium down>
            <MobileNav />
          </Breakpoint>
          <Breakpoint large up>
            <DesktopNav />
          </Breakpoint>
          <Suspense fallback={<div className="suspense-loading" />}>
            <Switch>
              <Redirect exact from="/" to="/home" />

              <Route
                exact
                path="/home"
                render={routeObject => (
                  <Fade>
                    <HomePage routeObject={routeObject} />
                  </Fade>
                )}
              />

              <Route
                exact
                path="/searchresults"
                render={routeObject => (
                  <Fade>
                    <SearchResultsPage routeObject={routeObject} />
                  </Fade>
                )}
              />
              <Route
                exact
                path="/properties"
                render={routeObject => (
                  <Fade>
                    <AllPropertiesPage routeObject={routeObject} />
                  </Fade>
                )}
              />

              <Route
                path="/properties/"
                render={routeObject => (
                  <Fade>
                    <PropertyPage routeObject={routeObject} />
                  </Fade>
                )}
              />
              <Route exact path="/services">
                <Fade>
                  <ServicesPage />
                </Fade>
              </Route>

              <Route exact path="/aboutus">
                <Fade>
                  <AboutUsPage />
                </Fade>
              </Route>

              <Route exact path="/contact">
                <Fade>
                  <ContactPage />
                </Fade>
              </Route>
              <Route exact path="/rentalpolicy">
                <Fade>
                  <RentalPolicyPage />
                </Fade>
              </Route>
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BreakpointProvider>
  );
};

export default App;
