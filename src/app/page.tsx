"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Menu,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { usePathname } from 'next/navigation';
import { getDictionary, type Dictionary, type LanguageCode } from '@/lib/dictionaries';
import { FloatingShapes } from "@/components/FloatingShapes";

const HERO_SLIDES = [
  { src: "/op1.jpg", alt: "Disposable tableware products - cups" },
  { src: "/op2.jpg", alt: "Disposable tableware products - plates and bowls" },
  { src: "/op3.jpg", alt: "Disposable tableware products - containers" },
];

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

function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 shadow-[0_8px_30px_-12px_rgba(56,189,248,0.9)]">
        <div className="absolute -left-1 top-1 h-4 w-4 rounded-full bg-white/65 blur-[1px]" />
        <div className="absolute -right-2 -bottom-2 h-7 w-7 rounded-full bg-black/20" />
        <div className="absolute left-2.5 top-2.5 h-5 w-5 rounded-md border border-white/65" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">DISPO</p>
        <p className="text-base font-bold tracking-tight text-foreground">TRADERS</p>
      </div>
    </div>
  );
}

export default function Page() {
  const prefersReducedMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuToggleRef = useRef<HTMLButtonElement | null>(null);

  const pathname = usePathname();
  const lang: LanguageCode = pathname?.includes('/ur') ? 'ur' : 'en';
  const dict = getDictionary(lang);
  type ProductItem = Dictionary["products"]["items"][number];

  const phone = "+123 456 7890";
  const whatsapp = "https://wa.me/1234567890";

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (mobileMenuRef.current?.contains(target)) return;
      setMobileMenuOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("touchstart", closeOnOutsideClick, { passive: true });
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("touchstart", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, prefersReducedMotion ? 5000 : 3200);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleHeaderClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!mobileMenuOpen) return;
    const target = event.target as Node;
    if (mobileMenuToggleRef.current?.contains(target)) return;
    setMobileMenuOpen(false);
  };

  return (
    <main id="top" className="relative min-h-screen overflow-x-clip bg-background text-foreground selection:bg-primary/10">
      <FloatingShapes />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[12%] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute top-[28%] right-[-6%] h-[360px] w-[360px] rounded-full bg-cyan-500/5 blur-2xl" />
        <div className="absolute bottom-[-8%] left-[-6%] h-[360px] w-[360px] rounded-full bg-blue-500/5 blur-2xl" />
      </div>

      {/* Sticky Nav */}
      <div dir="ltr" className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div ref={mobileMenuRef} className="flex items-center justify-between" onClickCapture={handleHeaderClick}>
            <a
              href="#top"
              aria-label="Go to top"
              className="rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BrandLogo />
            </a>

            <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
              <a className="transition-colors hover:text-foreground" href="#why">{dict.navigation.why}</a>
              <a className="transition-colors hover:text-foreground" href="#products">{dict.navigation.products}</a>
              <a className="transition-colors hover:text-foreground" href="#about">{dict.navigation.about}</a>
              <a className="transition-colors hover:text-foreground" href="#contact">{dict.navigation.contact}</a>
            </div>

            <div className="flex items-center gap-3">
              <div className="block">
                <LanguageSwitcher />
              </div>

              <a
                href="#contact"
                className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:inline-flex"
              >
                {dict.navigation.get_offer} <ArrowRight className="h-4 w-4" />
              </a>
              <button
                ref={mobileMenuToggleRef}
                type="button"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary md:hidden"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div className="mt-4 rounded-2xl border border-border bg-card/95 p-3 shadow-lg backdrop-blur md:hidden">
              <div className="grid gap-1 text-sm font-medium text-muted-foreground">
                <a className="rounded-lg px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground" href="#why" onClick={() => setMobileMenuOpen(false)}>{dict.navigation.why}</a>
                <a className="rounded-lg px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground" href="#products" onClick={() => setMobileMenuOpen(false)}>{dict.navigation.products}</a>
                <a className="rounded-lg px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground" href="#about" onClick={() => setMobileMenuOpen(false)}>{dict.navigation.about}</a>
                <a className="rounded-lg px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground" href="#contact" onClick={() => setMobileMenuOpen(false)}>{dict.navigation.contact}</a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  {dict.navigation.get_offer} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* HERO */}
      <section className="relative z-10 pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {dict.hero.kicker}
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {dict.hero.title_start}{" "}
                <span className="text-muted-foreground"> {dict.hero.title_highlight} </span>
                {" "}{dict.hero.title_end}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {dict.hero.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
              </div>
            </div>

            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="relative mx-auto w-full max-w-xl lg:mx-0"
            >
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-8 h-44 w-44 rounded-full bg-blue-500/15 blur-3xl" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-[0_30px_80px_-35px_rgba(56,189,248,0.45)] sm:aspect-[16/12] lg:aspect-[4/5]">
                {HERO_SLIDES.map((slide, idx) => (
                  <Image
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className={`object-cover transition-opacity duration-700 ${idx === activeHeroSlide ? "opacity-100" : "opacity-0"}`}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={idx === 0}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-slate-900/10 to-cyan-100/10" />
              </div>

              <div className="absolute -left-3 top-6 rounded-2xl border border-border/80 bg-background/90 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <Timer className="h-4 w-4 text-cyan-300" />
                  <span>{dict.features.response_title}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{dict.hero.quick_reply}</p>
              </div>

              <div className="absolute -right-3 bottom-7 rounded-2xl border border-border/80 bg-background/90 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <Package className="h-4 w-4 text-cyan-300" />
                  <span>{dict.features.bulk_title}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{dict.hero.audience_short}</p>
              </div>
            </motion.div>
          </div>

          {/* Floating highlight cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { t: dict.features.hygiene_title, d: dict.features.hygiene_desc, i: <ShieldCheck className="h-5 w-5" /> },
              { t: dict.features.response_title, d: dict.features.response_desc, i: <Timer className="h-5 w-5" /> },
              { t: dict.features.bulk_title, d: dict.features.bulk_desc, i: <Package className="h-5 w-5" /> },
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    {x.i}
                  </div>
                  <p className="font-semibold text-foreground">{x.t}</p>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <div id="why" className="h-px scroll-mt-28" />
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

      {/* PRODUCTS */}
      <div id="products" className="h-px scroll-mt-28" />
      <Section
        eyebrow={dict.products.eyebrow}
        title={dict.products.title}
        desc={dict.products.desc}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {dict.products.items.map((p: ProductItem, i: number) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              {p.image && (
                <div className="aspect-video overflow-hidden rounded-lg border border-border mb-4">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={640}
                    height={360}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-foreground">{p.name}</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.info}</p>
              <div className="mt-5 flex gap-2 text-xs font-medium text-muted-foreground/80">
                <span className="rounded-full bg-secondary px-2.5 py-0.5">
                  {dict.products.badges.bulk}
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-0.5">
                   {dict.products.badges.quick}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT (FIXED) */}
      <div id="about" className="h-px scroll-mt-28" />
      <Section
        eyebrow={dict.about.eyebrow}
        title={dict.about.title}
        desc={dict.about.desc}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {dict.about.mission_text}
              <span className="font-medium text-foreground">{dict.about.mission_highlight}</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Pill>{dict.about.pills.shops}</Pill>
              <Pill>{dict.about.pills.events}</Pill>
              <Pill>{dict.about.pills.families}</Pill>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{dict.about.service_title}</p>
                <p className="mt-2 text-muted-foreground">
                  {dict.about.service_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <div id="contact" className="h-px scroll-mt-28" />
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

              <div className="relative min-h-[360px] border-t border-border bg-gradient-to-br from-secondary/40 via-background to-secondary/10 md:min-h-[520px] md:border-t-0 md:border-l">
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8">
                  <div className="h-full w-full overflow-hidden rounded-3xl border border-border/80 bg-background shadow-lg ring-1 ring-black/5">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.205920230776!2d66.9619771!3d30.174111200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2e1b8c4495c2b%3A0xb3d68a3f4e961621!2sDispotraders!5e0!3m2!1sde!2sch!4v1772054219745!5m2!1sde!2sch"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-16 text-center text-sm text-muted-foreground">
             © {new Date().getFullYear()} {dict.footer.copyright}
          </footer>
        </div>
      </section>
    </main>
  );
}
