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
    website?: string;
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
    phoneBride?: string;
    phoneGroom?: string;
  };
}

export const siteData: SiteData = {
  couple: {
    bride: "Katka",
    groom: "Kuba",
  },
  date: {
    day: "5",
    month: "září",
    year: "2026",
    time: "14:00",
  },
  location: {
    name: "Vinařství Holánek",
    address: "Vinařský dvůr Na Faře",
    city: "Jižní Morava",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5!2d16.574386!3d48.9285721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47131f1a2b3c4d5e%3A0x1234567890abcdef!2zVmluYcWIc3R2w60gSG9sw6Fua2s!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz",
    website: "https://www.vinarskydvurnafare.cz/svatby/",
  },
  about: {
    title: "O nás",
    text: "Jsme Kuba a Katka a rádi bychom vás pozvali na náš velký den. Těšíme se, že tento významný okamžik prožijeme společně s našimi nejbližšími v krásném prostředí vinařství na jižní Moravě.",
  },
  program: [
    {
      time: "14:00",
      title: "Příjezd hostů",
      description: "Přivítání a občerstvení ve vinařském dvoře",
    },
    {
      time: "14:30",
      title: "Obřad",
      description: "Svatební obřad v prostorách vinařství",
    },
    {
      time: "15:30",
      title: "Gratulace a focení",
      description: "Společné fotografie s hosty mezi vinicemi",
    },
    {
      time: "16:30",
      title: "Hostina",
      description: "Svatební hostina ve vinařském dvoře",
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
      "Parkování je k dispozici přímo u vinařství",
      "Nejbližší vlaková stanice: Znojmo (cca 15 km od vinařství)",
      "Možnost objednání svatebního autobusu (kontaktujte nás)",
    ],
  },
  accommodation: {
    title: "Ubytování",
    items: [
      "Vinařský dvůr Na Faře nabízí ubytování přímo v areálu - rezervace na jméno Kuba/Katka",
      "Další možnosti ubytování v okolí Znojma",
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
  },
  faq: [
    {
      question: "Do kdy můžu potvrdit účast?",
      answer: "Prosíme o potvrzení účasti do 1. srpna 2026 pomocí RSVP formuláře níže.",
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
      answer: "V případě dotazů nás kontaktujte na telefonu uvedeném v patičce stránky.",
    },
  ],
  contact: {
    phoneGroom: "+420 739 148 787",
    phoneBride: "+420 732 382 093",
    phone: "+420 739 148 787",
  },
};

