export default function ProblemImpact() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Why this matters</h2>
            <p className="mt-4 text-white/80">
              A majority of small and marginal farmers rely on traditional knowledge or shopkeeper advice for key decisions like crop selection, pest control, and fertilizer use. Without real-time, personalized guidance, they risk low yields, higher costs, and environmental harm.
            </p>
            <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/70">
                86% of Indian farmers are small or marginal (NABARD, 2022). Equipping them with modern, localized advisory can boost productivity, reduce input costs, and support sustainable agriculture.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium">Key challenges</h3>
              <ul className="mt-3 list-disc list-inside text-sm text-white/70 space-y-1">
                <li>Lack of personalized, real-time advisory based on soil and weather</li>
                <li>Language barriers and low digital literacy</li>
                <li>Overuse of chemicals causing higher costs and soil degradation</li>
                <li>Fragmented access to market prices and best practices</li>
              </ul>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium">Impact</h3>
              <ul className="mt-3 list-disc list-inside text-sm text-white/70 space-y-1">
                <li>Better yields with site-specific crop and fertilizer advice</li>
                <li>Lower input costs and reduced risk from weather shocks</li>
                <li>Sustainable practices for long-term soil health</li>
                <li>Improved livelihoods and food security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
