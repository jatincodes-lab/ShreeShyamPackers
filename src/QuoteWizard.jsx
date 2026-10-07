import React, { useEffect, useRef, useState } from 'react';

const steps = ['Move and route', 'Move details', 'Contact', 'Review'];

export default function QuoteWizard() {
  const formRef = useRef(null);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({});

  useEffect(() => {
    if (step) formRef.current?.querySelector(`[data-step="${step}"] legend`)?.focus();
  }, [step]);

  function validateStep(index) {
    const panel = formRef.current.querySelector(`[data-step="${index}"]`);
    const required = [...panel.querySelectorAll('[required]')];
    const invalid = required.find(input => !input.checkValidity());
    panel.querySelectorAll('.field').forEach(field => field.classList.toggle('field-error', field.querySelector('[required]') && !field.querySelector('[required]').checkValidity()));
    if (invalid) {
      invalid.focus();
      return false;
    }
    return true;
  }

  function continueStep() {
    if (validateStep(step)) setStep(current => current + 1);
  }

  function updateValue(event) {
    const input = event.target;
    if (input.closest('.field')) input.closest('.field').classList.remove('field-error');
    setValues(current => ({ ...current, [input.name]: input.type === 'checkbox' ? input.checked : input.value }));
  }

  function resetWizard() {
    setStep(0);
    setValues({});
  }

  const value = (name, fallback = 'Not provided') => values[name] || fallback;

  return <form className="quote-card quote-page__form quote-wizard" id="quote-form" noValidate ref={formRef} onChange={updateValue} onReset={resetWizard} onKeyDown={event => {
    if (event.key === 'Enter' && event.target.tagName === 'INPUT' && step < 3) {
      event.preventDefault();
      continueStep();
    }
  }}>
    <div className="quote-wizard__status">
      <p className="eyebrow">Your move enquiry</p>
      <h2>Plan your move in a few steps</h2>
      <p>Required fields are marked with *. You can review your details before sending an enquiry.</p>
    </div>
    <p className="quote-wizard__notice" role="note">This form isn’t connected yet. Your details won’t be sent until the quote service is configured.</p>
    <div className="form-success" aria-live="polite" hidden>
      <span aria-hidden="true">✓</span>
      <span>Your enquiry was accepted. The team will contact you using the details provided.</span>
    </div>
    <div className="form-error" role="alert" hidden />

    <ol className="quote-wizard__progress" aria-label="Quote request steps">
      {steps.map((label, index) => <li key={label} className={index === step ? 'is-current' : index < step ? 'is-complete' : ''} aria-current={index === step ? 'step' : undefined}>
        {index < step ? <button type="button" onClick={() => setStep(index)}><b>{String(index + 1).padStart(2, '0')}</b>{label}</button> : <span><b>{String(index + 1).padStart(2, '0')}</b>{label}</span>}
      </li>)}
    </ol>

    <fieldset data-step="0" hidden={step !== 0}>
      <legend tabIndex="-1">Where are you moving?</legend>
      <p className="quote-wizard__hint">Share your move type and both ends of the route.</p>
      <div className="field">
        <label htmlFor="q-type">Move type *</label>
        <select className="control" id="q-type" name="moveType" required defaultValue="">
          <option value="" disabled>Select move type</option>
          <option>Home shifting</option><option>Office shifting</option><option>Local shifting</option><option>Intercity shifting</option><option>Car or bike transport</option><option>Storage</option>
        </select>
        <span className="err-msg">Choose a move type</span>
      </div>
      <div className="quote-grid">
        <div className="field">
          <label htmlFor="q-from-locality">Moving from: locality / city *</label>
          <input className="control" id="q-from-locality" name="fromLocality" type="text" placeholder="e.g. Andheri, Mumbai" autoComplete="address-level2" required />
          <span className="err-msg">Enter your pickup locality and city</span>
        </div>
        <div className="field">
          <label htmlFor="q-from-pin">Pickup PIN code *</label>
          <input className="control" id="q-from-pin" name="fromPin" type="text" inputMode="numeric" pattern="[1-9][0-9]{5}" maxLength="6" placeholder="6-digit PIN code" autoComplete="postal-code" required />
          <span className="err-msg">Enter a valid 6-digit PIN code</span>
        </div>
        <div className="field">
          <label htmlFor="q-to-locality">Moving to: locality / city *</label>
          <input className="control" id="q-to-locality" name="toLocality" type="text" placeholder="e.g. Indiranagar, Bengaluru" required />
          <span className="err-msg">Enter your destination locality and city</span>
        </div>
        <div className="field">
          <label htmlFor="q-to-pin">Destination PIN code *</label>
          <input className="control" id="q-to-pin" name="toPin" type="text" inputMode="numeric" pattern="[1-9][0-9]{5}" maxLength="6" placeholder="6-digit PIN code" required />
          <span className="err-msg">Enter a valid 6-digit PIN code</span>
        </div>
      </div>
    </fieldset>

    <fieldset data-step="1" hidden={step !== 1}>
      <legend tabIndex="-1">Tell us a little more</legend>
      <p className="quote-wizard__hint">These details are optional, but they can help prepare a more accurate estimate.</p>
      <div className="quote-grid">
        <div className="field">
          <label htmlFor="q-date">Preferred moving date <span>(optional)</span></label>
          <input className="control" id="q-date" name="date" type="date" />
        </div>
        <div className="field">
          <label htmlFor="q-size">Home size or approximate inventory <span>(optional)</span></label>
          <input className="control" id="q-size" name="inventory" type="text" placeholder="e.g. 2 BHK, 20 boxes, 1 bike" />
        </div>
      </div>
    </fieldset>

    <fieldset data-step="2" hidden={step !== 2}>
      <legend tabIndex="-1">How can the team reach you?</legend>
      <p className="quote-wizard__hint">Your mobile number is required for this enquiry.</p>
      <div className="quote-grid">
        <div className="field">
          <label htmlFor="q-name">Your name <span>(optional)</span></label>
          <input className="control" id="q-name" name="name" type="text" placeholder="Full name" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="q-phone">10-digit Indian mobile number *</label>
          <input className="control" id="q-phone" name="phone" type="tel" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength="10" placeholder="10-digit mobile number" autoComplete="tel-national" required />
          <span className="err-msg">Enter a valid 10-digit mobile number</span>
        </div>
        <div className="field col-2 quote-consent">
          <label htmlFor="q-consent"><input id="q-consent" name="contactConsent" type="checkbox" required aria-describedby="q-consent-error" /><span>I agree to be contacted about this enquiry. <a href="/privacy">Read the draft privacy policy</a>. *</span></label>
          <span className="err-msg" id="q-consent-error">Consent is required to submit this enquiry.</span>
        </div>
      </div>
    </fieldset>

    <fieldset data-step="3" hidden={step !== 3}>
      <legend tabIndex="-1">Review your details</legend>
      <p className="quote-wizard__hint">Check everything before you submit. Use Edit to change a section.</p>
      <section className="quote-review">
        <div><div><h3>Move and route</h3><p>{value('moveType')} · {value('fromLocality')} ({value('fromPin')}) to {value('toLocality')} ({value('toPin')})</p></div><button type="button" onClick={() => setStep(0)}>Edit</button></div>
        <div><div><h3>Move details</h3><p>Date: {value('date')} · Inventory: {value('inventory')}</p></div><button type="button" onClick={() => setStep(1)}>Edit</button></div>
        <div><div><h3>Contact</h3><p>{value('name')} · {value('phone')}</p><p>Contact consent: {values.contactConsent ? 'Yes' : 'Not provided'}</p></div><button type="button" onClick={() => setStep(2)}>Edit</button></div>
      </section>
    </fieldset>

    <div className="quote-wizard__actions">
      {step > 0 && <button className="btn btn-outline" type="button" onClick={() => setStep(current => current - 1)}>Back</button>}
      {step < steps.length - 1 ? <button className="btn btn-primary" type="button" onClick={continueStep}>Continue</button> : <button className="btn btn-primary" type="submit">Submit enquiry</button>}
    </div>
  </form>;
}
