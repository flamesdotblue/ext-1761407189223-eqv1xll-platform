import { Users, Sprout } from 'lucide-react';

export default function StakeholdersCTA() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/15">
              <Users className="size-4" />
              Stakeholders
            </div>
            <h3 className="mt-3 text-xl md:text-2xl font-semibold">Who benefits</h3>
            <ul className="mt-4 text-sm text-white/75 space-y-2 list-disc list-inside">
              <li>Small and marginal farmers</li>
              <li>Agricultural extension officers</li>
              <li>Government agriculture departments</li>
              <li>NGOs, cooperatives, and FPOs</li>
              <li>Agri-tech startups and ecosystem partners</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/15">
              <Sprout className="size-4" />
              Get involved
            </div>
            <h3 className="mt-3 text-xl md:text-2xl font-semibold">Pilot and feedback</h3>
            <p className="mt-3 text-sm text-white/80">
              Partner with us to run pilots in target districts, localize languages, and co-create farmer-first workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 transition">
                Start a pilot
              </button>
              <button className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white px-4 py-2 transition">
                Share feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
