"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
};

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Sparkles className="h-3.5 w-3.5" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {desc ? (
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {desc}
            </p>
          ) : null}
        </div>

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative flex items-start gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-white">
          {icon}
        </div>
        <div>
          <p className="text-lg font-semibold text-white">{title}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      <Check className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

export default function Page() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 60]);
  const heroOpacity = useTransform(scrollY, [0, 280], [1, 0.6]);

  const phone = "+123 456 7890"; // <- replace
  const whatsapp = "https://wa.me/1234567890"; // <- replace (digits only)

  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-[-220px] left-[-200px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-[-220px] right-[-200px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.16),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_40%,rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.25]" />
      </div>

      {/* Sticky Nav */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#070A0F]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
              <Package className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">Dispotraders</span>
          </div>

          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#why">Why</a>
            <a className="hover:text-white" href="#products">Products</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsapp}
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 sm:inline-flex"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              Get offer <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex flex-wrap items-center gap-2"
            >
              <Pill>Fast delivery in Quetta</Pill>
              <Pill>Clean & hygienic</Pill>
              <Pill>Affordable prices</Pill>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl"
            >
              Disposable tableware that looks clean,
              <span className="bg-gradient-to-r from-indigo-300 via-cyan-200 to-pink-200 bg-clip-text text-transparent">
                {" "}works fast{" "}
              </span>
              and saves time.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              Cups, plates, containers, packaging and more — for shops, events and families.
              Simple ordering, quick response, reliable supply in Quetta (Hazara Town to Mari Abad).
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black shadow-lg shadow-white/10 hover:bg-white/90"
              >
                View products <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={whatsapp}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white hover:bg-white/10"
              >
                WhatsApp order <Phone className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Floating highlight cards */}
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { t: "Hygienic supply", d: "Packed & ready to use — clean service for your customers.", i: <ShieldCheck className="h-5 w-5" /> },
              { t: "Quick response", d: "Fast replies and simple ordering via WhatsApp or call.", i: <Timer className="h-5 w-5" /> },
              { t: "Bulk friendly", d: "Events, shops and families — we handle small to bulk orders.", i: <Package className="h-5 w-5" /> },
            ].map((x, i) => (
              <motion.div
                key={x.t}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                    {x.i}
                  </div>
                  <p className="font-semibold">{x.t}</p>
                </div>
                <p className="mt-3 text-sm text-white/70">{x.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <div id="why" className="h-px" />
      <Section
        eyebrow="Why Dispotraders"
        title="Simple, clean, reliable."
        desc="A modern supplier mindset: fast delivery, consistent quality, easy ordering."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Hygienic & safe"
            text="Disposable tableware helps you serve cleanly — perfect for shops, street food and events."
          />
          <Card
            icon={<Timer className="h-5 w-5" />}
            title="Save time"
            text="No washing, no stress. Use and move on — focus on your business."
          />
          <Card
            icon={<Package className="h-5 w-5" />}
            title="Product range"
            text="Plastic and aluminum options — cups, plates, containers, packaging."
          />
          <Card
            icon={<Check className="h-5 w-5" />}
            title="Affordable pricing"
            text="Good value for daily use and bulk orders."
          />
        </div>
      </Section>

      {/* PRODUCTS */}
      <div id="products" className="h-px" />
      <Section
        eyebrow="Products"
        title="Best sellers (editable)"
        desc="Start with these. Later you can add real products + pictures."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Cups", info: "Cold & hot drink cups, lids available." },
            { name: "Plates & bowls", info: "Disposable plates and bowls for daily use." },
            { name: "Containers", info: "Food containers for takeaway & delivery." },
            { name: "Aluminum trays", info: "Heat-friendly trays and foil options." },
            { name: "Cutlery", info: "Disposable spoons, forks and knives." },
            { name: "Packaging", info: "Simple packaging solutions for shops." },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{p.name}</p>
                <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white/80" />
              </div>
              <p className="mt-3 text-sm text-white/70">{p.info}</p>
              <div className="mt-5 flex gap-2 text-xs text-white/60">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Bulk
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Quick order
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <div id="about" className="h-px" />
      <Section
        eyebrow="About"
        title="Local supply for Quetta."
        desc="From Hazara Town to Mari Abad — we support shops, vendors and families with clean disposable solutions."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-white/80">
              We supply high-quality disposable tableware for Quetta. Our goal is simple:
              <span className="text-white"> clean, affordable, convenient.</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Shops</Pill>
              <Pill>Events</Pill>
              <Pill>Families</Pill>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Service area</p>
                <p className="mt-2 text-sm text-white/70">
                  Main Kirani Road, Hussain Abad, Hazara Town, Quetta
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <div id="contact" className="h-px" />
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  <Phone className="h-3.5 w-3.5" />
                  Contact
                </div>
                <h3 className="mt-4 text-3xl font-extrabold tracking-tight">
                  Get a quick offer today.
                </h3>
                <p className="mt-4 text-white/70">
                  Tell us what you need (cups, plates, containers). We answer fast.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsapp}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black hover:bg-white/90"
                  >
                    WhatsApp <ArrowRight className="h-5 w-5" />
                  </a>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white hover:bg-white/10"
                  >
                    Call {phone}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="font-semibold">Location</p>
                <p className="mt-2 text-sm text-white/70">
                  Main Kirani Road, Hussain Abad, Hazara Town, Quetta
                </p>
                <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps?q=Hazara%20Town%20Quetta&output=embed"
                    width="100%"
                    height="260"
                    loading="lazy"
                    className="block"
                  />
                </div>
                <p className="mt-4 text-xs text-white/50">
                  Replace map URL later with your exact pin.
                </p>
              </div>
            </div>
          </div>

          <footer className="py-10 text-center text-sm text-white/45">
            © {new Date().getFullYear()} Dispotraders
          </footer>
        </div>
      </section>
    </main>
  );
}

