# Svatební web

Elegantní, responzivní jednostránkový svatební web vytvořený pomocí Vite + React + TypeScript.

## 🚀 Rychlý start

### Lokální vývoj

1. **Instalace závislostí:**
   ```bash
   npm install
   ```

2. **Spuštění vývojového serveru:**
   ```bash
   npm run dev
   ```
   Web bude dostupný na `http://localhost:5173`

3. **Build pro produkci:**
   ```bash
   npm run build
   ```
   Výstup bude v adresáři `dist/`

## 📝 Úprava obsahu

Veškerý obsah webu je uložen v souboru **`src/data/siteData.ts`**. 

Pro úpravu stačí editovat tento soubor:
- Jména nevěsty a ženicha
- Datum a čas svatby
- Místo konání (včetně URL pro Google Maps)
- Texty sekcí (O nás, Dress code, Dary, atd.)
- Program dne (timeline)
- FAQ otázky a odpovědi
- Kontaktní údaje

Po úpravě stačí znovu spustit `npm run dev` nebo `npm run build`.

## 🌐 Deploy na Netlify

### Metoda 1: Přes Git (doporučeno)

1. Nahrajte projekt na GitHub/GitLab/Bitbucket
2. V Netlify Dashboard:
   - Klikněte na "New site from Git"
   - Vyberte váš repository
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Klikněte na "Deploy site"

### Metoda 2: Drag & Drop

1. Spusťte build:
   ```bash
   npm run build
   ```
2. V Netlify Dashboard:
   - Klikněte na "Add new site" → "Deploy manually"
   - Přetáhněte složku `dist` do prohlížeče
   - Web je nasazen!

### Netlify Forms

RSVP formulář je připraven pro Netlify Forms. Po nasazení:
1. Formulář automaticky začne fungovat (Netlify detekuje `data-netlify` atribut)
2. Odpovědi najdete v Netlify Dashboard → Forms
3. Můžete nastavit e-mailová upozornění v Netlify nastavení

## 🎨 Technologie

- **Vite** - Build tool
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Ikony

## 📁 Struktura projektu

```
├── src/
│   ├── components/      # React komponenty
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Section.tsx
│   │   ├── Timeline.tsx
│   │   ├── FAQ.tsx
│   │   ├── RSVPForm.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── siteData.ts  # Veškerý obsah webu
│   ├── App.tsx          # Hlavní komponenta
│   ├── main.tsx         # Entry point
│   └── styles.css       # Tailwind CSS
├── index.html
├── netlify.toml         # Netlify konfigurace
└── package.json
```

## 🔧 Přizpůsobení

### Barvy

Barvy lze upravit v `tailwind.config.js` v sekci `theme.extend.colors.wedding`.

### Google Maps

Pro získání správné URL pro Google Maps:
1. Otevřete [Google Maps](https://www.google.com/maps)
2. Najděte místo konání
3. Klikněte na "Sdílet" → "Vložit mapu"
4. Zkopírujte URL z `src` atributu iframe
5. Vložte do `siteData.location.mapUrl`

## 📱 Responzivní design

Web je plně responzivní a optimalizovaný pro:
- Mobilní telefony
- Tablety
- Desktop

## 📄 Licence

Soukromý projekt - svatební web.

---

Vytvořeno s ❤️ pro vaši svatbu

