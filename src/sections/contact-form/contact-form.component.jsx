import React, { useState } from "react";
import "./contact-form.styles.scss";
import { firestore } from "../../firebase/firebase.utils";
import CheckboxInput from "../../components/checkbox-input/checkbox-input.component";
import GeneralFormInput from "../../components/general-form-input/general-form-input.component";
import Btn from "../../components/button/button.component";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    first_name: "",
    surname: "",
    phone: " ",
    email: "",
    chauffeur: false,
    childcare_nannies: false,
    chef: false,
    catering: false,
    spa_massage: false,
    boat_rental: false,
    charters: false,
    scuba_diving: false,
    fishing: false,
    requests: ""
  });

  const handleSubmit = e => {
    const date = new Date().toString();
    e.preventDefault();
    firestore
      .collection("messages")
      .doc(`${formState.first_name + " " + formState.surname + " " + date}`)
      .set({ ...formState })
      .then(
        alert(
          "We've received your message and will be in contact. Kind regards, Sebtons"
        )
      )
      .catch(function(error) {
        alert("Sorry there was a problem, please try again. ");
        console.log(error);
      });

    setFormState({
      first_name: "",
      surname: "",
      phone: " ",
      email: "",
      chauffeur: false,
      childcare_nannies: false,
      chef: false,
      catering: false,
      spa_massage: false,
      boat_rental: false,
      charters: false,
      scuba_diving: false,
      fishing: false,
      requests: ""
    });
  };

  const handleFields = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <form className="contact-form-container" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Your Details</legend>
        <GeneralFormInput
          type="text"
          name="first_name"
          id="first_name"
          labelFor="first_name"
          required={true}
          text="First Name:"
          value={formState.first_name}
          onChange={handleFields}
        />
        <GeneralFormInput
          type="text"
          name="surname"
          id="surname"
          labelFor="surname"
          required={true}
          text="Surname:"
          value={formState.surname}
          onChange={handleFields}
        />
        <GeneralFormInput
          type="phone"
          name="phone"
          id="phone"
          labelFor="phone"
          required={true}
          text="Phone:"
          value={formState.phone}
          onChange={handleFields}
        />
        <GeneralFormInput
          type="email"
          name="email"
          id="email"
          labelFor="email"
          required={true}
          text="Email:"
          value={formState.email}
          onChange={handleFields}
        />
      </fieldset>
      <fieldset>
        <legend>Optional Services</legend>
        <CheckboxInput
          name="chauffeur"
          id="chauffeur"
          labelFor="chauffeur"
          text="Chauffeur"
          onChange={handleFields}
          checked={formState.chauffeur}
        />
        <CheckboxInput
          name="childcare_nannies"
          id="childcare_nannies"
          labelFor="childcare_nannies"
          text="Childcare/Nannies"
          onChange={handleFields}
          checked={formState.childcare_nannies}
        />
        <CheckboxInput
          name="chef"
          id="chef"
          labelFor="chef"
          text="In House Chef"
          onChange={handleFields}
          checked={formState.chef}
        />
        <CheckboxInput
          name="catering"
          id="catering"
          labelFor="catering"
          text="Catering"
          onChange={handleFields}
          checked={formState.catering}
        />
        <CheckboxInput
          name="spa_massage"
          id="spa_massage"
          labelFor="spa_massage"
          text="Spa & Massage"
          onChange={handleFields}
          checked={formState.spa_massage}
        />
        <CheckboxInput
          name="boat_rental"
          id="boat_rental"
          labelFor="boat_rental"
          text="Boat Rental"
          onChange={handleFields}
          checked={formState.boat_rental}
        />
        <CheckboxInput
          name="charters"
          id="charters"
          labelFor="charters"
          text="Charter"
          onChange={handleFields}
          checked={formState.charters}
        />
        <CheckboxInput
          name="scuba_diving"
          id="scuba_diving"
          labelFor="scuba_diving"
          text="Scuba Diving"
          onChange={handleFields}
          checked={formState.scuba_diving}
        />
        <CheckboxInput
          name="fishing"
          id="fishing"
          labelFor="fishing"
          text="Fishing"
          onChange={handleFields}
          checked={formState.fishing}
        />
      </fieldset>
      <fieldset>
        <legend>Requests</legend>
        <textarea
          name="requests"
          id="requests"
          rows="10"
          value={formState.requests}
          onChange={handleFields}
          placeholder="Please state which property your interested in by name and mention any service you'd like to book or know more about..."
        ></textarea>
      </fieldset>
      <Btn typeOfBtn="submit" text="Send" />
    </form>
  );
};

export default ContactForm;
