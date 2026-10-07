import React, { useEffect } from 'react';
import './template.css';
import { initTemplate } from './template.js';
import SitePage from './SitePage.jsx';
import SiteNav from './SiteNav.jsx';
import SiteFooter from './SiteFooter.jsx';
import QuoteForm from './QuoteForm.jsx';

export default function App() {
  useEffect(() => initTemplate(), []);
  if (window.location.pathname !== '/') return <SitePage />;
  return (
    <>
      {' '}
      <a className="skip-link" href="#main">
      Skip to content
      </a>
      {' '}
      {' '}
      <svg width="0" height="0" style={{position: 'absolute'}} aria-hidden="true" focusable="false">
      {' '}
      <defs>
      {' '}
      <symbol id="i-truck" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h13v13H1z">
      </path>
      <path d="M14 8h4l3 3v5h-7z">
      </path>
      <circle cx="5.5" cy="18.5" r="2">
      </circle>
      <circle cx="17.5" cy="18.5" r="2">
      </circle>
      </symbol>
      {' '}
      <symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z">
      </path>
      </symbol>
      {' '}
      <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V5z">
      </path>
      <path d="m9 12 2 2 4-4">
      </path>
      </symbol>
      {' '}
      <symbol id="i-star" viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 2 3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.8 5.7 21.4l1.5-7.1L1.8 9.4 9 8.6z">
      </path>
      </symbol>
      {' '}
      <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9">
      </circle>
      <path d="M12 7v5l3 2">
      </path>
      </symbol>
      {' '}
      <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="m20 6-11 11-5-5">
      </path>
      </symbol>
      {' '}
      <symbol id="i-box" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8 12 3 3 8v8l9 5 9-5z">
      </path>
      <path d="M3 8l9 5 9-5">
      </path>
      <path d="M12 13v8">
      </path>
      <path d="M7.5 5.5 16.5 10.5">
      </path>
      </symbol>
      {' '}
      <symbol id="i-warehouse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V8l9-4 9 4v13">
      </path>
      <path d="M7 21v-8h10v8">
      </path>
      <path d="M7 17h10">
      </path>
      </symbol>
      {' '}
      <symbol id="i-building" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17">
      </path>
      <path d="M15 9h4a1 1 0 0 1 1 1v11">
      </path>
      <path d="M8 7h3M8 11h3M8 15h3">
      </path>
      <path d="M2 21h20">
      </path>
      </symbol>
      {' '}
      <symbol id="i-music" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13">
      </path>
      <circle cx="6" cy="18" r="3">
      </circle>
      <circle cx="18" cy="16" r="3">
      </circle>
      </symbol>
      {' '}
      <symbol id="i-route" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="3">
      </circle>
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15">
      </path>
      <circle cx="18" cy="5" r="3">
      </circle>
      </symbol>
      {' '}
      <symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z">
      </path>
      <circle cx="12" cy="10" r="3">
      </circle>
      </symbol>
      {' '}
      <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6">
      </path>
      </symbol>
      {' '}
      <symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14">
      </path>
      </symbol>
      {' '}
      <symbol id="i-chev-l" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6">
      </path>
      </symbol>
      {' '}
      <symbol id="i-chev-r" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6">
      </path>
      </symbol>
      {' '}
      <symbol id="i-dollar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1v22">
      </path>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6">
      </path>
      </symbol>
      {' '}
      <symbol id="i-user-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2">
      </path>
      <circle cx="9" cy="7" r="4">
      </circle>
      <path d="m16 11 2 2 4-4">
      </path>
      </symbol>
      {' '}
      <symbol id="i-clipboard" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1">
      </rect>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2">
      </path>
      <path d="m9 14 2 2 4-4">
      </path>
      </symbol>
      {' '}
      <symbol id="i-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z">
      </path>
      </symbol>
      {' '}
      <symbol id="i-map" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z">
      </path>
      <path d="M9 4v14M15 6v14">
      </path>
      </symbol>
      {' '}
      <symbol id="i-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1z">
      </path>
      </symbol>
      {' '}
      <symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2">
      </rect>
      <path d="m2 7 10 6 10-6">
      </path>
      </symbol>
      {' '}
      <symbol id="i-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2">
      </rect>
      <path d="M3 10h18M8 2v4M16 2v4">
      </path>
      </symbol>
      {' '}
      <symbol id="i-award" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6">
      </circle>
      <path d="m8.2 13.9-1.2 7 5-3 5 3-1.2-7">
      </path>
      </symbol>
      {' '}
      <symbol id="i-hand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11V5a1.5 1.5 0 0 1 3 0v5m0-1V4a1.5 1.5 0 0 1 3 0v6m0-1V6a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6h-1a6 6 0 0 1-5.3-3.2L3.5 14a1.6 1.6 0 0 1 2.7-1.6L9 15">
      </path>
      </symbol>
      {' '}
      <symbol id="i-fb" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z">
      </path>
      </symbol>
      {' '}
      <symbol id="i-ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5">
      </rect>
      <circle cx="12" cy="12" r="4">
      </circle>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none">
      </circle>
      </symbol>
      {' '}
      <symbol id="i-x" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.2 2h3.3l-7.2 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.7-8.8L1.5 2h6.8l4.7 6.2zM17 20h1.8L7.1 3.9H5.1z">
      </path>
      </symbol>
      {' '}
      <symbol id="i-in" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.5 8H3v13h3.5zM4.7 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 21h-3.5v-6.8c0-1.6-.6-2.7-2-2.7-1.1 0-1.7.7-2 1.5-.1.3-.1.7-.1 1V21H10s.1-11.5 0-13h3.5v1.9c.5-.8 1.3-1.9 3.2-1.9 2.3 0 4.1 1.5 4.1 4.8z">
      </path>
      </symbol>
      {' '}
      </defs>
      {' '}
      </svg>
      {' '}
      {' '}
      <SiteNav />
      {' '}
      <main id="main">
      {' '}
      {' '}
      <section className="hero">
      {' '}
      <div className="shell">
      {' '}
      <div className="hero__grid">
      {' '}
      <div className="hero__copy">
      {' '}
      <span className="eyebrow" style={{color: 'var(--orange)'}}>
      Moving help for home and business
      </span>
      {' '}
      <h1 className="hero__title">Moving home or office? <em>Start here.</em></h1>
      {' '}
      <p className="hero__sub">Explore home, office and vehicle moving options. Share your route and what you need to request a quote.</p>
      {' '}
      <div className="hero__ctas">
      {' '}
      <a className="btn btn-primary btn-lg" href="#quote-form">
      Request a quote 
      <svg>
      <use href="#i-arrow">
      </use>
      </svg>
      </a>
      {' '}
      <a className="btn btn-ghost-light btn-lg" href="/services">
       Explore services
      </a>
      {' '}
      </div>
      
      
      
      {' '}

      {' '}
      </div>
      <QuoteForm compact />
      {' '}
      {' '}
      {' '}
      </div>
      {' '}
      </div>
      {' '}
      </section>
      {' '}
      {' '}
      
            <section className="move-journey" id="process">
        <div className="shell">
          <header className="move-journey__head">
            <h2>How It Works</h2>
            <p>A clear seven-step journey for your move.</p>
          </header>
          <div className="move-journey__steps">
            <article className="move-journey__step">
              <span className="move-journey__number">01</span>
              <svg className="move-journey__icon" aria-hidden="true"><use href="#i-home" /></svg>
              <h3>Survey</h3>
              <p>Share your move details and access needs.</p>
            </article>
            <article className="move-journey__step">
              <span className="move-journey__number">02</span>
              <svg className="move-journey__icon" aria-hidden="true"><use href="#i-clipboard" /></svg>
              <h3>Quote</h3>
              <p>Review pricing for the services you need.</p>
            </article>
            <article className="move-journey__step">
              <span className="move-journey__number">03</span>
              <svg className="move-journey__icon" aria-hidden="true"><use href="#i-box" /></svg>
              <h3>Packing</h3>
              <p>Confirm packing and handling requirements.</p>
            </article>
            <article className="move-journey__step">
              <span className="move-journey__number">04</span>
              <svg className="move-journey__icon" aria-hidden="true"><use href="#i-box" /></svg>
              <h3>Loading</h3>
              <p>Agree on loading arrangements.</p>
            </article>
            <article className="move-journey__step">
              <span className="move-journey__number">05</span>
              <svg className="move-journey__icon" aria-hidden="true"><use href="#i-truck" /></svg>
              <h3>Transport</h3>
              <p>Confirm the route and schedule.</p>
            </article>
            <article className="move-journey__step">
              <span className="move-journey__number">06</span>
              <svg className="move-journey__icon" aria-hidden="true"><use href="#i-home" /></svg>
              <h3>Delivery</h3>
              <p>Plan for arrival at your new address.</p>
            </article>
            <article className="move-journey__step">
              <span className="move-journey__number">07</span>
              <svg className="move-journey__icon" aria-hidden="true"><use href="#i-box" /></svg>
              <h3>Unpacking</h3>
              <p>Arrange unpacking and placement.</p>
            </article>
          </div>
          <p className="move-journey__note">Steps and available services are confirmed with your quote.</p>
        </div>
        <div className="move-journey__assurance">
          <div className="shell">
            <header className="move-journey__assurance-head">
              <span className="eyebrow eyebrow--center">Before you book</span>
              <h3>Plan the details before you book</h3>
            </header>
            <div className="move-journey__checks">
              <div><svg aria-hidden="true"><use href="#i-clipboard" /></svg><span><b>Review your quote</b><small>Check services, route and pricing.</small></span></div>
              <div><svg aria-hidden="true"><use href="#i-shield" /></svg><span><b>Ask about protection</b><small>Confirm the coverage terms for your move.</small></span></div>
              <div><svg aria-hidden="true"><use href="#i-user-check" /></svg><span><b>Understand the claims process</b><small>Request the written process before booking.</small></span></div>
            </div>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="services">
      {' '}
      <div className="shell">
      {' '}
      <div className="section-head text-center reveal">
      {' '}
      <span className="eyebrow eyebrow--center">
      What we move
      </span>
      {' '}
      <h2 className="h-xl">
      Moving services for different needs
      </h2>
      {' '}
      <p className="lead">Choose the help that fits your move, from home and office shifting to packing, storage and vehicle transport.</p>
      {' '}
      </div>
      {' '}
      <div className="svc-grid">
      {' '}
      <article className="svc-card reveal">
      {' '}
      <div className="svc-ico">
      <svg>
      <use href="#i-home">
      </use>
      </svg>
      </div>
      {' '}
      <h3>
      Local Shifting
      </h3>
      {' '}
      <p>
      Plan a move within your city, including pickup and delivery details, access needs and preferred timing.
      </p>
      {' '}
      <a className="svc-more" href="#quote-form">
      Ask about this service 
      <svg>
      <use href="#i-arrow">
      </use>
      </svg>
      </a>
      {' '}
      </article>
      {' '}
      <article className="svc-card reveal reveal-d1">
      {' '}
      <div className="svc-ico">
      <svg>
      <use href="#i-route">
      </use>
      </svg>
      </div>
      {' '}
      <h3>
      Intercity Shifting
      </h3>
      {' '}
      <p>
      Share your origin, destination and inventory to discuss an intercity household move.
      </p>
      {' '}
      <a className="svc-more" href="#quote-form">
      Ask about this service 
      <svg>
      <use href="#i-arrow">
      </use>
      </svg>
      </a>
      {' '}
      </article>
      {' '}
      <article className="svc-card reveal reveal-d2">
      {' '}
      <div className="svc-ico">
      <svg>
      <use href="#i-box">
      </use>
      </svg>
      </div>
      {' '}
      <h3>
      Packing &amp; Unpacking
      </h3>
      {' '}
      <p>
      Tell us which belongings need packing support and whether you need help at pickup, delivery or both.
      </p>
      {' '}
      <a className="svc-more" href="#quote-form">
      Ask about this service 
      <svg>
      <use href="#i-arrow">
      </use>
      </svg>
      </a>
      {' '}
      </article>
      {' '}
      <article className="svc-card reveal">
      {' '}
      <div className="svc-ico">
      <svg>
      <use href="#i-warehouse">
      </use>
      </svg>
      </div>
      {' '}
      <h3>
      Storage
      </h3>
      {' '}
      <p>
      Ask about storage availability, facility details, duration and handling for your belongings.
      </p>
      {' '}
      <a className="svc-more" href="#quote-form">
      Ask about this service 
      <svg>
      <use href="#i-arrow">
      </use>
      </svg>
      </a>
      {' '}
      </article>
      {' '}
      <article className="svc-card reveal reveal-d1">
      {' '}
      <div className="svc-ico">
      <svg>
      <use href="#i-building">
      </use>
      </svg>
      </div>
      {' '}
      <h3>
      Commercial &amp; Office Moves
      </h3>
      {' '}
      <p>
      Describe your office inventory, building access, preferred schedule and any equipment that needs special handling.
      </p>
      {' '}
      <a className="svc-more" href="#quote-form">
      Ask about this service 
      <svg>
      <use href="#i-arrow">
      </use>
      </svg>
      </a>
      {' '}
      </article>
      {' '}
      <article className="svc-card reveal reveal-d2">
      {' '}
      <div className="svc-ico">
      <svg>
      <use href="#i-music">
      </use>
      </svg>
      </div>
      {' '}
      <h3>
      Car &amp; Bike Transport
      </h3>
      {' '}
      <p>
      Share the vehicle type and route to ask about transport options and availability.
      </p>
      {' '}
      <a className="svc-more" href="#quote-form">
      Ask about this service 
      <svg>
      <use href="#i-arrow">
      </use>
      </svg>
      </a>
      {' '}
      </article>
      {' '}
      </div>
      {' '}
      </div>
      {' '}
      </section>
      {' '}
      {' '}
      <section className="cta-band">
  <div className="shell">
    <h2>Ready to plan your move?</h2>
    <p>Share your route and moving details to request a quote.</p>
    <a className="btn btn-primary btn-lg" href="#quote-form">Tell us about your move</a>
  </div>
</section>
      {' '}
      </main>
      {' '}
      {' '}
      <SiteFooter />
      {' '}
      {' '}
      {' '}
    </>
  );
}
