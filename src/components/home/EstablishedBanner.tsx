import { Link } from "react-router-dom";

import bgStrip from "@/assets/bg-strip.png";
import ringImg from "@/assets/ring.png";
import bgMobile from "@/assets/bg-mobile.png";

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
            <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] overflow-hidden   flex items-center justify-center">
              <img
                src={ringImg}
                alt=""
                className="pointer-events-none h-full w-full object-cover object-center  scale-125"
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
                    <div className="absolute inset-0 -skew-x-6 rounded-sm bg-primary" />
                    <div className="relative px-3 py-1 text-xl md:text-base font-extrabold tracking-tight">
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

        {/* Mobile (uses dedicated mobile background image) */}
        <div className="sm:hidden">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-md bg-black">
            {/* background image */}
            <img
              src={bgMobile}
              alt="Mobile banner background"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* overlay to improve contrast */}
            <div className="absolute inset-0 bg-black/35" />

            {/* content */}
            <div className="relative p-4">
              <div className="flex flex-col items-center text-center gap-3">
                {/* ring/logo */}
                <div className="h-[92px] w-[92px] overflow-hidden ">
                  <img
                    src={ringImg}
                    alt=""
                    className="h-full w-full object-cover object-center opacity-90 scale-150"
                  />
                </div>

                <div className="text-xs font-extrabold tracking-wide text-white/95">
                  WE HAVE BEEN
                </div>

                {/* highlight badge */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-2xl bg-primary/90" />
                  <div className="relative px-6 py-3 text-[16px] font-extrabold tracking-tight text-white leading-tight">
                    ESTABLISHED <br /> SINCE 2017
                  </div>
                </div>

                <div className="text-xs text-white/85 font-medium leading-snug px-2">
                  IT Solutions • Cybersecurity • Cloud Services • Network
                  Infrastructure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
