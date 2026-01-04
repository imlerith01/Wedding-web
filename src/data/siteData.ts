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
    images?: string[];
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
  dressCode: {
    title: string;
    text: string;
    // Delší verze (alternativa):
    // textLong: "Dress code nemáme – přijďte prosím v tom, v čem se cítíte hezky a pohodlně. Hlavně ať se spolu celý den užijeme a vytvoříme společně krásné vzpomínky. Důležité je, abyste se cítili dobře a mohli si svatbu užít naplno."
  };
  gifts: {
    title: string;
    text: string;
    account?: string;
  };
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
    time: "11:00",
  },
  location: {
    name: "Vinařství Holánek",
    address: "Vinařský dvůr Na Faře",
    city: "Jižní Morava",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5!2d16.574386!3d48.9285721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47131f1a2b3c4d5e%3A0x1234567890abcdef!2zVmluYcWIc3R2w60gSG9sw6Fua2s!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz",
    website: "https://www.vinarskydvurnafare.cz/svatby/",
    images: [
      "/images/16-0212-293-nahled.jpg",
      "/images/Foto-28.6.2025-4-scaled.jpg",
    ],
  },
  about: {
    title: "O nás",
    text: "Jsme Kuba a Katka a rádi bychom vás pozvali na náš velký den. Těšíme se, že tento významný okamžik prožijeme společně s našimi nejbližšími v krásném prostředí vinařství na jižní Moravě.",
  },
  program: [
    {
      time: "11:00",
      title: "Příjezd hostů",
      description: "Přivítání a občerstvení ve vinařském dvoře",
    },
    {
      time: "11:30",
      title: "Svatební obřad",
      description: "Svatební obřad v prostorách vinařství",
    },
    {
      time: "12:30",
      title: "Gratulace & focení",
      description: "Společné fotografie s hosty mezi vinicemi",
    },
    {
      time: "13:30",
      title: "Slavnostní hostina",
      description: "Svatební hostina ve vinařském dvoře",
    },
    {
      time: "15:00",
      title: "První tanec",
      description: "Otevření tanečního parketu",
    },
    {
      time: "16:00",
      title: "Krájení dortu",
      description: "Společné krájení svatebního dortu",
    },
  ],
  dressCode: {
    title: "Dress code",
    text: "Dress code nemáme – přijďte prosím v tom, v čem se cítíte dobře a pohodlně. Hlavně ať se spolu celý den užijeme.",
    // Delší verze (alternativa):
    // textLong: "Dress code nemáme – přijďte prosím v tom, v čem se cítíte dobře a pohodlně. Hlavně ať se spolu celý den užijeme a vytvoříme společně krásné vzpomínky. Důležité je, abyste se cítili dobře a mohli si svatbu užít naplno."
  },
  gifts: {
    title: "Dary",
    text: "Vaše přítomnost je pro nás tím největším darem. Pokud byste nás přesto chtěli potěšit, oceníme příspěvek na svatební cestu.",
  },
  contact: {
    phoneGroom: "+420 739 148 787",
    phoneBride: "+420 732 382 093",
    phone: "+420 739 148 787",
  },
};

