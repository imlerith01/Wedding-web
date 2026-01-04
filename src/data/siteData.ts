export interface SiteData {
  couple: {
    bride: string;
    groom: string;
  };
  date: {
    day: string;
    month: string;
    year: string;
    time: string;
  };
  location: {
    name: string;
    address: string;
    city: string;
    mapUrl: string;
  };
  about: {
    title: string;
    text: string;
  };
  program: Array<{
    time: string;
    title: string;
    description: string;
  }>;
  transportation: {
    title: string;
    items: string[];
  };
  accommodation: {
    title: string;
    items: string[];
  };
  dressCode: {
    title: string;
    text: string;
  };
  gifts: {
    title: string;
    text: string;
    account?: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  contact: {
    email?: string;
    phone?: string;
  };
}

export const siteData: SiteData = {
  couple: {
    bride: "Anna",
    groom: "Tomáš",
  },
  date: {
    day: "15",
    month: "června",
    year: "2024",
    time: "14:00",
  },
  location: {
    name: "Zámek Nové Město",
    address: "Zámecká 123",
    city: "Nové Město nad Metují",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.123456789!2d16.1234567!3d50.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA3JzI0LjQiTiAxNsKwMDcnMjQuNCJF!5e0!3m2!1scs!2scz!4v1234567890123!5m2!1scs!2scz",
  },
  about: {
    title: "O nás",
    text: "Jsme Anna a Tomáš a rádi bychom vás pozvali na náš velký den. Těšíme se, že tento významný okamžik prožijeme společně s našimi nejbližšími.",
  },
  program: [
    {
      time: "14:00",
      title: "Příjezd hostů",
      description: "Přivítání a občerstvení",
    },
    {
      time: "14:30",
      title: "Obřad",
      description: "Svatební obřad v zámecké kapli",
    },
    {
      time: "15:30",
      title: "Gratulace a focení",
      description: "Společné fotografie s hosty",
    },
    {
      time: "16:30",
      title: "Hostina",
      description: "Svatební hostina v zámeckém sále",
    },
    {
      time: "20:00",
      title: "První tanec",
      description: "Otevření tanečního parketu",
    },
    {
      time: "22:00",
      title: "Krájení dortu",
      description: "Společné krájení svatebního dortu",
    },
  ],
  transportation: {
    title: "Doprava",
    items: [
      "Parkování je k dispozici přímo u zámku (kapacita 50 aut)",
      "Nejbližší vlaková stanice: Nové Město nad Metují (2 km od zámku)",
      "Možnost objednání svatebního autobusu z centra města (kontaktujte nás)",
    ],
  },
  accommodation: {
    title: "Ubytování",
    items: [
      "Hotel Zámek (přímo v areálu) - rezervace na jméno Nováková/Svoboda",
      "Penzion U Zámku (200 m od zámku) - tel: +420 123 456 789",
      "Doporučujeme rezervovat ubytování s předstihem",
    ],
  },
  dressCode: {
    title: "Dress code",
    text: "Prosíme o slavnostní oblečení. Pánové: oblek nebo košile s kalhotami. Dámy: společenské šaty nebo kostým. Barvy: prosíme vyhnout se bílé barvě.",
  },
  gifts: {
    title: "Dary",
    text: "Vaše přítomnost je pro nás tím největším darem. Pokud byste nás přesto chtěli potěšit, oceníme příspěvek na svatební cestu.",
    account: "1234567890/0800",
  },
  faq: [
    {
      question: "Do kdy můžu potvrdit účast?",
      answer: "Prosíme o potvrzení účasti do 1. května 2024 pomocí RSVP formuláře níže.",
    },
    {
      question: "Mohu přijít s doprovodem?",
      answer: "Ano, prosíme však o uvedení počtu osob v RSVP formuláři.",
    },
    {
      question: "Je možné přinést děti?",
      answer: "Ano, děti jsou vítány. Prosíme o uvedení jejich počtu v RSVP formuláři.",
    },
    {
      question: "Co když mám dietní omezení?",
      answer: "Prosíme o uvedení jakýchkoliv dietních omezení nebo alergií v poznámce RSVP formuláře.",
    },
    {
      question: "Kde najdu více informací?",
      answer: "V případě dotazů nás kontaktujte na e-mailu nebo telefonu uvedeném v patičce stránky.",
    },
  ],
  contact: {
    email: "anna.tomas@svatba.cz",
    phone: "+420 123 456 789",
  },
};

