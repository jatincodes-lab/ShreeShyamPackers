import React, { useEffect } from 'react';
import SiteNav from './SiteNav.jsx';
import SiteFooter from './SiteFooter.jsx';
import QuoteWizard from './QuoteWizard.jsx';

const services = [
  ['home-shifting', 'Home shifting', 'Plan a household move around your inventory, access at both homes, preferred date and route. Share room count and special care items so the estimate can reflect the work involved.', 'List furniture, appliances, boxes and fragile items. Confirm lift access, parking and building move rules at pickup and delivery.'],
  ['office-shifting', 'Office shifting', 'Coordinate an office move around teams, equipment, records and the time your workplace can pause operations. The scope and schedule need to be confirmed for each move.', 'Prepare an equipment and furniture inventory, identify items needing special handling, and confirm building access windows at both addresses.'],
  ['local-shifting', 'Local shifting', 'A local move still depends on the inventory, distance, access and services requested. Share both localities and PIN codes to discuss whether the route is covered.', 'Ask which packing, loading, transport and unloading tasks are included. Confirm any stairs, parking limits or restricted access.'],
  ['intercity-shifting', 'Intercity shifting', 'For a move between cities, provide the full pickup and destination details, inventory and preferred date. Route availability and delivery arrangements must be confirmed before booking.', 'Request a written scope, route plan, expected schedule and itemised charges before confirming your move.'],
  ['car-bike-transport', 'Car and bike transport', 'Vehicle transport needs vehicle details, pickup and destination addresses, and a confirmed route. Ask the business to explain its handover, inspection and transport terms in writing.', 'Record the vehicle condition at handover and ask which documents, keys and preparation steps are required. Confirm all applicable protection terms directly.'],
  ['packing-unpacking', 'Packing and unpacking', 'Packing support can be scoped by room, item type and the materials required. Confirm which packing and unpacking tasks are available and included in the quote.', 'Identify fragile, valuable and bulky items in advance. Confirm who supplies materials and whether unpacking or debris removal is included.'],
  ['storage-warehousing', 'Storage and warehousing', 'Storage availability, facility details, access, duration and charges have not been confirmed. Discuss your dates and inventory with the business before relying on storage.', 'Ask for the facility location, handling process, access rules, charges and written storage terms before arranging a move.'],
  ['specialty-moving', 'Specialty items', 'Pianos, safes, artwork and other oversized or delicate belongings may need a separate handling plan. Share dimensions, weight if known, access conditions and any handling instructions.', 'Confirm the item is accepted, what equipment is needed, and which written handling and coverage terms apply.'],
];

const pages = {
  '/pricing': { title: 'Moving cost guide', description: 'Understand the details that can affect a moving estimate and what to confirm in writing.', intro: 'There are no verified rates or estimate rules configured for this website. Request an itemised quote in rupees and confirm inclusions and exclusions before booking.', sections: [['What can affect a quote', 'Inventory and home size, route distance, access at both addresses, move date, packing requirements, special handling and storage requests can affect the work involved.'], ['What to confirm', 'Ask whether packing materials, stairs or lift access, dismantling, vehicle transport, taxes and any additional handling are included. Request all charges and exclusions in writing.'], ['Estimates', 'The website does not calculate or promise a price. A business representative must confirm the scope and final quote.']] },
  '/how-it-works': { title: 'How a move works', description: 'A practical overview of the steps to plan and confirm a move.', intro: 'The exact process depends on the services agreed for your move. Confirm each step and its timing with the business.', sections: [['1. Share your move details', 'Provide both addresses and PIN codes, your preferred date, move type and an approximate inventory.'], ['2. Confirm the scope', 'Discuss access, packing, special items and any survey needed. Request a written estimate with inclusions and exclusions.'], ['3. Prepare and hand over', 'Confirm the date, responsibilities and payment terms. Keep documents and essential belongings with you.'], ['4. Delivery and handover', 'Check the delivered inventory and follow the written process supplied by the business for any issue.']] },
  '/locations': { title: 'Service locations', description: 'Check service availability for your pickup and destination locations.', intro: 'No confirmed city or route coverage has been supplied yet. Share both localities and PIN codes to ask whether your move can be served.', links: [['/locations/city-template', 'City page template'], ['/routes/route-template', 'Intercity route page template']] },
  '/locations/city-template': { title: 'City service page template', description: 'Template for a city page. Confirm local coverage and add original local service information before publishing.', intro: 'Coverage for this city is not confirmed. Replace this template only after the business verifies the service area and supplies useful local details.', sections: [['Local details to verify', 'Confirm covered neighbourhoods and PIN codes, branch or dispatch details if applicable, building access considerations, and available services.'], ['Before publishing', 'Add original information about the actual service area. Do not publish a city page based only on changing the city name.']] },
  '/routes/route-template': { title: 'Intercity route page template', description: 'Template for a route page. Confirm route availability and add original route information before publishing.', intro: 'This route is a placeholder, not a confirmed service. Verify both endpoints and the offered services before publishing a route page.', sections: [['Route details to verify', 'Confirm pickup and destination coverage, vehicle or household services offered, relevant handover details and any route-specific requirements.'], ['Before publishing', 'Add accurate, route-specific information and link to the relevant service pages. Do not imply availability until confirmed.']] },
  '/quote': { title: 'Request a moving quote', description: 'Share your move details in a guided quote enquiry.', intro: 'Enter your move type, route and contact details, then review the information before submitting. The quote service is not connected yet, so this form will not send your details.' },
  '/quote/confirmation': { title: 'Quote enquiry status', description: 'Information about quote enquiry confirmation.', intro: 'A confirmation appears only after the configured quote service accepts a request. This page does not confirm that an enquiry was received.', sections: [['No enquiry reference', 'If you submitted the homepage form and it reported an error, your details were not sent. Contact the business using verified contact information when it is added.']] },
  '/track': { title: 'Track a shipment', description: 'Shipment tracking availability and support information.', intro: 'Online shipment tracking is not connected. No tracking number or shipment status can be looked up here.', sections: [['Need an update?', 'Use the business’s verified phone, WhatsApp or email details once they are provided. Do not enter personal or shipment details into an unconnected form.']] },
  '/help': { title: 'FAQs and moving guides', description: 'Answers to common moving questions and practical preparation guidance.', intro: 'Use these prompts to prepare for a conversation with the moving team. Confirm service details and terms directly.', links: [['/help/faqs', 'Frequently asked questions'], ['/help/moving-guide', 'Moving preparation guide']] },
  '/help/faqs': { title: 'Moving FAQs', description: 'Answers to common questions about moving quotes, packing, storage and claims.', intro: 'Business-specific availability, prices and terms have not been provided. Confirm them in writing before booking.', sections: [['How is moving cost calculated?', 'The quote may depend on inventory, route, access and requested services. Ask for an itemised quote in INR.'], ['Is packing included?', 'Packing services, materials and charges need to be confirmed for your move.'], ['Can I store items?', 'Storage availability, facility details, duration, access and charges are unconfirmed. Ask for written terms.'], ['What if an item is damaged?', 'Request the business’s written damage reporting process and any applicable coverage terms before booking.'], ['Which cities are covered?', 'Coverage has not been confirmed. Share both localities and PIN codes to ask about your route.']] },
  '/help/moving-guide': { title: 'Moving preparation guide', description: 'A practical checklist to help prepare for moving day.', intro: 'A short checklist for organising details before your move.', sections: [['Before booking', 'List furniture, appliances, boxes, fragile items and anything requiring special handling. Record pickup and destination PIN codes.'], ['Before moving day', 'Confirm the written quote and scope, building access, parking, date and contact process. Label packed items by room.'], ['On the day', 'Keep identity documents, medicines, valuables and essentials with you. Check the inventory and handover details with the moving team.']] },
  '/contact': { title: 'Contact and support', description: 'Find the right next step for a moving quote, service question or support request.', intro: 'Choose what you need help with and we’ll point you to the right page.' },
  '/about': { title: 'About the company', description: 'Company information for Shree Shyam Packers & Movers.', intro: 'Verified company history, registrations, address and operating details have not been supplied. Add approved business information here before publishing claims about experience, credentials or coverage.', sections: [['Services', 'See the service pages for the information customers should confirm before arranging a move.']] },
  '/privacy': { title: 'Privacy policy', description: 'Privacy information for quote enquiries and website use.', intro: 'This draft is not a substitute for a business-approved privacy policy. Publish it only after confirming the data controller, retention, contact and applicable legal requirements.', sections: [['Quote enquiries', 'When a quote API is connected, document what information is collected, why it is used, who receives it, how long it is kept and how customers can exercise their rights. The current form does not send details without an API endpoint.']] },
  '/terms': { title: 'Terms and conditions', description: 'Terms information for website enquiries and moving services.', intro: 'Service terms, cancellation rules, payment terms, exclusions and claims procedures have not been provided. The business must approve and publish its terms before accepting bookings.', sections: [['Before booking', 'Request the applicable written service agreement and confirm the scope, charges, payment schedule, cancellation terms and issue reporting process.']] },
};

const servicePages = Object.fromEntries(services.map(([slug, title, description, checklist]) => [`/services/${slug}`, { title, description: `${title} information and details to confirm before booking.`, intro: description, sections: [['Plan your service', checklist], ['Confirm before booking', 'Ask whether this service is available for your locations and date. Confirm the written scope, charges, exclusions and applicable terms before proceeding.']], links: [['/pricing', 'See the moving cost guide'], ['/how-it-works', 'Review the moving process']] }]));

const serviceGroups = [
  { title: 'Home moves', description: 'Planning a household move within your city or to another one? The work depends on your inventory, route and access at both addresses.', image: '/img/service-specialty.jpg', alt: 'Sofa in a furnished home', prepare: 'Share your pickup and destination PIN codes, preferred date, room count and any fragile or bulky items.', links: [['/services/home-shifting', 'Home shifting'], ['/services/local-shifting', 'Local moving'], ['/services/intercity-shifting', 'Intercity moving']] },
  { title: 'Office moves', description: 'Plan an office relocation around furniture, equipment, records and the access windows at both buildings.', image: '/img/why-crew.jpg', alt: 'Urban building entrance', prepare: 'List desks, equipment and special handling needs, then confirm building access and the move schedule.', links: [['/services/office-shifting', 'Office shifting']] },
  { title: 'Packing and unpacking', description: 'Decide which rooms or belongings need packing support and whether you need help unpacking at the destination.', image: '/img/moving-tips.jpg', alt: 'Cardboard boxes for a move', prepare: 'Identify fragile and oversized items, and confirm materials, included tasks and charges in your quote.', links: [['/services/packing-unpacking', 'Packing and unpacking']] },
  { title: 'Vehicle transport', description: 'Ask about moving a car or bike by sharing the vehicle details and the route you need.', image: '/img/service-packing.jpg', alt: 'People discussing moving arrangements', prepare: 'Confirm route availability, vehicle handover steps, required documents and applicable written terms.', links: [['/services/car-bike-transport', 'Car and bike transport']] },
  { title: 'Storage and warehousing', description: 'If your move dates do not line up, ask whether storage is available for your belongings and for how long.', image: '/img/service-longdistance.jpg', alt: 'Shelves of stored goods in a warehouse', prepare: 'Confirm facility details, access rules, handling, duration, charges and written storage terms before arranging storage.', links: [['/services/storage-warehousing', 'Storage details']] },
];

function ServicesOverview() {
  return <>
    <section className="page-hero service-overview-hero">
      <div className="shell">
        <p className="eyebrow">Moving services</p>
        <h1>Moving services for homes and offices.</h1>
        <p className="lead">Explore local and intercity home moves, office moves, packing, storage and vehicle transport. We confirm availability for your route.</p>
        <a className="btn btn-primary" href="/#quote-form">Get a quote</a>
      </div>
    </section>
    <section className="service-overview">
      <div className="shell">
        <header className="service-overview__intro">
          <p className="eyebrow">Find the right service</p>
          <h2>Moving help for every kind of move</h2>
          <p>Choose a service to see what to prepare and what to confirm before booking.</p>
        </header>
        <div className="service-overview__list">
          {serviceGroups.map(group => <article className="service-feature" key={group.title}>
            <div className="service-feature__media"><img src={group.image} alt={group.alt} loading="lazy" /></div>
            <div className="service-feature__body">
              <p className="eyebrow">Moving service</p>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
              <p className="service-feature__prepare"><strong>Helpful to share:</strong> {group.prepare}</p>
              <div className="service-overview__links">
                {group.links.map(([href, label]) => <a href={href} key={href}>{label}<span aria-hidden="true"> →</span></a>)}
              </div>
            </div>
          </article>)}
        </div>
      </div>
    </section>
    <section className="cta-band service-overview-cta">
      <div className="shell">
        <h2>Not sure what you need?</h2>
        <p>Share your route and move details to discuss the right service.</p>
        <a className="btn btn-primary btn-lg" href="/#quote-form">Tell us about your move</a>
      </div>
    </section>
  </>;
}

function HomeShiftingPage() {
  return <>
    <section className="home-shifting-hero">
      <div className="shell home-shifting-hero__grid">
        <div className="home-shifting-hero__copy">
          <p className="eyebrow">Home shifting</p>
          <h1>Move home with a plan that fits your belongings.</h1>
          <p className="lead">Share your route, move date and a rough idea of what you’re taking. Then confirm the services, access and quote before booking.</p>
          <div className="home-shifting-hero__actions">
            <a className="btn btn-primary btn-lg" href="/quote">Plan your move <span aria-hidden="true">→</span></a>
            <a className="home-shifting-text-link" href="#move-plan">See what to prepare</a>
          </div>
        </div>
        <figure className="home-shifting-hero__image">
          <img src="/img/service-specialty.jpg" alt="A furnished home being prepared for a move" />
          <figcaption><span>Start with the essentials</span><strong>Route · Date · Inventory</strong></figcaption>
        </figure>
      </div>
    </section>
    <section className="home-shifting-plan" id="move-plan">
      <div className="shell home-shifting-plan__grid">
        <div className="home-shifting-plan__intro">
          <p className="eyebrow">A clearer quote starts here</p>
          <h2>Three details help shape your move.</h2>
          <p>You can start with estimates. Add more detail when you have it.</p>
          <a className="home-shifting-text-link" href="/pricing">What can affect moving costs? <span aria-hidden="true">→</span></a>
        </div>
        <ol className="home-shifting-details">
          <li><span>01</span><div><h3>Your route</h3><p>Pickup and destination localities with PIN codes help check whether your route can be served.</p></div></li>
          <li><span>02</span><div><h3>Your belongings</h3><p>Share room count or a rough list of furniture, appliances, boxes and fragile items.</p></div></li>
          <li><span>03</span><div><h3>Your access and date</h3><p>Note your preferred date, floors, lift access, parking and any building move rules at both homes.</p></div></li>
        </ol>
      </div>
    </section>
    <section className="home-shifting-faq">
      <div className="shell home-shifting-faq__grid">
        <header><p className="eyebrow">Before you book</p><h2>Good questions to ask.</h2><p>Open a question to see what to confirm with the moving team.</p></header>
        <div className="home-shifting-questions">
          <details><summary>What if I don’t know my full inventory yet?</summary><p>Share a rough room count and list large or fragile belongings first. You can clarify the inventory when the move scope is reviewed.</p></details>
          <details><summary>Is packing included in a home move?</summary><p>Packing tasks, materials and charges depend on the agreed scope. Ask what will be packed and what is included in writing.</p></details>
          <details><summary>Do I need to arrange a survey?</summary><p>A survey may be useful when inventory, access or special handling needs a closer review. Ask whether one is needed for your move.</p></details>
        </div>
      </div>
    </section>
    <section className="cta-band home-shifting-cta">
      <div className="shell">
        <p className="eyebrow">Ready when you are</p>
        <h2>Tell us where you’re moving.</h2>
        <p>Use the guided enquiry to share your route, date and home details.</p>
        <a className="btn btn-primary btn-lg" href="/quote">Start a quote enquiry <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </>;
}

function LocalShiftingPage() {
  return <>
    <section className="move-service-hero">
      <div className="shell move-service-hero__grid">
        <div className="move-service-hero__copy">
          <p className="eyebrow">Local shifting</p>
          <h1>Moving across town? Start with both addresses.</h1>
          <p className="lead">A local move is easier to plan when the route, belongings and access at each home are clear from the start.</p>
          <a className="btn btn-primary btn-lg" href="/quote">Plan your local move <span aria-hidden="true">→</span></a>
          <p className="move-service-hero__availability">Share your localities and PIN codes to confirm whether your route is covered.</p>
        </div>
        <aside className="move-service-checklist" aria-label="Details to prepare for a local move">
          <p className="eyebrow">Before you request a quote</p>
          <h2>Keep these details handy.</h2>
          <ol>
            <li><span>01</span><span>Pickup and destination localities with PIN codes</span></li>
            <li><span>02</span><span>Rooms, large items and anything fragile</span></li>
            <li><span>03</span><span>Preferred date, floors, lift and parking access</span></li>
          </ol>
          <a href="/how-it-works">See how a move is planned <span aria-hidden="true">→</span></a>
        </aside>
      </div>
    </section>
    <section className="move-service-guide">
      <div className="shell move-service-guide__grid">
        <div>
          <p className="eyebrow">Make the plan clearer</p>
          <h2>Every stop on the route matters.</h2>
          <p>Tell the team what the move involves at both addresses. Stairs, lift access, parking distance, building rules and special handling can change the work required.</p>
          <p>Confirm which tasks are included—such as packing, loading, transport and unloading—along with the date and charges in your written quote.</p>
          <a className="move-service-link" href="/pricing">See what can affect moving costs <span aria-hidden="true">→</span></a>
        </div>
        <div className="move-service-questions" aria-label="Local moving questions">
          <details name="move-service-help" open>
            <summary>Is every local route available?</summary>
            <p>Route coverage has not been confirmed on this site. Share both localities and PIN codes to check availability for your move.</p>
          </details>
          <details name="move-service-help">
            <summary>What if I don’t know my full inventory?</summary>
            <p>Start with your room count and larger items. Add fragile, bulky or special-care belongings when you know more.</p>
          </details>
          <details name="move-service-help">
            <summary>Does a local quote include packing?</summary>
            <p>Services, materials and charges depend on the agreed scope. Ask what is included and request the details in writing.</p>
          </details>
        </div>
      </div>
    </section>
    <section className="move-service-next">
      <div className="shell move-service-next__inner">
        <div><p className="eyebrow">Ready to plan?</p><h2>Share your route and moving date.</h2><p>Use the guided form to organise the details for your enquiry.</p></div>
        <a className="btn btn-primary btn-lg" href="/quote">Start a quote enquiry <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </>;
}

function IntercityShiftingPage() {
  return <>
    <section className="move-service-hero">
      <div className="shell move-service-hero__grid">
        <div className="move-service-hero__copy">
          <p className="eyebrow">Intercity shifting</p>
          <h1>Moving to another city? Plan the route before moving day.</h1>
          <p className="lead">Share both locations, your belongings and preferred date. Confirm route availability, responsibilities and the delivery plan in writing before booking.</p>
          <a className="btn btn-primary btn-lg" href="/quote">Plan an intercity move <span aria-hidden="true">→</span></a>
          <p className="move-service-hero__availability">City and route coverage has not been confirmed on this website. Ask about your exact pickup and destination.</p>
        </div>
        <aside className="move-service-checklist" aria-label="Details to prepare for an intercity move">
          <p className="eyebrow">Start with the essentials</p>
          <h2>Make your route clear.</h2>
          <ol>
            <li><span>01</span><span>Pickup and destination cities, localities and PIN codes</span></li>
            <li><span>02</span><span>A rough inventory, including fragile or bulky items</span></li>
            <li><span>03</span><span>Your preferred date and access details at both addresses</span></li>
          </ol>
          <a href="/how-it-works">Understand the moving process <span aria-hidden="true">→</span></a>
        </aside>
      </div>
    </section>
    <section className="move-service-guide">
      <div className="shell move-service-guide__grid">
        <div>
          <p className="eyebrow">Before you confirm</p>
          <h2>Know what happens at each end.</h2>
          <p>Ask how pickup, packing, loading, transport and delivery will work for your route. Confirm what you need to do and what the team will handle.</p>
          <p>Request the expected schedule, itemised charges, inclusions and exclusions in writing. Timing and scope should be confirmed for your specific move.</p>
          <a className="move-service-link" href="/pricing">Review moving cost factors <span aria-hidden="true">→</span></a>
        </div>
        <div className="move-service-questions" aria-label="Intercity moving questions">
          <details name="move-service-help" open>
            <summary>Can every city-to-city route be served?</summary>
            <p>Coverage has not been verified for this website. Share the exact pickup and destination cities and PIN codes to ask about availability.</p>
          </details>
          <details name="move-service-help">
            <summary>How do I know when my belongings will arrive?</summary>
            <p>Ask for the expected pickup, transport and delivery schedule for your route, and confirm how schedule updates will be shared.</p>
          </details>
          <details name="move-service-help">
            <summary>What should an intercity quote explain?</summary>
            <p>Check the route, agreed services, date, charges, exclusions, payment terms and the process for raising an issue.</p>
          </details>
        </div>
      </div>
    </section>
    <section className="move-service-next">
      <div className="shell move-service-next__inner">
        <div><p className="eyebrow">Have your route details?</p><h2>Start planning your move between cities.</h2><p>Share both ends of your route and the details you already know.</p></div>
        <a className="btn btn-primary btn-lg" href="/quote">Start a quote enquiry <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </>;
}

function ContactPage() {
  return <>
    <section className="contact-hero">
      <div className="shell contact-hero__inner">
        <p className="eyebrow">Contact and support</p>
        <h1>Let’s get you to the right next step.</h1>
        <p>Planning a move, comparing services or looking for help with an existing booking? Choose what you need below.</p>
        <div className="contact-hero__actions">
          <a className="btn btn-primary btn-lg" href="/quote">Plan a move <span aria-hidden="true">→</span></a>
          <a className="contact-hero__secondary" href="#contact-options">See support options</a>
        </div>
      </div>
    </section>
    <section className="contact-options" id="contact-options">
      <div className="shell contact-options__grid">
        <header>
          <p className="eyebrow">How can we help?</p>
          <h2>Choose a reason to get started.</h2>
          <p>Open an option for the most useful next step.</p>
        </header>
        <div className="contact-options__list">
          <details name="contact-help" open>
            <summary><span className="contact-options__index">01</span><span><strong>I’m planning a move</strong><small>Get your route and move details ready</small></span></summary>
            <div className="contact-options__answer"><p>Share your move type, pickup and destination PIN codes, preferred date and a rough inventory.</p><a className="contact-link" href="/quote">Open the guided quote form <span aria-hidden="true">→</span></a><p className="contact-options__note">The quote form is not connected yet, so it won’t send your details.</p></div>
          </details>
          <details name="contact-help">
            <summary><span className="contact-options__index">02</span><span><strong>I have a service or cost question</strong><small>Compare services and prepare questions</small></span></summary>
            <div className="contact-options__answer"><p>Review what to confirm about service scope, route availability and moving costs before booking.</p><div className="contact-links"><a href="/services">Explore services</a><a href="/pricing">Understand moving costs</a><a href="/locations">Check route details</a></div></div>
          </details>
          <details name="contact-help" id="existing-move">
            <summary><span className="contact-options__index">03</span><span><strong>I already have a booking</strong><small>Find the right information for an existing move</small></span></summary>
            <div className="contact-options__answer"><p>Verified support phone, WhatsApp and email details have not been added to this website yet. Use the contact details in your booking confirmation, and have your booking reference and route ready.</p><p className="contact-options__note">Please don’t enter booking references or private shipment details in the quote form.</p></div>
          </details>
        </div>
      </div>
    </section>
    <section className="contact-next">
      <div className="shell contact-next__inner">
        <div><p className="eyebrow">Need a quick answer?</p><h2>Start with the moving FAQs.</h2><p>Find practical guidance on quotes, packing, routes and preparing for moving day.</p></div>
        <a className="btn btn-navy" href="/help/faqs">Browse FAQs <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </>;
}

function PricingGuide() {
  return <>
    <section className="page-hero pricing-hero">
      <div className="shell">
        <p className="eyebrow">Moving costs</p>
        <h1>Know what shapes your moving quote.</h1>
        <p className="lead">Moving costs depend on your belongings, route and requested services. No verified rates are available on this site, so your final estimate needs to be confirmed with the business.</p>
        <a className="btn btn-primary" href="/#quote-form">Request an itemised quote</a>
      </div>
    </section>
    <section className="pricing-guide">
      <div className="shell">
        <header className="pricing-guide__head">
          <p className="eyebrow">Estimate factors</p>
          <h2>What can affect the cost?</h2>
          <p>Share these details early so the estimate reflects the work you need.</p>
        </header>
        <div className="pricing-factors">
          <article><h3>What you’re moving</h3><p>Home size, room count, boxes, appliances and bulky or fragile belongings.</p></article>
          <article><h3>Your route</h3><p>Pickup and destination localities or PIN codes, and the distance between them.</p></article>
          <article><h3>Access at each address</h3><p>Floor, lift availability, parking and the distance from the vehicle to your door.</p></article>
          <article><h3>Date and services</h3><p>Preferred moving date and any packing, unpacking, vehicle transport or storage you need.</p></article>
        </div>
      </div>
    </section>
    <section className="pricing-quote section">
      <div className="shell pricing-quote__grid">
        <img src="/img/moving-tips.jpg" alt="Cardboard boxes ready to be packed" loading="lazy" />
        <div>
          <p className="eyebrow">Before you book</p>
          <h2>Get the full scope in writing.</h2>
          <p>Ask for an itemised quote in rupees and check what it covers before you confirm.</p>
          <ul>
            <li>Services, route and moving date</li>
            <li>Packing materials, handling and access requirements</li>
            <li>Taxes, exclusions and any possible extra charges</li>
            <li>Payment schedule and quote validity</li>
          </ul>
          <p className="pricing-quote__note">Ask whether stairs, long carries, dismantling, storage or schedule changes affect your quote; charges depend on the agreed scope.</p>
        </div>
      </div>
    </section>
    <section className="cta-band service-overview-cta">
      <div className="shell">
        <h2>Ready to discuss your move?</h2>
        <p>Share your route, preferred date and a rough inventory to request a quote.</p>
        <a className="btn btn-primary btn-lg" href="/#quote-form">Tell us about your move</a>
      </div>
    </section>
  </>;
}

const moveSteps = [
  ['Share your move details', 'Provide the move type, pickup and destination PIN codes, preferred date and a rough inventory. Include bulky or fragile belongings.'],
  ['Survey, if needed', 'The business may need to review inventory, access or special handling before confirming the scope of your move.'],
  ['Review the quote', 'Check the route, services, schedule, inclusions, exclusions and charges in the written estimate before you book.'],
  ['Packing, as agreed', 'Confirm which items will be packed, who provides materials and whether unpacking is included.'],
  ['Loading', 'Confirm access and handling arrangements. Keep your item list available so belongings can be checked at handover.'],
  ['Transport', 'Confirm the route and expected schedule with the business for your move.'],
  ['Delivery', 'Check your belongings against the agreed inventory and note any issue at delivery.'],
  ['Unpacking and handover', 'Unpacking happens only if included in your agreed services. Ask for the written process to report any issue.'],
];

function HowItWorks() {
  return <>
    <section className="page-hero process-hero">
      <div className="shell">
        <p className="eyebrow">How it works</p>
        <h1>A clear plan for your move.</h1>
        <p className="lead">See the usual steps, from sharing your route to delivery and handover. The exact services and sequence depend on what is agreed for your move.</p>
        <a className="btn btn-primary" href="/#quote-form">Tell us about your move</a>
      </div>
    </section>
    <section className="process-guide">
      <div className="shell">
        <header className="process-guide__head">
          <p className="eyebrow">Your moving journey</p>
          <h2>What happens at each step</h2>
        </header>
        <ol className="process-steps">
          {moveSteps.map(([title, description], index) => <li className="process-step" key={title}>
            <span className="process-step__number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>)}
        </ol>
        <p className="process-guide__note">Confirm the final scope, timing and responsibilities in writing before booking.</p>
      </div>
    </section>
    <section className="cta-band service-overview-cta">
      <div className="shell">
        <h2>Ready to plan the details?</h2>
        <p>Have your route, preferred date and approximate inventory ready.</p>
        <a className="btn btn-primary btn-lg" href="/#quote-form">Request a quote</a>
      </div>
    </section>
  </>;
}

function LocationsPage() {
  return <>
    <section className="page-hero locations-hero">
      <div className="shell">
        <p className="eyebrow">Locations and routes</p>
        <h1>Check your route before you plan.</h1>
        <p className="lead">No verified city, branch or route coverage is published here yet. Confirm the exact pickup and destination with the business before making plans.</p>
        <a className="btn btn-primary" href="#route-details">What to share</a>
      </div>
    </section>
    <section className="locations-guide" id="route-details">
      <div className="shell locations-guide__grid">
        <img src="/img/service-longdistance.jpg" alt="Goods stored on warehouse shelves" loading="lazy" />
        <div>
          <p className="eyebrow">Check route availability</p>
          <h2>Share both ends of your move.</h2>
          <p>Coverage can depend on the locations, service and date. Include these details when you ask:</p>
          <ul>
            <li>Pickup city or locality and PIN code</li>
            <li>Destination city or locality and PIN code</li>
            <li>Move type and preferred date</li>
          </ul>
          <p>Ask the business to confirm availability for your exact route before booking.</p>
          <div className="locations-guide__links">
            <a href="/services/local-shifting">Local moving <span aria-hidden="true">→</span></a>
            <a href="/services/intercity-shifting">Intercity moving <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>
    <section className="cta-band service-overview-cta">
      <div className="shell">
        <h2>Have your route details ready?</h2>
        <p>Share your pickup, destination, move type and preferred date.</p>
        <a className="btn btn-primary btn-lg" href="/#quote-form">Prepare a quote enquiry</a>
      </div>
    </section>
  </>;
}

function QuotePage() {
  return <>
    <section className="page-hero quote-page-hero">
      <div className="shell">
        <p className="eyebrow">Get a quote</p>
        <h1>Tell us about your move.</h1>
        <p className="lead">Share your move type, pickup and destination, and mobile number. Add a preferred date and approximate inventory if you have them.</p>
      </div>
    </section>
    <section className="quote-page-section">
      <div className="shell">
        <QuoteWizard />
      </div>
    </section>
  </>;
}

function PageContent({ page }) {
  return <>
    <section className="page-hero"><div className="shell"><p className="eyebrow">Shree Shyam Packers &amp; Movers</p><h1>{page.title}</h1><p className="lead">{page.intro}</p><a className="btn btn-primary" href="/#quote-form">Request a quote</a></div></section>
    {page.sections?.length > 0 && <section className="section"><div className="shell page-content">{page.sections.map(([heading, text]) => <article key={heading}><h2>{heading}</h2><p>{text}</p></article>)}</div></section>}
    {page.links?.length > 0 && <section className="section section--soft"><div className="shell"><h2 className="h-xl">Explore</h2><div className="page-links">{page.links.map(([href, text]) => <a key={href} href={href}>{text}<span aria-hidden="true"> →</span></a>)}</div></div></section>}
    <section className="cta-band"><div className="shell"><h2>Planning a move?</h2><p>Share your route and basic move details to start an enquiry.</p><a className="btn btn-primary btn-lg" href="/#quote-form">Request a quote</a></div></section>
  </>;
}

export default function SitePage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const page = pages[path] || servicePages[path] || { title: 'Page not found', description: 'The requested page could not be found.', intro: 'This page is not available. Browse the moving services or return to the homepage.', links: [['/services', 'Moving services'], ['/', 'Home']] };

  useEffect(() => {
    document.title = `${page.title} | Shree Shyam Packers & Movers`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = page.description;
    const setMeta = (selector, attribute, value) => {
      let tag = document.querySelector(selector);
      if (!tag) { tag = document.createElement('meta'); document.head.appendChild(tag); }
      tag.setAttribute(attribute, value);
    };
    setMeta('meta[property="og:title"]', 'content', document.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[name="robots"]', 'content', ['/locations/city-template', '/routes/route-template', '/quote/confirmation', '/track'].includes(path) ? 'noindex,follow' : 'index,follow');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${window.location.origin}${path}`;
  }, [page, path]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteNav />
    <main id="main">{path === "/services" ? <ServicesOverview /> : path === "/services/home-shifting" ? <HomeShiftingPage /> : path === "/services/local-shifting" ? <LocalShiftingPage /> : path === "/services/intercity-shifting" ? <IntercityShiftingPage /> : path === "/pricing" ? <PricingGuide /> : path === "/how-it-works" ? <HowItWorks /> : path === "/locations" ? <LocationsPage /> : path === "/quote" ? <QuotePage /> : path === "/contact" ? <ContactPage /> : <PageContent page={page} />}</main>
    <SiteFooter />
  </>;
}
