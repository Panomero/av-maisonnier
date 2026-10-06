export interface SeoBlock {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface Dictionary {
  htmlLang: string;
  meta: {
    siteName: string;
    descriptor: string;
  };
  nav: {
    home: string;
    owners: string;
    services: string;
    agencies: string;
    howItWorks: string;
    about: string;
    contact: string;
    consultation: string;
    menuOpen: string;
    menuClose: string;
    language: string;
    skipToContent: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    legalTitle: string;
    privacy: string;
    cookie: string;
    legal: string;
    disclaimer: string;
    location: string;
  };
  cookie: {
    message: string;
    accept: string;
    decline: string;
    settingsLink: string;
  };
  common: {
    exploreMore: string;
    backHome: string;
    requiredField: string;
  };
  home: {
    seo: SeoBlock;
    hero: {
      brandLine1: string;
      brandLine2: string;
      descriptor: string;
      tagline: string;
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
    };
    idea: {
      eyebrow: string;
      title: string;
      body: string;
      statement: string;
    };
    coreServices: {
      eyebrow: string;
      title: string;
      items: { title: string; body: string }[];
      cta: string;
    };
    ownerExperience: {
      eyebrow: string;
      title: string;
      items: string[];
    };
    howItWorksPreview: {
      eyebrow: string;
      title: string;
      steps: string[];
      cta: string;
    };
    agenciesBlock: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
    };
    closing: {
      kicker: string;
      title: string;
      body: string;
      cta: string;
    };
  };
  owners: {
    seo: SeoBlock;
    hero: { title: string; subtitle: string };
    sections: {
      title: string;
      items: string[];
    }[];
    continuity: string;
    closingStatement: string;
    cta: string;
  };
  services: {
    seo: SeoBlock;
    hero: { title: string };
    property: {
      title: string;
      items: string[];
      note: string;
    };
    staff: {
      title: string;
      items: string[];
    };
    lifestyle: {
      title: string;
      items: string[];
      note: string;
    };
    closing: string;
    cta: string;
  };
  agencies: {
    seo: SeoBlock;
    hero: { title: string; subtitle: string };
    opportunity: {
      title: string;
      body: string;
      items: string[];
    };
    responsibilities: {
      title: string;
      agencyTitle: string;
      agencyItems: string[];
      avTitle: string;
      avItems: string[];
      statement: string;
    };
    partnership: {
      title: string;
      steps: string[];
      commercialNote: string;
    };
    notBuild: {
      title: string;
      items: string[];
    };
    cta: string;
  };
  howItWorks: {
    seo: SeoBlock;
    hero: { title: string };
    steps: { number: string; title: string; body: string }[];
    principles: {
      title: string;
      items: string[];
    };
    cta: string;
  };
  about: {
    seo: SeoBlock;
    hero: { title: string };
    intro: string[];
    values: { title: string; items: string[] };
    geography: string;
    role: string;
  };
  contact: {
    seo: SeoBlock;
    hero: { title: string; body: string };
    form: {
      fullName: string;
      email: string;
      phone: string;
      preferredLanguage: string;
      contactingAs: string;
      contactingOptions: {
        owner: string;
        familyOffice: string;
        agency: string;
        partner: string;
        other: string;
      };
      propertyLocation: string;
      subject: string;
      message: string;
      preferredContactMethod: string;
      contactMethodOptions: { email: string; phone: string; either: string };
      consent: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      errorTitle: string;
      errorBody: string;
      honeypotLabel: string;
    };
    details: {
      name: string;
      title: string;
      phone: string;
      email: string;
      availability: string;
    };
  };
  legal: {
    privacy: { title: string; updated: string; sections: { heading: string; body: string }[] };
    cookiePolicy: { title: string; updated: string; sections: { heading: string; body: string }[] };
    legalNotice: { title: string; updated: string; sections: { heading: string; body: string }[] };
  };
}
