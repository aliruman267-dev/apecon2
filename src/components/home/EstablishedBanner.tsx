import { Link } from "react-router-dom";

import bgStrip from "@/assets/bg-strip.png";
import ringImg from "@/assets/ring.png";

export default function EstablishedBanner() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        {/* Desktop / Tablet (wide banner) */}
        <div className="relative hidden sm:block overflow-hidden rounded-2xl border border-border bg-background shadow-md">
          {/* background image */}
          <img
            src={bgStrip}
            alt="Established banner background"
            className="h-[140px] md:h-[170px] w-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />

          {/* content */}
          <div className="absolute inset-0 flex items-center gap-8 px-6 md:px-10">
            {/* left decor ring */}
            {/* left column (ring centered) */}
            <div className="flex w-[140px] md:w-[180px] items-center justify-center">
              <img
                src={ringImg}
                alt=""
                className="pointer-events-none h-28 w-28 md:h-36 md:w-36 opacity-60"
              />
            </div>

            {/* center text (SAME as image) */}
            <div className="flex-1">
              <div className="text-white">
                <div className="text-sm md:text-base font-extrabold tracking-wide opacity-95">
                  WE HAVE BEEN
                </div>

                {/* ✅ cyan highlight bar like image */}
                <div className="mt-2 inline-flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 -skew-x-6 rounded-sm bg-cyan-400/90" />
                    <div className="relative px-3 py-1 text-xl md:text-3xl font-extrabold tracking-tight">
                      ESTABLISHED SINCE 2017
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-sm md:text-base text-white/85 font-medium">
                  IT Solutions • Cybersecurity • Cloud Services • Network
                  Infrastructure
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile (compact card) */}
        <div className="sm:hidden">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-md">
            {/* background image */}
            <img
              src={bgStrip}
              alt="Established banner background"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* content */}
            <div className="relative p-4">
              <div className="flex items-center gap-4">
                {/* left column (ring/logo centered) */}
                <div className="flex w-[88px] shrink-0 items-center justify-center">
                  <img
                    src={ringImg}
                    alt=""
                    className="pointer-events-none h-20 w-20 opacity-70"
                  />
                </div>

                {/* right column (text) */}
                <div className="flex-1 text-white">
                  <div className="text-xs font-extrabold tracking-wide opacity-95">
                    WE HAVE BEEN
                  </div>

                  {/* cyan bar */}
                  <div className="mt-2 inline-flex items-center">
                    <div className="relative">
                      <div className="absolute inset-0 -skew-x-6 rounded-sm bg-cyan-400/90" />
                      <div className="relative px-3 py-1 text-base font-extrabold tracking-tight">
                        ESTABLISHED SINCE 2017
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-white/85 font-medium leading-snug">
                    IT Solutions • Cybersecurity • Cloud Services • Network
                    Infrastructure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
