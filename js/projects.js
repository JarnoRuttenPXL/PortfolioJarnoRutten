/* Alle projecten. Nieuw project = nieuw object hieronder toevoegen (zie HANDLEIDING.md).
   Volgorde in deze lijst = volgorde op de site. */
const PROJECTS = [
{
  id: 1, slug: "kikk-festival-2026", featured: true,
  title: "KIKK Festival 2026 – Social Media Campaign",
  category: "Graphic Design", course: "Graphic Skills 2", year: 2026,
  tags: ["Social media", "Visuele communicatie", "Typografie"],
  deliverables: "Instagram Story, Instagram Post, LinkedIn Post",
  shortDescription: "Drie platformspecifieke social-mediaontwerpen met een futuristische, herkenbare beeldtaal voor het KIKK Festival 2026.",
  fullDescription: [
    "Voor het vak Graphic Skills 2 kreeg ik de opdracht om drie proof-of-contentvarianten te ontwerpen voor het KIKK Festival 2026: een Instagram Story, een Instagram Post en een LinkedIn Post.",
    "Het doel was om een consistente en herkenbare visuele stijl te ontwikkelen die aansluit bij het innovatieve en creatieve karakter van het festival. Daarbij hield ik rekening met de verschillende formaten, doelgroepen en communicatiedoelen van elk platform.",
    "Ik werkte met een futuristische beeldtaal, neonkleuren, sterke typografie en digitale effecten om de sfeer van het festival visueel over te brengen."],
  theme: { accent: "#5CF85C", accent2: "#8B3DFF" },
  thumbnail: "Images/kikk/linkedin-post.png", thumbPos: "0% 50%", heroIndex: 2,
  images: [
    { src: "Images/kikk/instagram-post.png", w: 800, h: 1000, label: "Instagram Post", alt: "Instagram Post met een futuristisch menselijk profiel, een paars portaal en de kop Unlock the future before anyone else" },
    { src: "Images/kikk/instagram-story.png", w: 480, h: 853, label: "Instagram Story", alt: "Instagram Story met een figuur voor een gloeiend paars portaal en de kop The future starts here" },
    { src: "Images/kikk/linkedin-post.png", w: 1200, h: 627, label: "LinkedIn Post", alt: "LinkedIn Post met de stad Namen bij nacht, pixeleffecten en de kop Where digital meets creativity" }],
  sections: [
    { type: "text", title: "Het concept", body: ["Het festival draait om innovatie en creativiteit. Mijn concept vertaalt dat naar een futuristische beeldtaal: donkere achtergronden, felpaarse en neongroene accenten, vetgedrukte typografie en digitale glitch- en pixeleffecten.", "Immersieve sci-fi-beelden, zoals een menselijk profiel, een lichtgevend portaal en een stad die oplost in pixels, brengen de sfeer van het festival over."] },
    { type: "list", title: "Doelstellingen", items: ["Drie platformspecifieke socialmediaontwerpen maken.", "Visuele consistentie bewaren over alle drie de formaten.", "De futuristische en creatieve identiteit van KIKK Festival overbrengen.", "Ontwerpprincipes toepassen: compositie, contrast, hiërarchie en typografie.", "Boodschap en layout afstemmen op elk sociaal platform."] },
    { type: "gallery", title: "De drie ontwerpen" },
    { type: "device", image: 1, title: "Instagram Story", body: ["Een verticaal formaat voor beeldvullend kijken op mobiel. Een figuur loopt naar een gloeiend paars portaal; de kop ‘The future starts here’ staat groot in beeld, gevolgd door datum, locatie en een duidelijke call-to-action om je in te schrijven op de nieuwsbrief."] },
    { type: "device", image: 0, title: "Instagram Post", body: ["Een futuristisch menselijk profiel met een paars portaal als blikvanger. De kop ‘Unlock the future before anyone else’ staat groot onder het beeld, met ‘future’ in neongroen als accent, en de newsletter-oproep in een kader onderaan."] },
    { type: "device", image: 2, title: "LinkedIn Post", body: ["Een horizontale compositie voor de LinkedIn-feed: de tekst links, het nachtelijke Namen met pixeleffecten rechts. De kop ‘Where digital meets creativity’ benadrukt ‘digital’ in neongroen."] },
    { type: "list", title: "Ontwerpkeuzes en consistentie", items: ["Kleur: donkere achtergronden met paars en neongroen in alle drie de ontwerpen.", "Typografie: vetgedrukte witte koppen met één neongroen sleutelwoord.", "Herkenbare vaste elementen: het KIKK-logo, datum en locatie, en dezelfde call-to-action met nieuwsbriefkader.", "Beeld: immersieve sci-fi-beelden met glitch- en pixeleffecten die het futuristische karakter versterken."] },
    { type: "text", title: "Conclusie", body: ["Met dit project toonde ik dat ik één visuele stijl kan doorvertalen naar meerdere formaten en platformen. Ik paste compositie, contrast, hiërarchie en typografie toe en stemde de opbouw af op Instagram Story, Instagram Post en LinkedIn Post."] }]
},
{
  id: 2, slug: "missie-maasland", featured: true,
  title: "Missie Maasland", category: "UI/UX", course: "Werkplekleren 2",
  tags: ["Branding", "Prototype", "Musea Maaseik"],
  shortDescription: "Interactieve museumervaring en doelgroepgerichte branding voor Musea Maaseik.",
  fullDescription: ["Ontwikkelde interactieve museumervaring en doelgroepgerichte branding voor Musea Maaseik, met speelse storytelling, educatieve mini-games en visuele routes voor kinderen, gezinnen en volwassen bezoekers."],
  thumbnail: "Images/missie-maasland.jpg",
  images: [{ src: "Images/missie-maasland.jpg", w: 1258, h: 706, alt: "Visual van het project Missie Maasland voor Musea Maaseik" }],
  sections: [{ type: "list", title: "Mijn aandeel", items: ["Research fase", "Schetsen", "Logo", "Moodboard", "Prototype", "Componentenbibliotheek", "Brandbook"] }]
},
{
  id: 3, slug: "boodschappen-app", featured: true,
  title: "Boodschappen-app", category: "UI/UX", course: "UX Design",
  tags: ["App", "Teamproject"],
  shortDescription: "Een boodschappenapp met bestel- en leverfunctie en een lijstjesfunctie, ontwikkeld in een team van drie.",
  fullDescription: ["Voor het vak UX Design ontwikkelden we in een team van drie een boodschappenapp waarmee gebruikers eenvoudig producten kunnen bestellen en laten leveren. Daarnaast implementeerden we een lijstjesfunctie waarmee je je boodschappen kunt organiseren per gelegenheid of voorkeur, zoals Kerstmis, vegetarisch, BBQ en meer."],
  thumbnail: "Images/boodschappenApp.jpg",
  images: [{ src: "Images/boodschappenApp.jpg", w: 956, h: 843, alt: "Mockups van een boodschappen-app" }], sections: []
},
{
  id: 4, slug: "take-away-website", featured: false,
  title: "Take-away website", category: "Web Development", course: "Scripting",
  tags: ["HTML", "CSS", "JavaScript"],
  shortDescription: "Een take-awaywebsite in HTML, CSS en JavaScript, van design tot volledige uitwerking.",
  fullDescription: ["Voor het vak Scripting ontwikkelde ik een take-away-website met HTML, CSS en JavaScript. Ik stond in voor zowel het design als de volledige uitwerking."],
  thumbnail: "Images/TakeawayWebsite.jpg",
  images: [{ src: "Images/TakeawayWebsite.jpg", w: 953, h: 840, alt: "Preview van een take-away website" }], sections: []
},
{
  id: 5, slug: "onthaal-jobbeurs-mosa-rt", featured: false,
  title: "Onthaal jobbeurs Mosa-rt", category: "Andere projecten", course: "Middelbare school Mosa-rt",
  tags: ["Onthaal", "Organisatie"],
  shortDescription: "Onthaal van bezoekers en ondersteuning van de cafetaria tijdens de jobbeurs.",
  fullDescription: ["Tijdens Mosa-rt op mijn middelbare school hielp ik mee aan het onthaal: ik ontving bezoekers en begeleidde hen naar hun stand. Daarnaast ondersteunde ik de cafetaria door bedrijven te voorzien van drank."],
  thumbnail: "Images/onthaal.jpg",
  images: [{ src: "Images/onthaal.jpg", w: 956, h: 839, alt: "Foto van een jobbeurs onthaal" }], sections: []
}
];
