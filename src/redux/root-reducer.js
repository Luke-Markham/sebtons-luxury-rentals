import { combineReducers } from "redux";
import navReducer from "./nav/nav.reducer";
import featuredPropertiesReducer from "./featuredProperties/featuredProperties.reducer";
import allPropertiesReducer from "./allProperties/allProperties.reducer";
import propertyReducer from "./property/property.reducer";
import searchReducer from "./search/search.reducer";
import lightboxReducer from "./lightbox/lightbox.reducer";
import contactFormReducer from "./contactForm/contact-form.reducer";
export default combineReducers({
  nav: navReducer,
  featuredProperties: featuredPropertiesReducer,
  allProperties: allPropertiesReducer,
  property: propertyReducer,
  search: searchReducer,
  lightbox: lightboxReducer,
  contactForm: contactFormReducer
});
