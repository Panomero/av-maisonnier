import type { Dictionary } from "../dictionary.types";

const en = {
  htmlLang: "en",
  meta: {
    siteName: "AN21",
    descriptor: "Private Villa Management",
  },
  nav: {
    home: "Home",
    owners: "For Owners",
    services: "Services",
    agencies: "For Agencies",
    howItWorks: "How It Works",
    about: "About",
    contact: "Contact",
    consultation: "Private Consultation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
    skipToContent: "Skip to content",
  },
  footer: {
    tagline: "Private villa management on the French Riviera",
    navTitle: "Navigate",
    contactTitle: "Contact",
    legalTitle: "Legal",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
    legal: "Legal Notice",
    disclaimer:
      "Private villa management services are tailored to the property and agreed individually",
    location: "French Riviera · By appointment",
  },
  cookie: {
    message:
      "We use a small number of cookies to keep this site secure and to understand how it is used. You can accept or decline non-essential cookies at any time",
    accept: "Accept",
    decline: "Decline",
    settingsLink: "Cookie Policy",
  },
  common: {
    exploreMore: "Learn more",
    backHome: "Return to the homepage",
    requiredField: "This field is required",
  },
  home: {
    seo: {
      title: "AN21 — Private Villa Management, French Riviera",
      description:
        "AN21 is a single trusted point of contact for owners of private villas on the French Riviera, coordinating property, staff, contractors and daily requirements",
      ogTitle: "AN21 — Private Villa Management",
      ogDescription:
        "One trusted point of contact for your villa. Property, staff and contractor coordination across the French Riviera",
    },
    hero: {
      brandLine1: "AN21",
      brandLine2: "PRIVATE OFFICE",
      descriptor: "PRIVATE VILLA MANAGEMENT",
      tagline: "The operator of your comfort",
      title: "One trusted point of contact for your villa",
      subtitle:
        "AN21 coordinates the property, staff, contractors and day-to-day requirements of private residences on the French Riviera",
      primaryCta: "Request a Private Consultation",
      secondaryCta: "Explore the Service",
    },
    idea: {
      eyebrow: "The Idea",
      title: "Your home should work beautifully, even when you are away",
      body: "A private villa requires constant coordination. Staff, contractors, maintenance, supplies and preparation must work as one system. AN21 provides a single trusted point of contact and takes responsibility for coordinating the daily operation of the residence. The work does not stop when the owner leaves: inspections, correspondence with contractors and staff, and oversight of the property continue on an ongoing basis, whether or not you are in residence",
      statement: "One contact. One system of responsibility",
    },
    coreServices: {
      eyebrow: "Core Services",
      title: "Three directions of care, coordinated as one",
      items: [
        {
          title: "Property Management",
          body: "Regular inspections, maintenance coordination, contractor supervision, property preparation and clear reporting",
        },
        {
          title: "Staff Coordination",
          body: "Day-to-day coordination of existing household staff, quality control and identification of future staffing requirements",
        },
        {
          title: "Lifestyle Support",
          body: "Support for arrivals, guests, reservations, transport, personal requests and the daily needs of the household",
        },
      ],
      cta: "View All Services",
    },
    ownerExperience: {
      eyebrow: "Owner Experience",
      title: "Peace of mind, without constant involvement",
      items: [
        "A single trusted contact",
        "Clear areas of responsibility",
        "Coordinated household staff",
        "Reliable contractor oversight",
        "Regular property reporting",
        "Preparation before every arrival",
        "Responsive support when plans change",
      ],
    },
    howItWorksPreview: {
      eyebrow: "How It Works",
      title: "A clear and discreet process, from first conversation onward",
      steps: [
        "Private consultation",
        "Property and needs assessment",
        "Tailored management plan",
        "Dedicated point of contact",
        "Ongoing coordination and reporting",
      ],
      cta: "See How It Works",
    },
    agenciesBlock: {
      eyebrow: "For Partner Agencies",
      title: "A natural extension of your agency's client offering",
      body: "AN21 enables staffing agencies to offer long-term villa management without building an internal operations department. Your agency retains its role as the trusted staffing partner. New household recruitment requirements are referred back to the partner agency",
      cta: "Explore Agency Partnerships",
    },
    closing: {
      kicker: "More time for what matters",
      title: "Every residence requires a different level of attention",
      body: "Our service is designed around the property, the household and the owner's expectations",
      cta: "Arrange a Confidential Conversation",
    },
  },
  owners: {
    seo: {
      title: "For Owners — Private Villa Management | AN21",
      description:
        "Private villa management built around the owner. AN21 coordinates the people, processes and services required to keep a private residence prepared, protected and running smoothly",
      ogTitle: "For Owners | AN21",
      ogDescription:
        "One trusted point of contact for your villa, before, during and after every stay",
    },
    hero: {
      title: "Private villa management built around the owner",
      subtitle:
        "AN21 coordinates the people, processes and services required to keep a private residence prepared, protected and running smoothly",
    },
    sections: [
      {
        title: "When the owner is away",
        items: [
          "Regular oversight of the property",
          "Checks on the condition of the villa",
          "Coordination of planned works",
          "Reception of contractors on site",
          "Reporting to the owner",
          "Preparedness for weather changes or urgent situations",
        ],
      },
      {
        title: "Before the owner arrives",
        items: [
          "Preparation of the villa",
          "Review of technical systems",
          "Coordination of cleaning",
          "Inspection of the garden and pool",
          "Organisation of supplies",
          "Coordination of household staff",
          "Preparation for family and guests",
          "A final walk-through before arrival",
        ],
      },
      {
        title: "During the stay",
        items: [
          "A single point of contact",
          "Daily coordination",
          "Support for guests",
          "Transport arrangements",
          "Reservations",
          "Personal requests",
          "Responsive changes to plans",
          "Support for events and gatherings",
        ],
      },
      {
        title: "After departure",
        items: [
          "Closing of the villa",
          "Inspection of the property",
          "Recording of any required works",
          "Organisation of servicing",
          "Reporting to the owner",
          "Preparation for the next arrival",
        ],
      },
    ],
    continuity:
      "Nothing stops between stays: regular inspections, correspondence with contractors and staff, and oversight of the property continue without interruption",
    closingStatement:
      "The owner remains informed without being drawn into every operational detail",
    cta: "Discuss Your Residence",
  },
  services: {
    seo: {
      title: "Services — Property, Staff and Lifestyle Coordination | AN21",
      description:
        "A coordinated system for the residence, household and lifestyle: property management, staff coordination and lifestyle support for private villas on the French Riviera",
      ogTitle: "Services | AN21",
      ogDescription:
        "Property management, staff coordination and lifestyle support, brought together as one service",
    },
    hero: {
      title: "A coordinated system for the residence, household and lifestyle",
    },
    property: {
      title: "Property Management",
      items: [
        "Regular property inspections",
        "Planned checks",
        "Photo and video reporting",
        "Maintenance coordination",
        "Contractor access and supervision",
        "Repair follow-up",
        "Garden and pool coordination",
        "Cleaning coordination",
        "Delivery and supply management",
        "Property preparation",
        "Urgent situation coordination",
        "Property service history",
      ],
      note: "We coordinate and oversee qualified specialists rather than replacing them",
    },
    staff: {
      title: "Staff Coordination",
      items: [
        "Coordination of existing household staff",
        "Daily task alignment",
        "Quality and service follow-up",
        "Communication between owner and household team",
        "Schedule coordination",
        "Support during owner and guest arrivals",
        "Identification of staffing needs",
        "Referral of recruitment requests to partner agencies",
      ],
    },
    lifestyle: {
      title: "Lifestyle Support",
      items: [
        "Travel and transport coordination",
        "Restaurant and experience reservations",
        "Guest assistance",
        "Event coordination",
        "Personal errands",
        "Household purchases",
        "Relocation support",
        "Special requests",
        "Family support",
        "Last-minute arrangements",
      ],
      note: "From everyday requirements to exceptional requests",
    },
    closing: "The final scope is defined individually for each residence",
    cta: "Request a Tailored Service Plan",
  },
  agencies: {
    seo: {
      title: "For Agencies — Villa Management Partnership | AN21",
      description:
        "AN21 helps staffing agencies extend the client relationship beyond placement, with a long-term villa management service that keeps the agency as the trusted recruitment partner",
      ogTitle: "For Agencies | AN21",
      ogDescription:
        "Extend the client relationship beyond the placement, without building an operational department",
    },
    hero: {
      title: "Extend the client relationship beyond the placement",
      subtitle:
        "AN21 helps staffing agencies introduce an ongoing villa management service while retaining their role as the trusted recruitment partner",
    },
    opportunity: {
      title: "The Opportunity",
      body: "After a successful placement, the owner continues to require support with the property, household team, contractors and everyday operations. AN21 allows the agency to remain connected to the client through a broader long-term service offering. A new service integrated into your agency's client offering",
      items: [
        "A broader client proposition",
        "Stronger long-term relationships",
        "Continued visibility into household needs",
        "Future recruitment opportunities",
        "No need to build an internal operations department",
        "A dedicated operational partner",
      ],
    },
    responsibilities: {
      title: "Clear Responsibilities",
      agencyTitle: "Partner Agency",
      agencyItems: [
        "Candidate sourcing",
        "Candidate screening",
        "Household recruitment",
        "Interviews and placements",
        "Recruitment advice",
        "Ongoing staffing relationship",
      ],
      avTitle: "AN21",
      avItems: [
        "Property operations",
        "Existing staff coordination",
        "Contractor coordination",
        "Owner communication",
        "Residence preparation",
        "Reporting",
        "Day-to-day requests",
        "Urgent operational response",
      ],
      statement: "Each partner remains focused on its area of expertise",
    },
    partnership: {
      title: "How the Partnership Works",
      steps: [
        "The agency introduces AN21 to a suitable client",
        "We hold a private consultation with the owner",
        "A tailored service scope is prepared",
        "AN21 manages the ongoing operation of the residence",
        "New recruitment requirements are referred to the partner agency",
        "Partnership terms are agreed individually",
      ],
      commercialNote:
        "Commercial terms are agreed privately according to the partnership structure and client profile",
    },
    notBuild: {
      title: "What the Agency Does Not Need to Build",
      items: [
        "No internal villa management department",
        "No operational staffing structure",
        "No contractor management process",
        "No new service infrastructure",
        "No fixed operational commitment before a client engagement begins",
      ],
    },
    cta: "Discuss a Partnership",
  },
  howItWorks: {
    seo: {
      title: "How It Works — A Clear Management Process | AN21",
      description:
        "From a private consultation to ongoing coordination and reporting: how AN21 structures private villa management on the French Riviera",
      ogTitle: "How It Works | AN21",
      ogDescription: "A clear and discreet management process, step by step",
    },
    hero: { title: "A clear and discreet management process" },
    steps: [
      {
        number: "01",
        title: "Private Consultation",
        body: "Understanding the property, lifestyle, household structure and the owner's expectations",
      },
      {
        number: "02",
        title: "Property Assessment",
        body: "Reviewing the residence, service providers, staff structure and current operating requirements",
      },
      {
        number: "03",
        title: "Tailored Service Plan",
        body: "Defining responsibilities, communication protocols, reporting and the level of ongoing support",
      },
      {
        number: "04",
        title: "Dedicated Point of Contact",
        body: "Assigning one central contact for the owner, household team and approved service providers",
      },
      {
        number: "05",
        title: "Ongoing Coordination",
        body: "Managing the daily operation of the residence, scheduled works, staff coordination and changing requirements",
      },
      {
        number: "06",
        title: "Reporting and Review",
        body: "Providing clear updates, documenting completed work and continuously refining the service",
      },
    ],
    principles: {
      title: "Principles",
      items: [
        "Responsibilities are defined in advance",
        "Significant third-party expenses require approval",
        "External services are charged separately",
        "Confidentiality is maintained throughout",
        "The service evolves with the owner's needs",
        "Working relationships are built for the long term",
      ],
    },
    cta: "Begin with a Private Consultation",
  },
  about: {
    seo: {
      title: "About — AN21",
      description:
        "AN21 was created to provide owners of private residences with one trusted point of contact for the daily operation of their property, across the French Riviera",
      ogTitle: "About | AN21",
      ogDescription:
        "A private management approach centred on trust and responsibility",
    },
    hero: { title: "A private management approach centred on trust and responsibility" },
    intro: [
      "AN21 was created to provide owners of private residences with one trusted point of contact for the daily operation of their property",
      "The service combines structured property management, staff coordination and personal support in a discreet and highly individual format",
      "Our role is not to replace specialist contractors, security providers or recruitment agencies. Our role is to coordinate them around the interests of the owner",
    ],
    values: {
      title: "Values",
      items: ["Discretion", "Responsibility", "Clarity", "Continuity", "Personal attention"],
    },
    geography: "Serving private residences across the French Riviera",
    role: "AN21 coordinates qualified third-party providers and oversees the agreed scope of work",
  },
  contact: {
    seo: {
      title: "Contact — Private Consultation | AN21",
      description:
        "Begin a confidential conversation with AN21 about your residence, current requirements or a partnership you would like to explore",
      ogTitle: "Contact | AN21",
      ogDescription: "A confidential conversation is the first step",
    },
    hero: {
      title: "A confidential conversation is the first step",
      body: "Tell us briefly about your residence, your current requirements or the partnership you would like to explore",
    },
    form: {
      fullName: "Full name",
      email: "Email",
      phone: "Phone",
      preferredLanguage: "Preferred language",
      contactingAs: "I am contacting you as",
      contactingOptions: {
        owner: "Property Owner",
        familyOffice: "Family Office",
        agency: "Staffing Agency",
        partner: "Professional Partner",
        other: "Other",
      },
      propertyLocation: "Property location",
      subject: "Subject",
      message: "Message",
      preferredContactMethod: "Preferred contact method",
      contactMethodOptions: { email: "Email", phone: "Phone", either: "Either" },
      consent:
        "I have read and accept the Privacy Policy and consent to being contacted about my enquiry",
      submit: "Send Enquiry",
      submitting: "Sending…",
      successTitle: "Thank you",
      successBody: "Your enquiry has been received. We will contact you privately",
      errorTitle: "Something went wrong",
      errorBody:
        "We could not send your enquiry. Please try again, or write to us directly at office@an21.homes",
      honeypotLabel: "Leave this field empty",
    },
    details: {
      name: "Artem",
      title: "CEO, AN21",
      phone: "+39 329 664 85 63",
      email: "office@an21.homes",
      availability: "French Riviera · By appointment",
    },
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: 29 July 2026",
      sections: [
        {
          heading: "Who we are",
          body: "This website provides general information only and does not process bookings, payments or binding agreements. For any question about this Privacy Policy or about how your information is handled, please contact office@an21.homes",
        },
        {
          heading: "Information we collect",
          body: "When you submit the contact form, we collect the information you provide, which may include your name, email address, phone number, the nature of your enquiry, your property location and any message you choose to include. We do not knowingly collect sensitive personal data through this form, and we ask that you avoid including it in your message",
        },
        {
          heading: "How we use your information",
          body: "We use the information you provide solely to respond to your enquiry, to arrange a private consultation where relevant, and to maintain a record of our correspondence with you. We do not sell or rent your personal data to third parties",
        },
        {
          heading: "How long we keep information",
          body: "We retain enquiry records for as long as reasonably necessary to manage our relationship with you and to meet legal or accounting obligations, after which the information is deleted or anonymised",
        },
        {
          heading: "Your rights",
          body: "Depending on your location, you may have the right to access, correct, delete or restrict the use of your personal data, and to object to its processing. To exercise these rights, please contact us at office@an21.homes",
        },
        {
          heading: "Contact",
          body: "Questions about this Privacy Policy can be sent to office@an21.homes",
        },
      ],
    },
    cookiePolicy: {
      title: "Cookie Policy",
      updated: "Last updated: 29 July 2026",
      sections: [
        {
          heading: "What cookies do",
          body: "Cookies are small text files placed on your device to help a website function correctly and to understand how it is used. We use a limited number of cookies, described below",
        },
        {
          heading: "Essential cookies",
          body: "These cookies are required for the website to function, including remembering your language preference and your cookie consent choice. They cannot be switched off",
        },
        {
          heading: "Analytics cookies",
          body: "With your consent, we may use analytics cookies to understand, in aggregate, how visitors use this website, so that we can improve it. These cookies are not used until you accept them",
        },
        {
          heading: "Managing cookies",
          body: "You can accept or decline non-essential cookies using the banner shown on your first visit, and you can change your browser settings at any time to remove or block cookies",
        },
      ],
    },
    legalNotice: {
      title: "Legal Notice",
      updated: "Last updated: 29 July 2026",
      sections: [
        {
          heading: "Publisher",
          body: "This website has an informational purpose and presents AN21's private villa management service. It is published under the AN21 name. AN21 does not take bookings, payments or conclude binding agreements through this website; the terms of any engagement, including full company details, are set out individually in the service agreement signed directly with the client. For any question, please contact office@an21.homes",
        },
        {
          heading: "Contact",
          body: "Artem, CEO, AN21 — +39 329 664 85 63 — office@an21.homes",
        },
        {
          heading: "Hosting",
          body: "This website is hosted by Vercel Inc. (vercel.com)",
        },
        {
          heading: "Intellectual property",
          body: "The texts, images and overall design of this website are the property of AN21 and may not be reproduced without prior written consent",
        },
        {
          heading: "Scope of services",
          body: "AN21 coordinates qualified third-party providers, including contractors, service specialists and, where relevant, security or recruitment partners. AN21 does not provide legal, security, medical or financial services, and does not guarantee the security of any property. Household staff, where applicable, remain engaged through the owner or through the relevant partner agency unless separately agreed in writing",
        },
      ],
    },
  },
} satisfies Dictionary;

export default en;
