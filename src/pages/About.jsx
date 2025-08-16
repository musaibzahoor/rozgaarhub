export default function About() {
  return (
    <section className="section container-px mx-auto">
      <h1 className="h1 mb-4">About RozgaarHub</h1>
      <p className="p">RozgaarHub connects skilled workers in Tier-2/3 cities with employers. We keep things simple: post a job, match with local talent, complete the work, and leave a review.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div>
          <h3 className="font-semibold">1. Post</h3>
          <p className="p">Create a job with budget and date.</p>
        </div>
        <div>
          <h3 className="font-semibold">2. Match</h3>
          <p className="p">Browse workers or receive applications.</p>
        </div>
        <div>
          <h3 className="font-semibold">3. Complete</h3>
          <p className="p">Finish work and rate to build trust.</p>
        </div>
      </div>
      <h2 className="h2 mt-8">Why we’re different</h2>
      <ul className="list-disc pl-6 mt-2 text-gray-700">
        <li>Upfront transport cost lock-in</li>
        <li>Verified local worker network</li>
        <li>Friendly, mobile-first design</li>
      </ul>
    </section>
  )
}
