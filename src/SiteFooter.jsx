import React from 'react';

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="shell">
      <div className="footer-grid">
        <div className="footer-about">
          <a className="brand" href="/" aria-label="Shree Shyam Packers & Movers home">
            <span className="brand__mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h13v13H1z" /><path d="M14 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="17.5" cy="18.5" r="2.5" /></svg></span>
            <span><span className="brand__name">Shree Shyam</span><span className="brand__tag">Packers &amp; Movers</span></span>
          </a>
          <p>Home, office and vehicle moving enquiries. Find the service that fits your move.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="/services/home-shifting">Home shifting</a></li>
            <li><a href="/services/local-shifting">Local moving</a></li>
            <li><a href="/services/intercity-shifting">Intercity moving</a></li>
            <li><a href="/services/office-shifting">Office moves</a></li>
            <li><a href="/services/packing-unpacking">Packing &amp; unpacking</a></li>
            <li><a href="/services/storage-warehousing">Storage</a></li>
            <li><a href="/services/car-bike-transport">Car &amp; bike transport</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About the company</a></li>
            <li><a href="/how-it-works">How it works</a></li>
            <li><a href="/locations">Service areas</a></li>
            <li><a href="/help/faqs">FAQs</a></li>
            <li><a href="/quote">Get a quote</a></li>
          </ul>
        </div>
        <div className="footer-col" id="contact-details">
          <h4>Get in touch</h4>
          <ul className="footer-contact">
            <li><a href="/#quote-form">Request a quote</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Shree Shyam Packers &amp; Movers.</span>
        <span className="legal"><a href="/privacy">Privacy policy</a><a href="/terms">Terms</a></span>
      </div>
    </div>
  </footer>;
}
