import React, { useState } from "react";
import { connect } from "react-redux";
import Btn from "../button/button.component";
import "./property-search-form.styles.scss";
import { storeSearchValues } from "../../redux/search/search.actions";

const PropertySearchForm = ({ routeObject, storeSearchValues }) => {
  const [formState, setFormState] = useState({
    bedrooms: "",
    bathrooms: "",
    location: ""
  });

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.id;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    storeSearchValues(formState);
    routeObject.history.push("/searchresults");
  };

  return (
    <form className="property-search-form-container" onSubmit={handleSubmit}>
      <legend className="property-search-title">
        Luxury Accommodation In St Lucia
      </legend>
      <br />
      <select
        id="location"
        className="location-select dropdown"
        onChange={handleChange}
        required
      >
        <option value="">location...</option>
        <option value="Vieu Fort">Vieu Fort</option>
        <option value="Laborie">Laborie</option>
        <option value="Choiseul">Choiseul</option>
        <option value="Soufriere">Soufriere</option>
        <option value="Anse La Raye">Anse La Raye</option>
        <option value="Castries">Castries</option>
        <option value="Gros Islet">Gros Islet</option>
        <option value="Dauphin">Dauphin</option>
        <option value="Dennery">Dennery</option>
        <option value="Micoud">Micoud</option>
      </select>
      <br />

      <br />
      <select
        id="bedrooms"
        className="bedrooms-select dropdown"
        onChange={handleChange}
        required
      >
        <option value="">Bedrooms...</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
        <option value="5">5+</option>
        <option value="6">6+</option>
      </select>
      <br />

      <br />
      <select
        id="bathrooms"
        className="bathrooms-select dropdown"
        onChange={handleChange}
        required
      >
        <option value="">Bathrooms...</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
        <option value="5">5+</option>
        <option value="6">6+</option>
      </select>
      <br />
      <Btn typeOfBtn="submit" text="Search" />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  storeSearchValues: formState => dispatch(storeSearchValues(formState))
});
export default connect(
  null,
  mapDispatchToProps
)(PropertySearchForm);
