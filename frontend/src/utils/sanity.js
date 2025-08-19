export function runSanityTests(routes) {
  try {
    console.group('✅ Admin Panel Sanity Tests')

    // 1) Route count
    console.assert(routes.length === 7, 'Expected 7 routes')

    // 2) Paths present
    const expected = ['/', '/workers', '/employers', '/jobs', '/transport', '/payments', '/complaints']
    const paths = routes.map(r => r.path)
    expected.forEach(p => console.assert(paths.includes(p), `Missing route: ${p}`))

    // 3) No duplicate paths
    const set = new Set()
    paths.forEach(p => { console.assert(!set.has(p), `Duplicate route path: ${p}`); set.add(p) })

    // 4) Each route has label + element
    routes.forEach(r => {
      console.assert(typeof r.label === 'string' && r.label.trim().length > 0, `Missing label for ${r.path}`)
      console.assert(r.element != null, `Missing element for ${r.path}`)
    })

    console.groupEnd()
  } catch (e) {
    console.error('Sanity test error:', e)
  }
}
