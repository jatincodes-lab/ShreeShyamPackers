import React from 'react';

export default function QuoteForm({ compact = false }) {
  return <form className={`quote-card ${compact ? 'hero__form' : 'quote-page__form'}`} id="quote-form" noValidate>
    <h2>{compact ? 'Tell us about your move' : 'Move enquiry'}</h2>
    <p className="sub">Share the move type, route and mobile number. Add a date and inventory if available.</p>
    <div className="form-success" aria-live="polite" hidden>
      <span aria-hidden="true">✓</span>
      <span>Your request was sent. The team will contact you using the details provided.</span>
    </div>
    <div className="form-error" role="alert" hidden />
    <div className="field">
      <label htmlFor="q-type">Move type</label>
      <select className="control" id="q-type" name="moveType" required defaultValue="">
        <option value="" disabled>Select move type</option>
        <option>Home shifting</option>
        <option>Office shifting</option>
        <option>Local shifting</option>
        <option>Intercity shifting</option>
        <option>Car or bike transport</option>
        <option>Storage</option>
      </select>
      <span className="err-msg">Choose a move type</span>
    </div>
    <div className="quote-grid">
      <div className="field">
        <label htmlFor="q-from-locality">Moving from: locality / city</label>
        <input className="control" id="q-from-locality" name="fromLocality" type="text" placeholder="Moving from (city / locality)" autoComplete="address-level2" required />
        <span className="err-msg">Enter your pickup locality and city</span>
      </div>
      <div className="field">
        <label htmlFor="q-from-pin">Pickup PIN code</label>
        <input className="control" id="q-from-pin" name="fromPin" type="text" inputMode="numeric" pattern="[1-9][0-9]{5}" maxLength="6" placeholder="Pickup PIN" autoComplete="postal-code" required />
        <span className="err-msg">Enter a valid 6-digit PIN code</span>
      </div>
      <div className="field">
        <label htmlFor="q-to-locality">Moving to: locality / city</label>
        <input className="control" id="q-to-locality" name="toLocality" type="text" placeholder="Moving to (city / locality)" required />
        <span className="err-msg">Enter your destination locality and city</span>
      </div>
      <div className="field">
        <label htmlFor="q-to-pin">Destination PIN code</label>
        <input className="control" id="q-to-pin" name="toPin" type="text" inputMode="numeric" pattern="[1-9][0-9]{5}" maxLength="6" placeholder="Destination PIN" required />
        <span className="err-msg">Enter a valid 6-digit PIN code</span>
      </div>
      <div className="field col-2">
        <label htmlFor="q-phone">10-digit Indian mobile number</label>
        <input className="control" id="q-phone" name="phone" type="tel" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength="10" placeholder="10-digit mobile number" autoComplete="tel-national" required />
        <span className="err-msg">Enter a valid 10-digit mobile number</span>
      </div>
    </div>
    <details className="quote-more" open={!compact}>
      <summary>Add move date, home size and name <span>(optional)</span></summary>
      <div className="quote-grid quote-more__fields">
        <div className="field">
          <label htmlFor="q-date">Preferred date</label>
          <input className="control" id="q-date" name="date" type="date" />
        </div>
        <div className="field">
          <label htmlFor="q-size">Home size / approximate inventory</label>
          <input className="control" id="q-size" name="inventory" type="text" placeholder="e.g. 2 BHK, 20 boxes, 1 bike" />
        </div>
        <div className="field col-2">
          <label htmlFor="q-name">Name</label>
          <input className="control" id="q-name" name="name" type="text" autoComplete="name" />
        </div>
      </div>
    </details>
    <div className="field quote-consent">
      <label htmlFor="q-consent"><input id="q-consent" name="contactConsent" type="checkbox" required aria-describedby="q-consent-error" /> I agree to be contacted about this enquiry. <a href="/privacy">Read the draft privacy policy</a>.</label>
      <span className="err-msg" id="q-consent-error">Consent is required to submit this enquiry.</span>
    </div>
    <button className="btn btn-primary btn-block" type="submit">Request a quote</button>
    <p className="form-note">This form is not connected yet; it will not send your details until an API is configured.</p>
  </form>;
}
