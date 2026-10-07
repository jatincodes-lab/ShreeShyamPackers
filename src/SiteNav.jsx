import React from 'react';

export default function SiteNav() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const isCurrent = href => currentPath === href || (href !== '/' && currentPath.startsWith(`${href}/`));
  return (
    <header className="site-nav">
      <div className="shell">
        <a className="brand" href="/" aria-label="Shree Shyam Packers & Movers home">
          <span className="brand__mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 3h13v13H1z" />
              <path d="M14 8h4l3 3v5h-7z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="17.5" cy="18.5" r="2.5" />
            </svg>
          </span>
          <span>
            <span className="brand__name">Shree Shyam</span>
            <span className="brand__tag">Packers &amp; Movers</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="/" className={isCurrent('/') ? 'active' : undefined} aria-current={isCurrent('/') ? 'page' : undefined}>Home</a>
          <a href="/services" className={isCurrent('/services') ? 'active' : undefined} aria-current={isCurrent('/services') ? 'page' : undefined}>Services</a>
          <a href="/pricing" className={isCurrent('/pricing') ? 'active' : undefined} aria-current={isCurrent('/pricing') ? 'page' : undefined}>Moving costs</a>
          <a href="/how-it-works" className={isCurrent('/how-it-works') ? 'active' : undefined} aria-current={isCurrent('/how-it-works') ? 'page' : undefined}>How it works</a>
          <a href="/locations" className={isCurrent('/locations') ? 'active' : undefined} aria-current={isCurrent('/locations') ? 'page' : undefined}>Locations</a>
          <a href="/contact" className={isCurrent('/contact') ? 'active' : undefined} aria-current={isCurrent('/contact') ? 'page' : undefined}>Contact us</a>
        </nav>
        <div className="nav-cta">
          <a className="btn btn-navy btn-sm" href="/quote" aria-current={isCurrent('/quote') ? 'page' : undefined}>Get a Quote</a>
        </div>
        <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-panel" aria-label="Toggle menu">
          <span />
        </button>
      </div>
      <div className="mobile-panel" id="mobile-panel">
        <a className={`m-link${isCurrent('/') ? ' active' : ''}`} href="/" aria-current={isCurrent('/') ? 'page' : undefined}>Home</a>
        <a className={`m-link${isCurrent('/services') ? ' active' : ''}`} href="/services" aria-current={isCurrent('/services') ? 'page' : undefined}>Services</a>
        <a className={`m-link${isCurrent('/pricing') ? ' active' : ''}`} href="/pricing" aria-current={isCurrent('/pricing') ? 'page' : undefined}>Moving costs</a>
        <a className={`m-link${isCurrent('/how-it-works') ? ' active' : ''}`} href="/how-it-works" aria-current={isCurrent('/how-it-works') ? 'page' : undefined}>How it works</a>
        <a className={`m-link${isCurrent('/locations') ? ' active' : ''}`} href="/locations" aria-current={isCurrent('/locations') ? 'page' : undefined}>Locations</a>
        <a className={`m-link${isCurrent('/contact') ? ' active' : ''}`} href="/contact" aria-current={isCurrent('/contact') ? 'page' : undefined}>Contact us</a>
        <a className="btn btn-navy" href="/quote" aria-current={isCurrent('/quote') ? 'page' : undefined}>Get a Quote</a>
      </div>
    </header>
  );
}
