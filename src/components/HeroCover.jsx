import Spline from '@splinetool/react-spline';
import { MapPin, Languages, Mic, Sprout } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[78vh] md:h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/CoqJ4UdBiLF2djJK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-neutral-950/90" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs md:text-sm text-white/80 ring-1 ring-white/15">
              <Sprout className="size-4" />
              Smart Crop Advisory • Farm, pixel, game
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
              Empowering small farmers with real-time, local crop intelligence
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-2xl">
              Multilingual, AI-powered guidance for crop selection, soil health, weather alerts, and pest detection — tailored to your farm and delivered in your language.
            </p>

            <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
              <button className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 transition">
                <MapPin className="size-4" />
                Use my location
              </button>
              <button className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white px-4 py-2 transition">
                <Languages className="size-4" />
                Choose language
              </button>
              <button className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white px-4 py-2 transition">
                <Mic className="size-4" />
                Voice mode
              </button>
            </div>

            <div className="mt-6 text-xs md:text-sm text-white/60">
              Serving small and marginal farmers with localized insights and simple experiences.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
