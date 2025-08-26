import Head from 'next/head'

export default function About(){
  return (
    <>
      <Head>
        <title>About — AutoBooked AI</title>
        <meta
          name="description"
          content="AutoBooked AI blends smart automation with human judgment to book qualified meetings for B2B teams."
        />
      </Head>

      {/* HERO */}
      <section className="container mt2 section">
        <h1 className="h1">About AutoBooked AI</h1>
        <p className="lead" style={{maxWidth:800}}>
          We help good businesses start more good conversations. AutoBooked AI blends smart
          automation with human judgment to book qualified meetings—without the spammy tactics.
        </p>
      </section>

      {/* STORY */}
      <section className="container section">
        <div className="card">
          <h2 style={{margin:'0 0 .5rem 0'}}>Our story</h2>
          <p className="subtle" style={{margin:0, lineHeight:1.7}}>
            We saw founders and sales teams burning hours on manual outreach that didn’t feel human.
            So we built a service that focuses on what actually matters: respectful conversations
            that lead to calls. We learn your ICP, set up channels properly, handle replies like a
            switched-on SDR, then measure and iterate—week after week.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="container section">
        <h2 style={{margin:'0 0 .5rem 0'}}>What we stand for</h2>
        <div className="grid3 mt1">
          <div className="card">
            <h3 className="card-title">Respect over volume</h3>
            <p className="subtle">No blasts. Conversation-led messages that protect your brand.</p>
          </div>
          <div className="card">
            <h3 className="card-title">AI + human approval</h3>
            <p className="subtle">Fast drafting with human eyes on important threads.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Calendar-first</h3>
            <p className="subtle">Routing, reminders and rescheduling to lift show-rates.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Transparent data</h3>
            <p className="subtle">Weekly summaries: conversations started, meetings booked.</p>
          </div>
          <div className="card">
            <h3 className="card-title">GDPR aligned</h3>
            <p className="subtle">Legitimate-interest outreach with sensible data handling.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Iterate fast</h3>
            <p className="subtle">Tight feedback loops to improve copy and targeting.</p>
          </div>
        </div>
      </section>

      {/* PROCESS SNAPSHOT */}
      <section className="container section">
        <h2 style={{margin:'0 0 .5rem 0'}}>How we work</h2>
        <div className="grid3 mt1">
          <div className="card">
            <h4 style={{margin:'0 0 .25rem 0'}}>1) Plan</h4>
            <p className="subtle">ICP, offers, outcomes and calendar routing agreed.</p>
          </div>
          <div className="card">
            <h4 style={{margin:'0 0 .25rem 0'}}>2) Launch</h4>
            <p className="subtle">Multi-channel sequences go live; replies handled for you.</p>
          </div>
          <div className="card">
            <h4 style={{margin:'0 0 .25rem 0'}}>3) Improve</h4>
            <p className="subtle">Weekly reporting and tweaks that compound results.</p>
          </div>
        </div>
      </section>

      {/* SIMPLE STATS */}
      <section className="container section">
        <div className="grid3">
          <div className="card" style={{textAlign:'center'}}>
            <div style={{fontWeight:800, fontSize:'1.6rem'}}>27</div>
            <div className="faint">demos in 30 days (SaaS)</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <div style={{fontWeight:800, fontSize:'1.6rem'}}>11/mo</div>
            <div className="faint">strategy calls (Agency)</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <div style={{fontWeight:800, fontSize:'1.6rem'}}>+38%</div>
            <div className="faint">show-rate uplift (Consulting)</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container section" style={{textAlign:'center'}}>
        <h2 style={{margin:'0 0 .5rem 0'}}>Ready to see it on your calendar?</h2>
        <p className="subtle" style={{margin:'0 0 1rem 0'}}>Try the 15-day free trial — no obligation.</p>
        <a href="/book" className="btn">Start Free Trial</a>
      </section>
    </>
  )
}
