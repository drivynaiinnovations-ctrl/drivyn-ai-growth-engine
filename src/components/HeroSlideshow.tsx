import { useEffect, useState } from "react";
import { ChefHat, Wrench, Store, Briefcase, Shield, PawPrint } from "lucide-react";
import restaurant from "@/assets/hero-restaurant.jpg";
import plumber from "@/assets/hero-plumber.jpg";
import retail from "@/assets/hero-retail.jpg";
import smallbiz from "@/assets/hero-smallbiz.jpg";
import security from "@/assets/hero-security.jpg";
import dogwalker from "@/assets/hero-dogwalker.jpg";

const SLIDES = [
  { src: restaurant, label: "Restaurants",        Icon: ChefHat },
  { src: plumber,    label: "Emergency Services", Icon: Wrench },
  { src: dogwalker,  label: "Pet Services",       Icon: PawPrint },
  { src: retail,     label: "Brick & Mortar",     Icon: Store },
  { src: security,   label: "Security",           Icon: Shield },
  { src: smallbiz,   label: "Small Business",     Icon: Briefcase },
];

export function HeroSlideshow() {
  const [collageDone, setCollageDone] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setCollageDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!collageDone) return;
    const id = setInterval(() => setActive(a => (a + 1) % SLIDES.length), 4500);
    return () => clearInterval(id);
  }, [collageDone]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Collage on load */}
      {!collageDone && (
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-[2px] animate-[reveal-up_0.6s_ease-out_both]">
          {SLIDES.map((s, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={s.src} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>
      )}

      {/* Slideshow */}
      {collageDone && SLIDES.map((s, i) => {
        const Icon = s.Icon;
        const isActive = i === active;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${isActive ? "opacity-100" : "opacity-0"}`}
            aria-hidden={!isActive}
          >
            <img
              src={s.src}
              alt={s.label}
              className={`h-full w-full object-cover ${isActive ? "ken-burns" : ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
            <div className="absolute right-6 top-24 md:right-10 md:top-28 inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 text-xs font-medium text-white">
              <Icon className="h-4 w-4 text-primary" />
              <span className="tracking-wide uppercase">{s.label}</span>
            </div>
          </div>
        );
      })}

      {/* Bottom gradient for text legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  );
}
