"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import type { Variants } from "framer-motion";
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
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
    <section id={id} className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          {desc ? (
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {desc}
            </p>
          ) : null}
        </div>

        {children ? <div className="mt-16">{children}</div> : null}
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
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="relative flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs font-medium text-muted-foreground">
      <Check className="h-3.5 w-3.5 text-primary" />
      {children}
    </span>
  );
}

function CupIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 11h14l-1.5 10h-11L5 11Z" />
      <path d="M5.5 11V8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3" />
      <path d="M9 11v10" />
    </svg>
  );
}

function PlateIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 12a5 5 0 1 0 5 5" />
    </svg>
  );
}

function BackgroundParticles() {
  const particles = React.useMemo(() => {
    const particleTypes = [CupIcon, PlateIcon];
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      Icon: particleTypes[i % 2],
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: Math.random() * 24 + 16,
        height: Math.random() * 24 + 16,
        opacity: Math.random() * 0.1 + 0.05,
      },
      animate: {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
      },
      transition: {
        duration: Math.random() * 20 + 20,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "linear" as const,
        delay: Math.random() * 5,
      },
    }));
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={particle.style}
          animate={particle.animate}
          transition={particle.transition}
        >
          <particle.Icon className="h-full w-full text-muted-foreground/50" />
        </motion.div>
      ))}
    </>
  );
}

export default function Page() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 60]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const phone = "+123 456 7890"; // <- replace
  const whatsapp = "https://wa.me/1234567890"; // <- replace (digits only)

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      {/* Background Gradients */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute top-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-3xl" />
        <BackgroundParticles />
      </div>

      {/* Sticky Nav */}
      <div className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Package className="h-5 w-5" />
            </div>
            <span className="font-bold tracking-tight text-foreground">Dispotraders</span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#why">Why</a>
            <a className="transition-colors hover:text-foreground" href="#products">Products</a>
            <a className="transition-colors hover:text-foreground" href="#about">About</a>
            <a className="transition-colors hover:text-foreground" href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsapp}
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Get offer <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative z-10 pt-28 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 inline-flex flex-wrap items-center gap-2"
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
              className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
            >
              Disposable tableware that looks clean,
              <span className="text-muted-foreground"> works fast </span>
              and saves time.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
            >
              Cups, plates, containers, packaging and more — for shops, events and families.
              Simple ordering, quick response, reliable supply in Quetta (Hazara Town to Mari Abad).
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                View products <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsapp}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary hover:border-secondary-foreground/10"
              >
                WhatsApp order <Phone className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Floating highlight cards */}
          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            {[
              { t: "Hygienic supply", d: "Packed & ready to use — clean service for your customers.", i: <ShieldCheck className="h-5 w-5" /> },
              { t: "Quick response", d: "Fast replies and simple ordering via WhatsApp or call.", i: <Timer className="h-5 w-5" /> },
              { t: "Bulk friendly", d: "Events, shops and families — we handle small to bulk orders.", i: <Package className="h-5 w-5" /> },
            ].map((x, i) => (
              <motion.div
                key={x.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    {x.i}
                  </div>
                  <p className="font-semibold text-foreground">{x.t}</p>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{x.d}</p>
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
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Hygienic & safe"
            text="Disposable tableware helps you serve cleanly — perfect for shops, street food and events."
          />
          <Card
            icon={<Timer className="h-6 w-6" />}
            title="Save time"
            text="No washing, no stress. Use and move on — focus on your business."
          />
          <Card
            icon={<Package className="h-6 w-6" />}
            title="Product range"
            text="Plastic and aluminum options — cups, plates, containers, packaging."
          />
          <Card
            icon={<Check className="h-6 w-6" />}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-foreground">{p.name}</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.info}</p>
              <div className="mt-5 flex gap-2 text-xs font-medium text-muted-foreground/80">
                <span className="rounded-full bg-secondary px-2.5 py-0.5">
                  Bulk
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-0.5">
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
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We supply high-quality disposable tableware for Quetta. Our goal is simple:
              <span className="font-medium text-foreground"> clean, affordable, convenient.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Pill>Shops</Pill>
              <Pill>Events</Pill>
              <Pill>Families</Pill>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Service area</p>
                <p className="mt-2 text-muted-foreground">
                  Main Kirani Road, Hussain Abad, Hazara Town, Quetta
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <div id="contact" className="h-px" />
      <section className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-10 sm:p-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Phone className="h-3.5 w-3.5" />
                  Contact
                </div>
                <h3 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Get a quick offer today.
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  Tell us what you need (cups, plates, containers). We answer fast.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsapp}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                  >
                    WhatsApp <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
                  >
                    Call {phone}
                  </a>
                </div>
              </div>

              <div className="relative min-h-[300px] border-t border-border bg-secondary/20 md:border-t-0 md:border-l">
                <div className="absolute inset-0 p-6">
                  <div className="h-full w-full overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps?q=Hazara%20Town%20Quetta&output=embed"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className="block h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-16 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dispotraders. All rights reserved.
          </footer>
        </div>
      </section>
    </main>
  );
}