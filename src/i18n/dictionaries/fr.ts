import type { Dictionary } from "../dictionary.types";

const fr = {
  htmlLang: "fr",
  meta: {
    siteName: "AN21",
    descriptor: "Gestion de villas privées",
  },
  nav: {
    home: "Accueil",
    owners: "Propriétaires",
    services: "Prestations",
    agencies: "Agences",
    howItWorks: "Notre approche",
    about: "À propos",
    contact: "Contact",
    consultation: "Consultation privée",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    language: "Langue",
    skipToContent: "Aller au contenu",
  },
  footer: {
    tagline: "Gestion de villas privées sur la Côte d'Azur",
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Informations légales",
    privacy: "Politique de confidentialité",
    cookie: "Politique relative aux cookies",
    legal: "Mentions légales",
    disclaimer:
      "Les prestations de gestion de villas privées sont adaptées à chaque propriété et convenues individuellement",
    location: "Côte d'Azur · Sur rendez-vous",
  },
  cookie: {
    message:
      "Nous utilisons un nombre restreint de cookies pour assurer la sécurité de ce site et comprendre son utilisation. Vous pouvez accepter ou refuser les cookies non essentiels à tout moment",
    accept: "Accepter",
    decline: "Refuser",
    settingsLink: "Politique relative aux cookies",
  },
  common: {
    exploreMore: "En savoir plus",
    backHome: "Retour à l'accueil",
    requiredField: "Ce champ est obligatoire",
  },
  home: {
    seo: {
      title: "AN21 — Gestion de villas privées, Côte d'Azur",
      description:
        "AN21 est l'interlocuteur unique et de confiance des propriétaires de villas privées sur la Côte d'Azur, coordonnant la propriété, le personnel, les prestataires et les besoins quotidiens",
      ogTitle: "AN21 — Gestion de villas privées",
      ogDescription:
        "Un interlocuteur unique et de confiance pour votre villa. Coordination de la propriété, du personnel et des prestataires sur la Côte d'Azur",
    },
    hero: {
      brandLine1: "AN21",
      brandLine2: "PRIVATE OFFICE",
      descriptor: "GESTION DE VILLAS PRIVÉES",
      tagline: "L'opérateur de votre confort",
      title: "Un interlocuteur unique et de confiance pour votre villa",
      subtitle:
        "AN21 coordonne la propriété, le personnel, les prestataires et les besoins quotidiens des résidences privées de la Côte d'Azur",
      primaryCta: "Demander une consultation privée",
      secondaryCta: "Découvrir nos prestations",
    },
    idea: {
      eyebrow: "Notre conviction",
      title: "Votre maison doit fonctionner parfaitement, même en votre absence",
      body: "Une villa privée exige une coordination constante. Personnel, prestataires, entretien, approvisionnement et préparation doivent fonctionner comme un système unique. AN21 devient votre interlocuteur unique et de confiance, et prend en charge la coordination du fonctionnement quotidien de la résidence. Le travail ne s'arrête pas au départ du propriétaire : inspections, échanges avec les prestataires et le personnel, suivi de la propriété se poursuivent en continu, que vous soyez présent ou non",
      statement: "Un seul interlocuteur. Une seule chaîne de responsabilité",
    },
    coreServices: {
      eyebrow: "Nos prestations",
      title: "Trois domaines d'intervention, une seule coordination",
      items: [
        {
          title: "Gestion de la propriété",
          body: "Inspections régulières, coordination de l'entretien, supervision des prestataires, préparation de la propriété et comptes rendus clairs",
        },
        {
          title: "Coordination du personnel",
          body: "Coordination quotidienne du personnel de maison en place, contrôle qualité et identification des futurs besoins en personnel",
        },
        {
          title: "Accompagnement lifestyle",
          body: "Accompagnement pour les arrivées, les invités, les réservations, les déplacements, les demandes personnelles et les besoins quotidiens du foyer",
        },
      ],
      cta: "Découvrir toutes nos prestations",
    },
    ownerExperience: {
      eyebrow: "L'expérience propriétaire",
      title: "La sérénité, sans devoir tout gérer soi-même",
      items: [
        "Un interlocuteur unique et de confiance",
        "Des responsabilités clairement définies",
        "Un personnel de maison coordonné",
        "Un suivi fiable des prestataires",
        "Des comptes rendus réguliers sur la propriété",
        "Une préparation avant chaque arrivée",
        "Une réactivité en cas de changement de programme",
      ],
    },
    howItWorksPreview: {
      eyebrow: "Notre approche",
      title: "Un processus clair et discret, dès le premier échange",
      steps: [
        "Consultation privée",
        "Évaluation de la propriété et des besoins",
        "Plan de gestion sur mesure",
        "Interlocuteur dédié",
        "Coordination continue et comptes rendus",
      ],
      cta: "Découvrir notre approche",
    },
    agenciesBlock: {
      eyebrow: "Pour les agences partenaires",
      title: "Un nouveau service intégré à l'offre de votre agence",
      body: "AN21 permet aux agences de recrutement de proposer une gestion de villa à long terme sans avoir à créer un département opérationnel interne. Votre agence conserve son rôle de partenaire de confiance pour le recrutement. Toute nouvelle demande de recrutement est systématiquement réorientée vers l'agence partenaire",
      cta: "Découvrir le partenariat agences",
    },
    closing: {
      kicker: "Plus de temps pour l'essentiel",
      title: "Chaque résidence appelle un niveau d'attention différent",
      body: "Notre service est conçu autour de la propriété, du foyer et des attentes du propriétaire",
      cta: "Organiser un échange confidentiel",
    },
  },
  owners: {
    seo: {
      title: "Propriétaires — gestion de villas privées | AN21",
      description:
        "Une gestion de villa privée pensée autour du propriétaire. AN21 coordonne les personnes, les processus et les prestataires nécessaires au bon fonctionnement de la résidence",
      ogTitle: "Propriétaires | AN21",
      ogDescription:
        "Un interlocuteur unique et de confiance pour votre villa, avant, pendant et après chaque séjour",
    },
    hero: {
      title: "Une gestion de villa privée pensée autour du propriétaire",
      subtitle:
        "AN21 coordonne les personnes, les processus et les prestataires nécessaires pour que la résidence reste préparée, protégée et parfaitement fonctionnelle",
    },
    sections: [
      {
        title: "En l'absence du propriétaire",
        items: [
          "Suivi régulier de la propriété",
          "Vérification de l'état de la villa",
          "Coordination des travaux planifiés",
          "Accueil des prestataires sur place",
          "Comptes rendus au propriétaire",
          "Anticipation des intempéries ou situations urgentes",
        ],
      },
      {
        title: "Avant l'arrivée du propriétaire",
        items: [
          "Préparation de la villa",
          "Vérification des systèmes techniques",
          "Coordination du ménage",
          "Inspection du jardin et de la piscine",
          "Organisation des approvisionnements",
          "Coordination du personnel de maison",
          "Préparation pour la famille et les invités",
          "Une dernière visite de contrôle avant l'arrivée",
        ],
      },
      {
        title: "Pendant le séjour",
        items: [
          "Un interlocuteur unique",
          "Coordination quotidienne",
          "Accompagnement des invités",
          "Organisation des déplacements",
          "Réservations",
          "Demandes personnelles",
          "Adaptation réactive du programme",
          "Accompagnement des événements",
        ],
      },
      {
        title: "Après le départ",
        items: [
          "Fermeture de la villa",
          "Inspection de la propriété",
          "Recensement des travaux nécessaires",
          "Organisation de l'entretien",
          "Comptes rendus au propriétaire",
          "Préparation de la prochaine arrivée",
        ],
      },
    ],
    continuity:
      "Rien ne s'arrête entre les séjours : inspections régulières, échanges avec les prestataires et le personnel, suivi de la propriété se poursuivent sans interruption",
    closingStatement:
      "Le propriétaire reste informé, sans avoir à se préoccuper de chaque détail opérationnel",
    cta: "Échanger au sujet de votre résidence",
  },
  services: {
    seo: {
      title: "Prestations — propriété, personnel et lifestyle | AN21",
      description:
        "Un système coordonné pour la résidence, le foyer et le mode de vie : gestion de propriété, coordination du personnel et accompagnement lifestyle pour les villas privées de la Côte d'Azur",
      ogTitle: "Prestations | AN21",
      ogDescription:
        "Gestion de propriété, coordination du personnel et accompagnement lifestyle, réunis en un seul service",
    },
    hero: {
      title: "Un système coordonné pour la résidence, le foyer et le mode de vie",
    },
    property: {
      title: "Gestion de la propriété",
      items: [
        "Inspections régulières de la propriété",
        "Contrôles planifiés",
        "Comptes rendus photo et vidéo",
        "Coordination de l'entretien",
        "Accès et supervision des prestataires",
        "Suivi des réparations",
        "Coordination du jardin et de la piscine",
        "Coordination du ménage",
        "Gestion des livraisons et des approvisionnements",
        "Préparation de la propriété",
        "Coordination des situations urgentes",
        "Historique d'entretien de la propriété",
      ],
      note: "Nous coordonnons et supervisons des prestataires qualifiés, sans nous substituer à eux",
    },
    staff: {
      title: "Coordination du personnel",
      items: [
        "Coordination du personnel de maison en place",
        "Répartition quotidienne des tâches",
        "Suivi de la qualité de service",
        "Communication entre le propriétaire et l'équipe de maison",
        "Coordination des plannings",
        "Accompagnement lors des arrivées du propriétaire et des invités",
        "Identification des besoins en personnel",
        "Transmission des demandes de recrutement aux agences partenaires",
      ],
    },
    lifestyle: {
      title: "Accompagnement lifestyle",
      items: [
        "Coordination des voyages et déplacements",
        "Réservations de restaurants et d'expériences",
        "Assistance aux invités",
        "Coordination d'événements",
        "Courses et démarches personnelles",
        "Achats pour le foyer",
        "Accompagnement lors d'un déménagement",
        "Demandes particulières",
        "Soutien à la famille",
        "Organisation de dernière minute",
      ],
      note: "Des besoins du quotidien aux demandes les plus exceptionnelles",
    },
    closing: "L'étendue exacte du service est définie individuellement pour chaque résidence",
    cta: "Demander un plan de service sur mesure",
  },
  agencies: {
    seo: {
      title: "Agences — partenariat de gestion de villas | AN21",
      description:
        "AN21 aide les agences de recrutement à prolonger la relation client au-delà du placement, grâce à une gestion de villa à long terme qui préserve leur rôle de partenaire de confiance",
      ogTitle: "Agences | AN21",
      ogDescription:
        "Prolonger la relation client au-delà du placement, sans créer de département opérationnel",
    },
    hero: {
      title: "Prolongez la relation client au-delà du placement",
      subtitle:
        "AN21 aide les agences de recrutement à proposer une gestion de villa continue, tout en conservant leur rôle de partenaire de confiance pour le recrutement",
    },
    opportunity: {
      title: "L'opportunité",
      body: "Après un placement réussi, le propriétaire continue d'avoir besoin d'un accompagnement pour la propriété, l'équipe de maison, les prestataires et le quotidien. AN21 permet à l'agence de rester connectée au client grâce à une offre de services élargie et durable. Un nouveau service intégré à l'offre de votre agence",
      items: [
        "Une offre client élargie",
        "Des relations de long terme renforcées",
        "Une visibilité continue sur les besoins du foyer",
        "De nouvelles opportunités de recrutement",
        "Aucun département opérationnel interne à créer",
        "Un partenaire opérationnel dédié",
      ],
    },
    responsibilities: {
      title: "Une répartition claire des responsabilités",
      agencyTitle: "Agence partenaire",
      agencyItems: [
        "Sourcing des candidats",
        "Sélection des candidats",
        "Recrutement du personnel de maison",
        "Entretiens et placements",
        "Conseil en recrutement",
        "Relation continue en matière de personnel",
      ],
      avTitle: "AN21",
      avItems: [
        "Gestion opérationnelle de la propriété",
        "Coordination du personnel en place",
        "Coordination des prestataires",
        "Communication avec le propriétaire",
        "Préparation de la résidence",
        "Comptes rendus",
        "Demandes quotidiennes",
        "Réponse aux situations urgentes",
      ],
      statement: "Chaque partenaire reste concentré sur son domaine d'expertise",
    },
    partnership: {
      title: "Comment fonctionne le partenariat",
      steps: [
        "L'agence présente AN21 à un client concerné",
        "Nous organisons une consultation privée avec le propriétaire",
        "Une étendue de service sur mesure est préparée",
        "AN21 gère le fonctionnement continu de la résidence",
        "Les nouvelles demandes de recrutement sont transmises à l'agence partenaire",
        "Les conditions du partenariat sont convenues individuellement",
      ],
      commercialNote:
        "Les conditions commerciales sont convenues de manière confidentielle, selon la structure du partenariat et le profil du client",
    },
    notBuild: {
      title: "Ce que l'agence n'a pas besoin de créer",
      items: [
        "Aucun département interne de gestion de villas",
        "Aucune structure opérationnelle de personnel",
        "Aucun processus de gestion des prestataires",
        "Aucune nouvelle infrastructure de service",
        "Aucun engagement opérationnel fixe avant le début d'une mission",
      ],
    },
    cta: "Échanger au sujet d'un partenariat",
  },
  howItWorks: {
    seo: {
      title: "Notre approche — un processus de gestion clair | AN21",
      description:
        "De la consultation privée à la coordination continue et aux comptes rendus : comment AN21 structure la gestion des villas privées sur la Côte d'Azur",
      ogTitle: "Notre approche | AN21",
      ogDescription: "Un processus de gestion clair et discret, étape par étape",
    },
    hero: { title: "Un processus de gestion clair et discret" },
    steps: [
      {
        number: "01",
        title: "Consultation privée",
        body: "Comprendre la propriété, le mode de vie, la structure du foyer et les attentes du propriétaire",
      },
      {
        number: "02",
        title: "Évaluation de la propriété",
        body: "Examen de la résidence, des prestataires, de la structure du personnel et des besoins opérationnels actuels",
      },
      {
        number: "03",
        title: "Plan de service sur mesure",
        body: "Définition des responsabilités, des protocoles de communication, des comptes rendus et du niveau d'accompagnement continu",
      },
      {
        number: "04",
        title: "Interlocuteur dédié",
        body: "Désignation d'un interlocuteur central pour le propriétaire, l'équipe de maison et les prestataires agréés",
      },
      {
        number: "05",
        title: "Coordination continue",
        body: "Gestion du fonctionnement quotidien de la résidence, des travaux planifiés, du personnel et des besoins évolutifs",
      },
      {
        number: "06",
        title: "Comptes rendus et bilan",
        body: "Des mises à jour claires, une documentation des travaux réalisés et une amélioration continue du service",
      },
    ],
    principles: {
      title: "Nos principes",
      items: [
        "Les responsabilités sont définies en amont",
        "Les dépenses importantes auprès de tiers nécessitent une approbation préalable",
        "Les prestations externes sont facturées séparément",
        "La confidentialité est assurée à chaque étape",
        "Le service évolue selon les besoins du propriétaire",
        "Les relations de travail s'inscrivent dans la durée",
      ],
    },
    cta: "Débuter par une consultation privée",
  },
  about: {
    seo: {
      title: "À propos | AN21",
      description:
        "AN21 a été créé pour offrir aux propriétaires de résidences privées de la Côte d'Azur un interlocuteur unique et de confiance pour la gestion quotidienne de leur propriété",
      ogTitle: "À propos | AN21",
      ogDescription:
        "Une approche de gestion privée fondée sur la confiance et la responsabilité",
    },
    hero: { title: "Une approche de gestion privée fondée sur la confiance et la responsabilité" },
    intro: [
      "AN21 a été créé pour offrir aux propriétaires de résidences privées un interlocuteur unique et de confiance pour la gestion quotidienne de leur propriété",
      "Le service associe une gestion de propriété structurée, une coordination du personnel et un accompagnement personnel, dans un format discret et hautement individualisé",
      "Notre rôle n'est pas de remplacer les prestataires spécialisés, les prestataires de sécurité ou les agences de recrutement, mais de coordonner leur intervention dans l'intérêt du propriétaire",
    ],
    values: {
      title: "Nos valeurs",
      items: ["Discrétion", "Responsabilité", "Clarté", "Continuité", "Attention personnelle"],
    },
    geography: "Au service des résidences privées sur l'ensemble de la Côte d'Azur",
    role: "AN21 coordonne des prestataires tiers qualifiés et supervise l'étendue de mission convenue",
  },
  contact: {
    seo: {
      title: "Contact — consultation privée | AN21",
      description:
        "Entamez un échange confidentiel avec AN21 au sujet de votre résidence, de vos besoins actuels ou d'un partenariat que vous souhaiteriez explorer",
      ogTitle: "Contact | AN21",
      ogDescription: "Un échange confidentiel est la première étape",
    },
    hero: {
      title: "Un échange confidentiel est la première étape",
      body: "Décrivez-nous brièvement votre résidence, vos besoins actuels ou le partenariat que vous souhaiteriez explorer",
    },
    form: {
      fullName: "Nom et prénom",
      email: "Email",
      phone: "Téléphone",
      preferredLanguage: "Langue préférée",
      contactingAs: "Vous nous contactez en tant que",
      contactingOptions: {
        owner: "Propriétaire",
        familyOffice: "Family Office",
        agency: "Agence de recrutement",
        partner: "Partenaire professionnel",
        other: "Autre",
      },
      propertyLocation: "Localisation de la propriété",
      subject: "Objet",
      message: "Message",
      preferredContactMethod: "Moyen de contact préféré",
      contactMethodOptions: { email: "Email", phone: "Téléphone", either: "Indifférent" },
      consent:
        "J'ai pris connaissance de la Politique de confidentialité et j'accepte d'être contacté(e) au sujet de ma demande",
      submit: "Envoyer la demande",
      submitting: "Envoi en cours…",
      successTitle: "Merci",
      successBody: "Votre demande a bien été reçue. Nous vous contacterons de manière confidentielle",
      errorTitle: "Un problème est survenu",
      errorBody:
        "Nous n'avons pas pu envoyer votre demande. Merci de réessayer, ou écrivez-nous directement à office@an21.homes",
      honeypotLabel: "Laissez ce champ vide",
    },
    details: {
      name: "Artem",
      title: "CEO, AN21",
      phone: "+39 329 664 85 63",
      email: "office@an21.homes",
      availability: "Côte d'Azur · Sur rendez-vous",
    },
  },
  legal: {
    privacy: {
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : 29 juillet 2026",
      sections: [
        {
          heading: "Qui sommes-nous",
          body: "Ce site a une vocation purement informative et ne permet ni réservation, ni paiement, ni conclusion d'engagement contractuel. Pour toute question relative à cette Politique de confidentialité ou au traitement de vos données, contactez office@an21.homes",
        },
        {
          heading: "Informations que nous collectons",
          body: "Lorsque vous remplissez le formulaire de contact, nous collectons les informations que vous fournissez : nom, adresse email, numéro de téléphone, nature de votre demande, localisation de la propriété et message éventuel. Nous ne collectons pas sciemment de données personnelles sensibles via ce formulaire et vous invitons à ne pas en inclure dans votre message",
        },
        {
          heading: "Utilisation de vos informations",
          body: "Nous utilisons les informations fournies uniquement pour répondre à votre demande, organiser une consultation privée le cas échéant, et conserver un historique de nos échanges avec vous. Nous ne vendons ni ne louons vos données personnelles à des tiers",
        },
        {
          heading: "Durée de conservation",
          body: "Nous conservons les demandes pendant la durée raisonnablement nécessaire à la gestion de notre relation avec vous et au respect de nos obligations légales ou comptables, après quoi les informations sont supprimées ou anonymisées",
        },
        {
          heading: "Vos droits",
          body: "Selon votre juridiction, vous pouvez disposer d'un droit d'accès, de rectification, d'effacement ou de limitation de l'utilisation de vos données personnelles, ainsi que d'un droit d'opposition à leur traitement. Pour exercer ces droits, contactez-nous à office@an21.homes",
        },
        {
          heading: "Contact",
          body: "Toute question relative à cette Politique de confidentialité peut être adressée à office@an21.homes",
        },
      ],
    },
    cookiePolicy: {
      title: "Politique relative aux cookies",
      updated: "Dernière mise à jour : 29 juillet 2026",
      sections: [
        {
          heading: "Le rôle des cookies",
          body: "Les cookies sont de petits fichiers texte déposés sur votre appareil afin d'assurer le bon fonctionnement du site et de comprendre son utilisation. Nous utilisons un nombre limité de cookies, décrits ci-dessous",
        },
        {
          heading: "Cookies essentiels",
          body: "Ces cookies sont nécessaires au fonctionnement du site, notamment pour mémoriser votre préférence de langue et votre choix relatif aux cookies. Ils ne peuvent pas être désactivés",
        },
        {
          heading: "Cookies analytiques",
          body: "Avec votre consentement, nous pouvons utiliser des cookies analytiques afin de comprendre, de manière agrégée, l'utilisation du site par les visiteurs et de l'améliorer. Ces cookies ne sont pas déposés tant que vous ne les avez pas acceptés",
        },
        {
          heading: "Gestion des cookies",
          body: "Vous pouvez accepter ou refuser les cookies non essentiels via le bandeau affiché lors de votre première visite, et modifier à tout moment les réglages de votre navigateur pour supprimer ou bloquer les cookies",
        },
      ],
    },
    legalNotice: {
      title: "Mentions légales",
      updated: "Dernière mise à jour : 29 juillet 2026",
      sections: [
        {
          heading: "Éditeur du site",
          body: "Ce site a une vocation purement informative et présente le service de gestion de villas privées d'AN21. Il est publié sous le nom AN21. AN21 ne prend aucune réservation, aucun paiement et ne conclut aucun engagement contractuel via ce site ; les conditions de toute collaboration, y compris les coordonnées complètes de la société, sont précisées individuellement dans le contrat de service signé directement avec le client. Pour toute question, contactez office@an21.homes",
        },
        {
          heading: "Contact",
          body: "Artem, CEO, AN21 — +39 329 664 85 63 — office@an21.homes",
        },
        {
          heading: "Hébergement",
          body: "Ce site est hébergé par Vercel Inc. (vercel.com)",
        },
        {
          heading: "Propriété intellectuelle",
          body: "Les textes, images et l'ensemble du design de ce site sont la propriété d'AN21 et ne peuvent être reproduits sans accord écrit préalable",
        },
        {
          heading: "Étendue des prestations",
          body: "AN21 coordonne des prestataires tiers qualifiés, notamment des entreprises, des spécialistes et, le cas échéant, des partenaires en sécurité ou en recrutement. AN21 ne fournit pas de prestations juridiques, de sécurité, médicales ou financières, et ne garantit pas la sécurité d'une propriété. Le personnel de maison, le cas échéant, demeure engagé par le propriétaire ou par l'agence partenaire concernée, sauf accord écrit distinct",
        },
      ],
    },
  },
} satisfies Dictionary;

export default fr;
