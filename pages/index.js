
import Link from 'next/link'

import Head from 'next/head'

export default function Home(){
  return (
    <>
    <Head>
        <title>AutoBooked AI — Done‑for‑you appointment setting</title>
        <meta name="description" content="We handle outreach and replies to put qualified meetings straight on your calendar. Try our free 15‑day trial." />
      </Head>

    <section className="container">
      {/* Hero */}
      <div className="centerwrap">
        <h1 className="h1">Done‑for‑you appointment setting, not more software to learn.</h1>
        <p className="subtle" style={{fontSize:'1.1rem'}}>
          We take missed calls, cold leads and half‑interested enquiries and turn them into <strong>booked appointments</strong> on your calendar.
          No chasing. No guesswork. Just conversations that move work forward.
        </p>
        <div className="mt1">
          <Link href="/book" className="btn" onClick={()=>window.gtag&&window.gtag("event","start_trial")}>Start Your 15‑Day Free Trial</Link>
          <span style={{display:'inline-block', width:12}}/>
          <Link href="/pricing" className="btn-outline" onClick={()=>window.gtag&&window.gtag("event","view_pricing")}>See Pricing</Link>
        </div>
        <p className="faint mt1">No obligation. Cancel anytime. Introductory pricing — lock in your rate before it resets to market.</p>
      </div>

      {/* What we do */}
      <div className="card mt2 maxwrap">
        <h3>What we do</h3>
        <p className="subtle">
          We run respectful outreach across email, LinkedIn and SMS, handle replies like a switched‑on SDR, and book qualified meetings directly into your calendar.
          You get a reliable pipeline without hiring a full team.
        </p>
      </div>

      {/* How we're different */}
      <div className="grid4 mt2 maxwrap">
        {[
          {t:'Meetings, not just leads', d:'We measure ourselves on booked appointments and show‑ups — not vanity metrics.'},
          {t:'Human + automation', d:'Smart automation for speed, with a real person approving important threads.'},
          {t:'Respectful outreach', d:'No spam blasts. Tight targeting, conversational scripts, proper opt‑outs.'},
          {t:'Clear reporting', d:'Short weekly summaries: conversations started, meetings booked, what messages worked.'},
        ].map((c,i)=>(
          <div key={i} className="card">
            <h3>{c.t}</h3>
            <p className="subtle">{c.d}</p>
          </div>
        ))}
      </div>

      {/* How it works mini */}
      <div className="card mt2 maxwrap">
        <h3>How it works</h3>
        <ol className="list">
          <li><strong>Plan:</strong> Quick call to confirm your ideal customer and best offers.</li>
          <li><strong>Launch:</strong> We start conversations across email, LinkedIn and SMS (plus missed‑call text‑back if needed).</li>
          <li><strong>Book:</strong> We handle replies and put qualified meetings onto your calendar with reminders to reduce no‑shows.</li>
          <li><strong>Improve:</strong> Weekly tweaks to targeting, subject lines and scripts to keep results climbing.</li>
        </ol>
      </div>

      {/* Sample Results (illustrative) */}
      <div className="card mt2 maxwrap">
        <h3>Sample results (illustrative)</h3>
        <p className="faint" style={{marginTop:'.25rem'}}>These are realistic examples of what our system is designed to achieve. Actual results vary by industry and offer.</p>
        <div className="grid4 mt1" style={{gridTemplateColumns:'repeat(3,minmax(0,1fr))'}}>
          <div className="card">
            <h3>Local mechanics</h3>
            <p className="subtle">30–45 booked jobs / month after week 3, show‑rate ~78% with SMS reminders.</p>
          </div>
          <div className="card">
            <h3>Property services</h3>
            <p className="subtle">12–20 valuation meetings / month, 3–5 active quotes weekly.</p>
          </div>
          <div className="card">
            <h3>B2B agency</h3>
            <p className="subtle">8–15 sales calls / month with director‑level prospects in a narrow niche.</p>
          </div>
        </div>
      </div>


{/* Testimonials */}
      <div className="mt2 maxwrap">
        <h3>What clients say</h3>
        <div className="testimonials">
          <div className="quote"><p className="subtle">“Clear communication and real meetings in the diary. We could finally plan the week.”</p><p className="faint">— L.T., Agency Owner</p></div>
          <div className="quote"><p className="subtle">“The reminders alone saved our no-shows. The calendar actually looks healthy now.”</p><p className="faint">— S.M., Clinic Manager</p></div>
          <div className="quote"><p className="subtle">“Respectful outreach and no spam. Our brand feels protected, and we’re busier.”</p><p className="faint">— J.R., Trades Director</p></div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt2 maxwrap faq">
        <h3>FAQ</h3>
        <details>
          <summary>How does the 15‑day free trial work?</summary>
          <div className="subtle">We set up a small, focused campaign so you can see the process and early outcomes. Cancel any time during the trial.</div>
        </details>
        <details>
          <summary>Do you sell leads?</summary>
          <div className="subtle">No. We handle outreach and replies, and we book qualified meetings into your calendar.</div>
        </details>
        <details>
          <summary>Which channels do you use?</summary>
          <div className="subtle">Email, LinkedIn and SMS by default, plus missed‑call text‑back and chat widget if you want them.</div>
        </details>
        <details>
          <summary>Can you work with my CRM and calendar?</summary>
          <div className="subtle">Yes — we’ll integrate with the tools you already use and route bookings to the right calendars.</div>
        </details>
      
        <details>
          <summary>How do you handle GDPR?</summary>
          <p className="subtle">We use legitimate interest where appropriate, minimize data, and honor opt-outs and deletion requests promptly.</p>
        </details>
        <details>
          <summary>Can we approve messaging?</summary>
          <p className="subtle">Yes. We share initial sequences and handle important reply threads with human approval where needed.</p>
        </details>
        <details>
          <summary>What CRMs and calendars do you support?</summary>
          <p className="subtle">Google/Outlook calendars plus HubSpot and Salesforce are supported out of the box.</p>
        </details>
        <details>
          <summary>What happens after the trial?</summary>
          <p className="subtle">You can pick a plan or cancel. Meetings already booked remain in your calendar either way.</p>
        </details>
        <details>
          <summary>How quickly can we start?</summary>
          <p className="subtle">Setup typically begins within 3–5 business days once we confirm ICP and access.</p>
        </details>
</div>{/* FAQ schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How does the 15‑day free trial work?", "acceptedAnswer": {"@type": "Answer", "text": "We set up a small, focused campaign so you can see the process and early outcomes. Cancel any time during the trial."}}, {"@type": "Question", "name": "Do you sell leads?", "acceptedAnswer": {"@type": "Answer", "text": "No. We handle outreach and replies, and we book qualified meetings into your calendar."}}, {"@type": "Question", "name": "Which channels do you use?", "acceptedAnswer": {"@type": "Answer", "text": "Email, LinkedIn and SMS by default, plus missed‑call text‑back and chat widget if you want them."}}, {"@type": "Question", "name": "Can you work with my CRM and calendar?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — we’ll integrate with the tools you already use and route bookings to the right calendars."}}]}) }} />

      {/* New customer offer */}
      <div className="card mt2 maxwrap" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem'}}>
        <div>
          <h3>New customer offer</h3>
          <p className="subtle">15‑day free trial. No obligation. We’ll prove the system works before you commit.</p>
        </div>
        <Link href="/book" className="btn" onClick={()=>window.gtag&&window.gtag("event","start_trial")}>Start Free Trial</Link>
      </div>
    </section>
        </>
  )
}
