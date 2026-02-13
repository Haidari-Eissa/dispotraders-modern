export const dictionaries = {
  en: {
    hero: {
      pill_delivery: "Fast delivery in Quetta",
      pill_hygiene: "Clean & hygienic",
      pill_price: "Affordable prices",
      title_start: "Disposable tableware that looks clean,",
      title_highlight: "works fast",
      title_end: "and saves time.",
      description: "Cups, plates, containers, packaging and more — for shops, events and families. Simple ordering, quick response, reliable supply in Quetta (Hazara Town to Mari Abad).",
      btn_products: "View products",
      btn_whatsapp: "WhatsApp order",
    },
    features: {
      hygiene_title: "Hygienic supply",
      hygiene_desc: "Packed & ready to use — clean service for your customers.",
      response_title: "Quick response",
      response_desc: "Fast replies and simple ordering via WhatsApp or call.",
      bulk_title: "Bulk friendly",
      bulk_desc: "Events, shops and families — we handle small to bulk orders.",
    },
    why: {
      eyebrow: "Why Dispotraders",
      title: "Simple, clean, reliable.",
      desc: "A modern supplier mindset: fast delivery, consistent quality, easy ordering.",
      card_1_title: "Hygienic & safe",
      card_1_desc: "Disposable tableware helps you serve cleanly — perfect for shops, street food and events.",
      card_2_title: "Save time",
      card_2_desc: "No washing, no stress. Use and move on — focus on your business.",
      card_3_title: "Product range",
      card_3_desc: "Plastic and aluminum options — cups, plates, containers, packaging.",
      card_4_title: "Affordable pricing",
      card_4_desc: "Good value for daily use and bulk orders.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get a quick offer today.",
      desc: "Tell us what you need (cups, plates, containers). We answer fast.",
      btn_call: "Call",
    }
  },
  ur: {
    hero: {
      pill_delivery: "کوئٹہ میں تیز ترین ترسیل",
      pill_hygiene: "صاف اور شفاف",
      pill_price: "مناسب قیمتیں",
      title_start: "ڈسپوزایبل کراکری جو دکھنے میں صاف،",
      title_highlight: "کام میں تیز",
      title_end: "اور وقت بچائے۔",
      description: "کپ، پلیٹیں، کنٹینرز اور پیکیجنگ — دکانوں، تقریبات اور خاندانوں کے لیے۔ کوئٹہ (ہزارہ ٹاؤن سے مری آباد) میں آسان آرڈر اور قابل اعتماد سپلائی۔",
      btn_products: "مصنوعات دیکھیں",
      btn_whatsapp: "واٹس ایپ آرڈر",
    },
    features: {
      hygiene_title: "حفظان صحت کے مطابق",
      hygiene_desc: "پیک شدہ اور استعمال کے لیے تیار — آپ کے گاہکوں کے لیے صاف سروس۔",
      response_title: "فوری جواب",
      response_desc: "واٹس ایپ یا کال کے ذریعے فوری جواب اور آسان آرڈر۔",
      bulk_title: "تھوک سپلائی",
      bulk_desc: "تقریبات، دکانیں اور خاندان — ہم چھوٹے اور بڑے آرڈرز فراہم کرتے ہیں۔",
    },
    why: {
      eyebrow: "ڈسپو ٹریڈرز ہی کیوں؟",
      title: "آسان، صاف، قابل اعتماد۔",
      desc: "ایک جدید سپلائر کی سوچ: تیز ترسیل، بہترین معیار، آسان آرڈرنگ۔",
      card_1_title: "صاف اور محفوظ",
      card_1_desc: "ڈسپوزایبل برتن آپ کو صفائی سے پیش کرنے میں مدد کرتے ہیں — دکانوں اور تقریبات کے لیے بہترین۔",
      card_2_title: "وقت بچائیں",
      card_2_desc: "دھونے کی کوئی جھنجھٹ نہیں۔ استعمال کریں اور آگے بڑھیں — اپنے کاروبار پر توجہ دیں۔",
      card_3_title: "مصنوعات کی رینج",
      card_3_desc: "پلاسٹک اور ایلومینیم کے اختیارات — کپ، پلیٹیں، کنٹینرز، پیکیجنگ۔",
      card_4_title: "مناسب قیمت",
      card_4_desc: "روزانہ استعمال اور بلک آرڈرز کے لیے بہترین قیمت۔",
    },
    contact: {
      eyebrow: "رابطہ کریں",
      title: "آج ہی آفر حاصل کریں۔",
      desc: "ہمیں بتائیں کہ آپ کو کیا ضرورت ہے (کپ، پلیٹیں، کنٹینرز)۔ ہم فوری جواب دیتے ہیں۔",
      btn_call: "کال کریں",
    }
  }
};

export const getDictionary = (lang: string) => {
  if (lang === 'ur') return dictionaries.ur;
  return dictionaries.en;
};