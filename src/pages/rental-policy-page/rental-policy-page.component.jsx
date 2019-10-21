import React from "react";
import "./rental-policy-page.styles.scss";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
const RentalPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade>
      <section className="rental-policy-page-container">
        <Fade left>
          <h2 className="rental-policy-page-title">Rental Policy</h2>
        </Fade>
        <div className="rental-policies-container">
          <p className="policy-text-container">
            <strong className="policy-name">RATES</strong>
            <br />
            Rates are seasonal and subject to change based upon availability.
            All rates in Miami Beach are exclusive of a 13% Resort Tax.
          </p>

          <p className="policy-text-container">
            <strong className="policy-name">MINIMUM STAY</strong>
            <br />
            The minimum length of stay depends on the property. Usually there is
            a 3 night minimum stay. However, SobeVillas may arrange exceptions
            for special events or weddings.
          </p>

          <p className="policy-text-container">
            <strong className="policy-name">PAYMENT OPTIONS</strong>
            <br />
            All payments are made in US Dollars. Payments must be made via wire
            transfer, direct deposit, money order, or personal check. We accept
            all major credit cards. Refundable security deposit must be made via
            wire transfer, or direct deposit.
          </p>

          <p className="policy-text-container">
            <strong className="policy-name">PAYMENT SCHEDULE</strong>
            <br />
            Full payment must be made upon execution of contract. Refundable
            security deposit may be made 30 days prior to expected arrival.
          </p>

          <p className="policy-text-container">
            <strong className="policy-name">CANCELATION POLICY</strong>
            <br />
            Once contract has been signed and funds have been transferred all
            sales will be final. No refunds unless an “Act of God.’’ For an
            event outside of human control, such as a natural disaster.
          </p>

          <p className="policy-text-container">
            <strong className="policy-name">CHECK IN/OUT</strong>
            <br />
            Normal check in is at 3pm. Normal check out is at 11am. Exceptions
            may be applied at an extra fee.
          </p>

          <p className="policy-text-container">
            <strong className="policy-name">PET POLICY</strong>
            <br />
            Pet are not welcome in most villas. Some villas may accept them, but
            an extra deposit may be required.
          </p>

          <p className="policy-text-container">
            <strong className="policy-name">OCCUPANCY POLICY</strong>
            <br />
            Each Villa has a maximum occupancy listed in the contract.
            Unauthorized guests or failing to comply with the occupancy policy
            may result in the loss of the entire security deposit or eviction.
          </p>
        </div>
      </section>
    </Fade>
  );
};

export default RentalPolicyPage;
