import { Sprout, CloudSun, Bug, Image as ImageIcon, IndianRupee, ShieldCheck, Languages, Mic } from 'lucide-react';

const features = [
  {
    title: 'Crop & Soil Advisory',
    desc: 'Personalized crop selection and fertilizer guidance using soil type and crop history.',
    icon: Sprout,
  },
  {
    title: 'Weather Intelligence',
    desc: 'Location-specific forecasts, extreme weather alerts, and irrigation timing tips.',
    icon: CloudSun,
  },
  {
    title: 'Pest & Disease Detection',
    desc: 'Upload field images to detect pests/diseases and get treatment recommendations.',
    icon: Bug,
  },
  {
    title: 'Image & Voice Support',
    desc: 'Low-literate friendly voice guidance and image-based diagnosis workflows.',
    icon: ImageIcon,
  },
  {
    title: 'Market Prices',
    desc: 'Near real-time mandi prices to help decide when and where to sell produce.',
    icon: IndianRupee,
  },
  {
    title: 'Multilingual & Safe',
    desc: 'Advisory in local languages with safety-first recommendations.',
    icon: ShieldCheck,
  },
  {
    title: 'Local Languages',
    desc: 'Supports Hindi, English, and more regional languages as the system grows.',
    icon: Languages,
  },
  {
    title: 'Hands-free Mode',
    desc: 'Ask questions and receive answers via voice for easy, on-field use.',
    icon: Mic,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold">What you can do</h2>
          <p className="mt-3 text-white/75">
            A unified, farmer-first app that brings AI insights, weather, pests, and markets into a single, simple experience.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-emerald-500/20 text-emerald-400 p-2">
                  <f.icon className="size-5" />
                </div>
                <h3 className="font-medium">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
