import { Star } from "lucide-react";

type Review = {
  name: string;
  role?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: "Emma Richardson",
    role: "Homeowner · Manchester",
    rating: 5,
    text: "Really happy with the whole experience. The engineer arrived on time, explained everything clearly and left the place tidy. The cameras are very clear, even at night.",
  },
  {
    name: "Ahmed Khan",
    role: "Convenience Store Owner · Birmingham",
    rating: 5,
    text: "We needed CCTV done quickly and these guys delivered. Clean wiring, no mess, and the system works exactly as promised. Would definitely recommend.",
  },
  {
    name: "James Whitaker",
    role: "Property Manager · London",
    rating: 5,
    text: "Professional service from start to finish. Communication was spot on and the installation across multiple flats went smoothly. No issues since.",
  },
];

const avg =
  Math.round(
    (REVIEWS.reduce((s, r) => s + r.rating, 0) / Math.max(1, REVIEWS.length)) *
      10,
  ) / 10;

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < value;
        return (
          <Star
            key={i}
            className={[
              "h-4 w-4",
              filled ? "fill-amber-400 text-amber-400" : "text-neutral-300",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-6xl px-5">
        {/* header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide text-blue-600">
              CUSTOMER REVIEWS
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Trusted by homeowners & businesses
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-600">
              Real feedback from clients we’ve helped with CCTV, alarms, and
              security installations.
            </p>
          </div>

          {/* rating summary */}
          <div className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-neutral-900">{avg}</div>
              <div>
                <Stars value={Math.round(avg)} />
                <p className="mt-1 text-sm text-neutral-600">
                  Based on {REVIEWS.length} reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <Stars value={r.rating} />
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                “{r.text}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-600/10 text-sm font-bold text-blue-700">
                  {r.name
                    .split(" ")
                    .slice(0, 2)
                    .map((x) => x[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {r.name}
                  </p>
                  {r.role ? (
                    <p className="text-xs text-neutral-500">{r.role}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-neutral-100" />
              <p className="mt-4 text-xs text-neutral-500">
                Verified installation client
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
