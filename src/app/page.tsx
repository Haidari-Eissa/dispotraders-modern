"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
  Truck,
  X,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { usePathname } from "next/navigation";
import {
  getDictionary,
  type Dictionary,
  type LanguageCode,
} from "@/lib/dictionaries";
import { FloatingShapes } from "@/components/FloatingShapes";
import op1 from "@/assets/images/op1.jpg";
import op2 from "@/assets/images/op2.jpg";
import op3 from "@/assets/images/op3.jpg";

/* ═══════════════════════════════════════════════════════════════════════════
   CONSTANTS — ⚠️  Replace with actual business numbers before going live
   ═══════════════════════════════════════════════════════════════════════════ */
const PHONE = "0300-000-0000"; // TODO: replace with real number
const WHATSAPP_URL = "https://wa.me/923000000000"; // TODO: replace with real number

const HERO_SLIDES = [
  { src: op1.src, alt: "Disposable cups – Dispotraders Hazara Town Quetta" },
  { src: op2.src, alt: "Disposable plates and bowls – Hazara Town supplier" },
  { src: op3.src, alt: "Food containers – Dispotraders Quetta" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 shadow-[0_8px_30px_-12px_rgba(56,189,248,0.9)]">
        <div className="absolute -left-1 top-1 h-4 w-4 rounded-full bg-white/65 blur-[1px]" />
        <div className="absolute -right-2 -bottom-2 h-7 w-7 rounded-full bg-black/20" />
        <div className="absolute left-2.5 top-2.5 h-5 w-5 rounded-md border border-white/65" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">
          DISPO
        </p>
        <p className="text-base font-bold tracking-tight text-foreground">
          TRADERS
        </p>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs font-medium text-muted-foreground">
      <Check className="h-3.5 w-3.5 text-cyan-400" />
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
      <Sparkles className="h-3 w-3" />
      {children}
    </div>
  );
}

function WhatsAppButton({
  href,
  children,
  className = "",
  pulse = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-green-500 px-7 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-green-400 hover:shadow-green-500/30 active:scale-95 ${pulse ? "animate-wa-glow" : ""} ${className}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      {children}
    </a>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/25 hover:bg-white/8 hover:shadow-lg hover:shadow-cyan-900/10">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>
      <div className="relative flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export default function Page() {
  const prefersReducedMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuToggleRef = useRef<HTMLButtonElement | null>(null);

  const pathname = usePathname();
  const lang: LanguageCode = pathname?.includes("/ur") ? "ur" : "en";
  const dict = getDictionary(lang);
  type ProductItem = Dictionary["products"]["items"][number];

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (mobileMenuRef.current?.contains(target)) return;
      setMobileMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("touchstart", closeOnOutsideClick, {
      passive: true,
    });
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("touchstart", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const handleHeaderClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!mobileMenuOpen) return;
    const target = event.target as Node;
    if (mobileMenuToggleRef.current?.contains(target)) return;
    setMobileMenuOpen(false);
  };

  return (
    <main
      id="top"
      className="relative min-h-screen overflow-x-clip bg-slate-950 text-foreground selection:bg-cyan-500/20"
    >
      {/* Background blobs */}
      <FloatingShapes />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/6 blur-3xl" />
        <div className="absolute top-[30%] right-[-8%] h-[400px] w-[400px] rounded-full bg-amber-500/4 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-8%] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      {/* ── NAVIGATION ─────────────────────────────────────────────────── */}
      <div
        dir="ltr"
        className="sticky top-0 z-50 bg-slate-950/80 shadow-[0_2px_24px_rgba(0,0,0,0.55)] backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div
            ref={mobileMenuRef}
            className="flex items-center justify-between"
            onClickCapture={handleHeaderClick}
          >
            {/* Logo */}
            <a
              href="#top"
              aria-label="Go to top"
              className="rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-cyan-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BrandLogo />
            </a>

            {/* Desktop nav links */}
            <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
              <a className="transition-colors hover:text-foreground" href="#why">
                {dict.navigation.why}
              </a>
              <a
                className="transition-colors hover:text-foreground"
                href="#products"
              >
                {dict.navigation.products}
              </a>
              <a
                className="transition-colors hover:text-foreground"
                href="#about"
              >
                {dict.navigation.about}
              </a>
              <a
                className="transition-colors hover:text-foreground"
                href="#contact"
              >
                {dict.navigation.contact}
              </a>
            </div>

            {/* Right: lang switcher + CTA + hamburger */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <WhatsAppButton
                href={WHATSAPP_URL}
                className="hidden !px-5 !py-2.5 !text-xs sm:inline-flex"
              >
                {dict.navigation.get_offer}
              </WhatsAppButton>
              <button
                ref={mobileMenuToggleRef}
                type="button"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10 md:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl backdrop-blur md:hidden">
              <div className="grid gap-1 text-sm font-medium text-muted-foreground">
                {[
                  { href: "#why", label: dict.navigation.why },
                  { href: "#products", label: dict.navigation.products },
                  { href: "#about", label: dict.navigation.about },
                  { href: "#contact", label: dict.navigation.contact },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2.5 transition-colors hover:bg-white/8 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 px-1">
                  <WhatsAppButton
                    href={WHATSAPP_URL}
                    className="w-full justify-center"
                  >
                    {dict.navigation.get_offer}
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 pb-16 pt-20 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: copy */}
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-3xl"
            >
              {/* Location badge */}
              <div className="mb-5 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {dict.hero.kicker}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  <Truck className="h-3.5 w-3.5" />
                  {dict.hero.badge_delivery}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {dict.hero.title_start}{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
                  {dict.hero.title_highlight}
                </span>{" "}
                {dict.hero.title_end}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                {dict.hero.description}
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <WhatsAppButton href={WHATSAPP_URL} pulse className="text-base">
                  {dict.hero.btn_whatsapp}
                </WhatsAppButton>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur transition-all hover:bg-white/10"
                >
                  {dict.hero.btn_products} <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Trust chips */}
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  {dict.hero.quick_reply}
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  {dict.hero.audience_short}
                </span>
              </div>
            </motion.div>

            {/* Right: image card */}
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
              className="relative mx-auto w-full max-w-xl lg:mx-0"
            >
              {/* Glow halos */}
              <div className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -right-10 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl" />

              {/* Slider frame */}
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-[0_40px_100px_-30px_rgba(56,189,248,0.35)] sm:aspect-[4/5]">
                {HERO_SLIDES.map((slide, idx) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className="hero-slide absolute inset-0 h-full w-full object-cover"
                    style={{
                      animationDelay: `${idx * 4}s`,
                      animationDuration: `${HERO_SLIDES.length * 4}s`,
                    }}
                    loading={idx === 0 ? "eager" : "lazy"}
                    aria-hidden={idx !== 0}
                  />
                ))}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 via-slate-900/10 to-cyan-100/8" />
              </div>

              {/* Floating badge — quick reply */}
              <div className="absolute -left-4 top-7 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Timer className="h-4 w-4 text-cyan-300" />
                  <span>{dict.features.response_title}</span>
                </div>
                <p className="mt-0.5 text-xs text-slate-400">
                  {dict.hero.quick_reply}
                </p>
              </div>

              {/* Floating badge — bulk */}
              <div className="absolute -right-4 bottom-8 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Package className="h-4 w-4 text-amber-400" />
                  <span>{dict.features.bulk_title}</span>
                </div>
                <p className="mt-0.5 text-xs text-slate-400">
                  {dict.hero.audience_short}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────── */}
      {/* centered gradient divider */}
      <div className="flex justify-center py-1">
        <div className="h-px w-72 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>
      <section className="relative z-10 bg-white/3 shadow-[0_4px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              {
                big: dict.stats.delivery,
                sub: dict.stats.delivery_sub,
                color: "text-green-400",
                icon: <Truck className="h-5 w-5" />,
              },
              {
                big: dict.stats.reply,
                sub: dict.stats.reply_sub,
                color: "text-cyan-400",
                icon: <MessageCircle className="h-5 w-5" />,
              },
              {
                big: dict.stats.products,
                sub: dict.stats.products_sub,
                color: "text-amber-400",
                icon: <Package className="h-5 w-5" />,
              },
              {
                big: dict.stats.local,
                sub: dict.stats.local_sub,
                color: "text-sky-400",
                icon: <MapPin className="h-5 w-5" />,
              },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-start gap-2">
                <div className={`${s.color}`}>{s.icon}</div>
                <p className={`text-2xl font-extrabold ${s.color} sm:text-3xl`}>
                  {s.big}
                </p>
                <p className="text-xs leading-snug text-slate-400">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* centered gradient divider */}
      <div className="flex justify-center py-1">
        <div className="h-px w-72 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>

      {/* ── WHY US ─────────────────────────────────────────────────────── */}
      <div id="why" className="h-px scroll-mt-28" />
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>{dict.why.eyebrow}</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {dict.why.title}
            </h2>
            <p className="mt-5 text-lg text-slate-400">{dict.why.desc}</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title={dict.why.card_1_title}
              text={dict.why.card_1_desc}
            />
            <FeatureCard
              icon={<Timer className="h-6 w-6" />}
              title={dict.why.card_2_title}
              text={dict.why.card_2_desc}
            />
            <FeatureCard
              icon={<Package className="h-6 w-6" />}
              title={dict.why.card_3_title}
              text={dict.why.card_3_desc}
            />
            <FeatureCard
              icon={<Check className="h-6 w-6" />}
              title={dict.why.card_4_title}
              text={dict.why.card_4_desc}
            />
          </div>
        </div>
      </section>

      {/* ── HOW TO ORDER ───────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/15 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>{dict.how_to_order.eyebrow}</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {dict.how_to_order.title}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                num: dict.how_to_order.step1_num,
                title: dict.how_to_order.step1_title,
                desc: dict.how_to_order.step1_desc,
                icon: <MessageCircle className="h-7 w-7" />,
                color: "from-green-500/20 to-green-500/5",
                border: "border-green-500/20",
                accent: "text-green-400",
                numColor: "text-green-400",
              },
              {
                num: dict.how_to_order.step2_num,
                title: dict.how_to_order.step2_title,
                desc: dict.how_to_order.step2_desc,
                icon: <CheckCircle2 className="h-7 w-7" />,
                color: "from-cyan-500/20 to-cyan-500/5",
                border: "border-cyan-500/20",
                accent: "text-cyan-400",
                numColor: "text-cyan-400",
              },
              {
                num: dict.how_to_order.step3_num,
                title: dict.how_to_order.step3_title,
                desc: dict.how_to_order.step3_desc,
                icon: <Truck className="h-7 w-7" />,
                color: "from-amber-500/20 to-amber-500/5",
                border: "border-amber-500/20",
                accent: "text-amber-400",
                numColor: "text-amber-400",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br p-8 ${step.color} ${step.border}`}
              >
                {/* Step number top-right */}
                <span
                  className={`absolute right-5 top-5 text-5xl font-black opacity-15 ${step.numColor}`}
                >
                  {step.num}
                </span>
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${step.border} bg-white/5 ${step.accent}`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <WhatsAppButton href={WHATSAPP_URL} pulse className="text-base">
              {dict.how_to_order.cta} <ArrowRight className="h-4 w-4" />
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ───────────────────────────────────────────────────── */}
      <div id="products" className="h-px scroll-mt-28" />
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>{dict.products.eyebrow}</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {dict.products.title}
            </h2>
            <p className="mt-5 text-lg text-slate-400">{dict.products.desc}</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.products.items.map((p: ProductItem, i: number) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl border border-white/8 bg-white/4 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-lg hover:shadow-cyan-900/10"
              >
                {p.image && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={640}
                      height={360}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-base font-bold text-white">{p.name}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{p.info}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="rounded-full bg-white/8 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                        {dict.products.badges.bulk}
                      </span>
                      <span className="rounded-full bg-white/8 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                        {dict.products.badges.quick}
                      </span>
                    </div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1.5 text-xs font-semibold text-green-400 transition-colors hover:bg-green-500/25"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      {dict.products.order_btn}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────── */}
      <div id="about" className="h-px scroll-mt-28" />
      <section className="relative py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>{dict.about.eyebrow}</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {dict.about.title}
            </h2>
            <p className="mt-5 text-lg text-slate-400">{dict.about.desc}</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-3xl border border-amber-500/15 bg-gradient-to-br from-amber-500/8 to-transparent p-8 lg:p-10">
              <p className="text-lg leading-relaxed text-slate-300">
                {dict.about.mission_text}
                <span className="font-semibold text-white">
                  {dict.about.mission_highlight}
                </span>
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <Pill>{dict.about.pills.shops}</Pill>
                <Pill>{dict.about.pills.events}</Pill>
                <Pill>{dict.about.pills.families}</Pill>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-3xl border border-white/8 bg-white/4 p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-white">
                    {dict.about.service_title}
                  </p>
                  <p className="mt-2 text-slate-400">
                    {dict.about.service_desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY AREAS ─────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/8 bg-white/4 p-8 sm:p-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-md">
                <SectionLabel>{dict.areas.eyebrow}</SectionLabel>
                <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                  {dict.areas.title}
                </h2>
                <p className="mt-3 text-slate-400">{dict.areas.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {dict.areas.list.map((area: string, i: number) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  >
                    <MapPin className="h-3.5 w-3.5 opacity-70" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────── */}
      <div id="contact" className="h-px scroll-mt-28" />
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/8 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl">
            <div className="grid gap-0 md:grid-cols-2 md:items-stretch">
              {/* Left: CTA */}
              <div className="p-10 sm:p-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  <Phone className="h-3.5 w-3.5" />
                  {dict.contact.eyebrow}
                </div>
                <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {dict.contact.title}
                </h3>
                <p className="mt-4 text-lg text-slate-400">
                  {dict.contact.desc}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <WhatsAppButton href={WHATSAPP_URL} pulse className="text-base">
                    {dict.contact.btn_whatsapp}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </WhatsAppButton>
                  <a
                    href={`tel:${PHONE.replace(/-/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-all hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    {dict.contact.btn_call} — {PHONE}
                  </a>
                </div>
              </div>

              {/* Right: Google Map */}
              <div className="relative min-h-[320px] border-t border-white/8 md:min-h-[480px] md:border-l md:border-t-0">
                <div className="absolute inset-0 p-4 sm:p-6">
                  <div className="h-full w-full overflow-hidden rounded-3xl border border-white/8 shadow-lg">
                    <iframe
                      title="Dispotraders location — Hazara Town, Quetta"
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

          {/* Footer */}
          <footer className="mt-16 flex flex-col items-center gap-1 text-center">
            <p className="text-sm text-slate-500">{dict.footer.tagline}</p>
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} {dict.footer.copyright}
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
