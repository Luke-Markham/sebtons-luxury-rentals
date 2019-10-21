import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Fade from "react-reveal";
import Header from "./sections/header/header.component";
import MobileNav from "./components/mobile-nav/mobile-nav.component";
import HomePage from "./pages/home-page/home-page.component";
import SearchResultsPage from "./pages/search-results-page/search-results-page.component";
import AllPropertiesPage from "./pages/all-properties-page/all-properties-page.component";
import PropertyPage from "./pages/property-page/property-page.component";
import RentalPolicyPage from "./pages/rental-policy-page/rental-policy-page.component";
import ServicesPage from "./pages/services-page/services-page.component";
import AboutUsPage from "./pages/about-us-page/about-us-page.component";
import Footer from "./sections/footer/footer.component";
import ContactPage from "./pages/contact-page/contact-page.component";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="body-wrapper">
        <MobileNav />
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
          <Route exact path="/properties">
            <Fade>
              <AllPropertiesPage />
            </Fade>
          </Route>
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
      </div>
      <Footer />
    </div>
  );
};

export default App;
