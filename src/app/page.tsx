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
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/dictionaries';

/**
 * LAZY FIX: Keep ': any' to prevent TypeScript strict errors.
 */
const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
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
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
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

export default function Page() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 60]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // --- MAGIC: Detect Language & Load Dictionary ---
  const pathname = usePathname();
  const lang = pathname?.includes('/ur') ? 'ur' : 'en';
  const dict = getDictionary(lang);
  // ------------------------------------------------

  const phone = "+123 456 7890";
  const whatsapp = "https://wa.me/1234567890";

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      {/* Background Gradients */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
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
             {/* --- FIX: Removed 'hidden sm:block' so it shows on mobile --- */}
             <div className="block">
                <LanguageSwitcher />
             </div>
             
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
      <section className="relative z-10 pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 inline-flex flex-wrap items-center gap-2"
            >
              <Pill>{dict.hero.pill_delivery}</Pill>
              <Pill>{dict.hero.pill_hygiene}</Pill>
              <Pill>{dict.hero.pill_price}</Pill>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
            >
              {dict.hero.title_start}{" "}
              <span className="text-muted-foreground"> {dict.hero.title_highlight} </span>
              {" "}{dict.hero.title_end}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="mt-8 text-lg leading-8 text-muted-foreground sm:text-xl"
            >
              {dict.hero.description}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                {dict.hero.btn_products} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsapp}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-secondary hover:border-secondary-foreground/10"
              >
                {dict.hero.btn_whatsapp} <Phone className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Floating highlight cards (TRANSLATED) */}
          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            {[
              { t: dict.features.hygiene_title, d: dict.features.hygiene_desc, i: <ShieldCheck className="h-5 w-5" /> },
              { t: dict.features.response_title, d: dict.features.response_desc, i: <Timer className="h-5 w-5" /> },
              { t: dict.features.bulk_title, d: dict.features.bulk_desc, i: <Package className="h-5 w-5" /> },
            ].map((x, i) => (
              <motion.div
                key={i}
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

      {/* WHY (TRANSLATED) */}
      <div id="why" className="h-px" />
      <Section
        eyebrow={dict.why.eyebrow}
        title={dict.why.title}
        desc={dict.why.desc}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            icon={<ShieldCheck className="h-6 w-6" />}
            title={dict.why.card_1_title}
            text={dict.why.card_1_desc}
          />
          <Card
            icon={<Timer className="h-6 w-6" />}
            title={dict.why.card_2_title}
            text={dict.why.card_2_desc}
          />
          <Card
            icon={<Package className="h-6 w-6" />}
            title={dict.why.card_3_title}
            text={dict.why.card_3_desc}
          />
          <Card
            icon={<Check className="h-6 w-6" />}
            title={dict.why.card_4_title}
            text={dict.why.card_4_desc}
          />
        </div>
      </Section>

      {/* PRODUCTS (KEPT STATIC FOR NOW, or map if you add them to dict later) */}
      <div id="products" className="h-px" />
      <Section
        eyebrow="Products"
        title="Best sellers"
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

      {/* CONTACT (TRANSLATED) */}
      <div id="contact" className="h-px" />
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-sm">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="p-10 sm:p-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Phone className="h-3.5 w-3.5" />
                  {dict.contact.eyebrow}
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {dict.contact.title}
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  {dict.contact.desc}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsapp}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                  >
                    WhatsApp <ArrowRight className="h-5 w-5" />
                  </a>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
                  >
                    {dict.contact.btn_call} {phone}
                  </a>
                </div>
              </div>

              {/* Map remains the same */}
              <div className="relative min-h-[300px] border-t border-border bg-secondary/20 md:border-t-0 md:border-l">
                <div className="absolute inset-0 p-6">
                  <div className="h-full w-full overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                    <iframe
                      title="map"
                      src="http://googleusercontent.com/maps.google.com/maps?q=Quetta&t=&z=13&ie=UTF8&iwloc=&output=embed"
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