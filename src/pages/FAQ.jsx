const faqs = [
  { q: 'How do I hire a worker?', a: 'Post a job or browse workers, then contact or request to apply.' },
  { q: 'How are payments handled?', a: 'Currently offline; future versions will support escrow.' },
  { q: 'What about transport?', a: 'You can mark Transport Required; costs are shown upfront (dummy for now).' },
  { q: 'Are workers verified?', a: 'Workers build trust via ratings and reviews; verification is in roadmap.' },
  { q: 'Is there support?', a: 'Yes, you can contact us via the Contact page.' },
  { q: 'Which cities are supported?', a: 'Focus on Kashmir region initially; expanding soon.' }
]
export default function FAQ() {
  return (
    <section className="section container-px mx-auto">
      <h1 className="h1 mb-4">FAQ</h1>
      <div className="space-y-4">
        {faqs.map((f,i)=>(
          <details key={i} className="bg-white border rounded-md p-4">
            <summary className="font-semibold cursor-pointer">{f.q}</summary>
            <p className="p mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
