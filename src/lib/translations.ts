export type Language = 'en' | 'it' | 'es' | 'fr';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export const translations = {
  en: {
    // Header
    synopsis: 'Synopsis',
    theBook: 'The Book',
    crowdfunding: 'Crowdfunding',
    theAuthor: 'The Author',
    acknowledgments: 'Acknowledgments',
    supportNow: 'Support Now',
    
    // Hero
    presents: 'presents',
    heroDescription: 'When a man has nothing left to lose and decides to take action, it\'s best not to get in his way. A breathtaking action thriller that will keep you turning pages until the very last line.',
    supportCrowdfunding: 'Support the Crowdfunding',
    discoverMore: 'Discover More',
    comingSoon: 'Coming Soon',
    thriller: 'Thriller',
    action: 'Action',
    
    // Synopsis
    theStory: 'The Story',
    synopsisTitle: 'Synopsis',
    synopsisText: 'Max is a man living between adrenaline and secrets. Between extreme feats and dangerous missions, an unexpected event will change the stakes. A dark world of international intrigue awaits, where survival demands ingenuity, courage, and cold blood. Who is Max really? And how far is he willing to go to protect those who matter? A high-tension action thriller that keeps the reader on the edge of their seat.',
    
    // About/Book
    officialTrailer: 'Official Trailer',
    trailerDescription: 'When what you must save has no price, everything is at stake. Faced with danger, many flee. Only a few stand their ground. Among them is a man at ease in danger. And he masters it.',
    explosiveAction: 'Explosive Action',
    explosiveActionDesc: 'Heart-pounding scenes that will leave you breathless, intense combat and thrilling escapes in a world of danger.',
    grippingPlot: 'Gripping Plot',
    grippingPlotDesc: 'A story of survival, betrayal and redemption that will keep you glued to the pages until the very last line.',
    unforgettableCharacters: 'Unforgettable Characters',
    unforgettableCharactersDesc: 'Max Danger and his companions: imperfect heroes fighting for what matters in a world that has lost everything.',
    bookQuote: '"In a world reduced to ashes, Max Danger is the man everyone fears and many seek. But the real danger isn\'t what\'s chasing him... it\'s what lies hidden inside him."',
    fromIntroduction: '— From the novel\'s introduction',
    
    // Crowdfunding
    crowdfundingActive: 'Crowdfunding Active',
    support: 'Support',
    crowdfundingDescription: 'Become part of this adventure. Choose your support level and help me bring Max Danger to bookstores.',
    reader: 'Reader',
    readerDesc: 'A digital copy of the novel',
    readerFeature1: 'eBook in ePub and PDF format',
    readerFeature2: 'Early access to reading',
    readerFeature3: 'Acknowledgment in the book',
    supporter: 'Supporter',
    supporterDesc: 'Paperback + digital copy',
    supporterFeature1: 'Signed paperback',
    supporterFeature2: 'eBook in all formats',
    supporterFeature3: 'Exclusive bookmark',
    supporterFeature4: 'Special acknowledgment',
    mostPopular: 'Most Popular',
    patron: 'Patron',
    patronDesc: 'Collector\'s edition',
    patronFeature1: 'Limited numbered edition',
    patronFeature2: 'Cover poster',
    patronFeature3: 'Your name in the novel',
    patronFeature4: 'All previous bonuses',
    choose: 'Choose',
    crowdfundingQuestions: 'Have questions about the crowdfunding? Contact me directly.',
    
    // Author
    authorTitle: 'The Author',
    authorBio: 'Passionate about thrillers and action since childhood, Massimiliano Roberto has always dreamed of creating stories that keep readers on the edge of their seats. MAX DANGER is his debut novel, born from years of passion for action fiction and the desire to tell a story that combines adrenaline and emotion.',
    
    // Footer
    contact: 'Contact',
    allRightsReserved: 'All rights reserved.',
    visits: 'visits',
  },
  it: {
    // Header
    synopsis: 'Sinossi',
    theBook: 'Il Libro',
    crowdfunding: 'Crowdfunding',
    theAuthor: 'L\'Autore',
    acknowledgments: 'Ringraziamenti',
    supportNow: 'Sostieni Ora',
    
    // Hero
    presents: 'presenta',
    heroDescription: 'Quando un uomo non ha più nulla da perdere e decide di agire, è meglio non mettersi sulla sua strada. Un thriller d\'azione mozzafiato che ti terrà incollato alle pagine fino all\'ultima riga.',
    supportCrowdfunding: 'Sostieni il Crowdfunding',
    discoverMore: 'Scopri di Più',
    comingSoon: 'In Arrivo',
    thriller: 'Thriller',
    action: 'Azione',
    
    // Synopsis
    theStory: 'La Storia',
    synopsisTitle: 'Sinossi',
    synopsisText: 'Max è un uomo che vive tra adrenalina e segreti. Tra imprese estreme e missioni pericolose, un evento inaspettato cambierà le carte in tavola. Un mondo oscuro di intrighi internazionali lo attende, dove la sopravvivenza richiede ingegno, coraggio e sangue freddo. Chi è veramente Max? E fino a che punto è disposto a spingersi per proteggere chi conta? Un thriller d\'azione ad alta tensione che tiene il lettore col fiato sospeso.',
    
    // About/Book
    officialTrailer: 'Trailer Ufficiale',
    trailerDescription: 'Quando ciò che devi salvare non ha prezzo, tutto è in gioco. Di fronte al pericolo, molti fuggono. Solo pochi tengono la posizione. Tra loro c\'è un uomo a suo agio nel pericolo. E lo padroneggia.',
    explosiveAction: 'Azione Esplosiva',
    explosiveActionDesc: 'Scene mozzafiato che ti lasceranno senza respiro, combattimenti intensi e fughe emozionanti in un mondo di pericolo.',
    grippingPlot: 'Trama Avvincente',
    grippingPlotDesc: 'Una storia di sopravvivenza, tradimento e redenzione che ti terrà incollato alle pagine fino all\'ultima riga.',
    unforgettableCharacters: 'Personaggi Indimenticabili',
    unforgettableCharactersDesc: 'Max Danger e i suoi compagni: eroi imperfetti che lottano per ciò che conta in un mondo che ha perso tutto.',
    bookQuote: '"In un mondo ridotto in cenere, Max Danger è l\'uomo che tutti temono e molti cercano. Ma il vero pericolo non è ciò che lo insegue... è ciò che si nasconde dentro di lui."',
    fromIntroduction: '— Dall\'introduzione del romanzo',
    
    // Crowdfunding
    crowdfundingActive: 'Crowdfunding Attivo',
    support: 'Sostieni',
    crowdfundingDescription: 'Diventa parte di questa avventura. Scegli il tuo livello di supporto e aiutami a portare Max Danger nelle librerie.',
    reader: 'Lettore',
    readerDesc: 'Una copia digitale del romanzo',
    readerFeature1: 'eBook in formato ePub e PDF',
    readerFeature2: 'Accesso anticipato alla lettura',
    readerFeature3: 'Ringraziamento nel libro',
    supporter: 'Sostenitore',
    supporterDesc: 'Copia cartacea + digitale',
    supporterFeature1: 'Copia cartacea firmata',
    supporterFeature2: 'eBook in tutti i formati',
    supporterFeature3: 'Segnalibro esclusivo',
    supporterFeature4: 'Ringraziamento speciale',
    mostPopular: 'Più Popolare',
    patron: 'Mecenate',
    patronDesc: 'Edizione da collezione',
    patronFeature1: 'Edizione limitata numerata',
    patronFeature2: 'Poster della copertina',
    patronFeature3: 'Il tuo nome nel romanzo',
    patronFeature4: 'Tutti i bonus precedenti',
    choose: 'Scegli',
    crowdfundingQuestions: 'Hai domande sul crowdfunding? Contattami direttamente.',
    
    // Author
    authorTitle: 'L\'Autore',
    authorBio: 'Appassionato di thriller e azione fin da bambino, Massimiliano Roberto ha sempre sognato di creare storie che tengano i lettori col fiato sospeso. MAX DANGER è il suo romanzo d\'esordio, nato da anni di passione per la narrativa d\'azione e dal desiderio di raccontare una storia che unisca adrenalina ed emozione.',
    
    // Footer
    contact: 'Contatti',
    allRightsReserved: 'Tutti i diritti riservati.',
    visits: 'visite',
  },
  es: {
    // Header
    synopsis: 'Sinopsis',
    theBook: 'El Libro',
    crowdfunding: 'Crowdfunding',
    theAuthor: 'El Autor',
    acknowledgments: 'Agradecimientos',
    supportNow: 'Apoya Ahora',
    
    // Hero
    presents: 'presenta',
    heroDescription: 'Cuando un hombre no tiene nada que perder y decide actuar, es mejor no interponerse en su camino. Un thriller de acción impresionante que te mantendrá pasando páginas hasta la última línea.',
    supportCrowdfunding: 'Apoya el Crowdfunding',
    discoverMore: 'Descubre Más',
    comingSoon: 'Próximamente',
    thriller: 'Thriller',
    action: 'Acción',
    
    // Synopsis
    theStory: 'La Historia',
    synopsisTitle: 'Sinopsis',
    synopsisText: 'Max es un hombre que vive entre la adrenalina y los secretos. Entre hazañas extremas y misiones peligrosas, un evento inesperado cambiará las reglas del juego. Un mundo oscuro de intrigas internacionales le espera, donde la supervivencia exige ingenio, coraje y sangre fría. ¿Quién es realmente Max? ¿Y hasta dónde está dispuesto a llegar para proteger a quienes le importan? Un thriller de acción de alta tensión que mantiene al lector en vilo.',
    
    // About/Book
    officialTrailer: 'Tráiler Oficial',
    trailerDescription: 'Cuando lo que debes salvar no tiene precio, todo está en juego. Ante el peligro, muchos huyen. Solo unos pocos se mantienen firmes. Entre ellos hay un hombre que se siente cómodo en el peligro. Y lo domina.',
    explosiveAction: 'Acción Explosiva',
    explosiveActionDesc: 'Escenas trepidantes que te dejarán sin aliento, combates intensos y emocionantes escapadas en un mundo de peligro.',
    grippingPlot: 'Trama Apasionante',
    grippingPlotDesc: 'Una historia de supervivencia, traición y redención que te mantendrá pegado a las páginas hasta la última línea.',
    unforgettableCharacters: 'Personajes Inolvidables',
    unforgettableCharactersDesc: 'Max Danger y sus compañeros: héroes imperfectos luchando por lo que importa en un mundo que lo ha perdido todo.',
    bookQuote: '"En un mundo reducido a cenizas, Max Danger es el hombre al que todos temen y muchos buscan. Pero el verdadero peligro no es lo que le persigue... es lo que se oculta dentro de él."',
    fromIntroduction: '— De la introducción de la novela',
    
    // Crowdfunding
    crowdfundingActive: 'Crowdfunding Activo',
    support: 'Apoya',
    crowdfundingDescription: 'Sé parte de esta aventura. Elige tu nivel de apoyo y ayúdame a llevar Max Danger a las librerías.',
    reader: 'Lector',
    readerDesc: 'Una copia digital de la novela',
    readerFeature1: 'eBook en formato ePub y PDF',
    readerFeature2: 'Acceso anticipado a la lectura',
    readerFeature3: 'Agradecimiento en el libro',
    supporter: 'Patrocinador',
    supporterDesc: 'Copia impresa + digital',
    supporterFeature1: 'Copia impresa firmada',
    supporterFeature2: 'eBook en todos los formatos',
    supporterFeature3: 'Marcapáginas exclusivo',
    supporterFeature4: 'Agradecimiento especial',
    mostPopular: 'Más Popular',
    patron: 'Mecenas',
    patronDesc: 'Edición de colección',
    patronFeature1: 'Edición limitada numerada',
    patronFeature2: 'Póster de la portada',
    patronFeature3: 'Tu nombre en la novela',
    patronFeature4: 'Todos los bonus anteriores',
    choose: 'Elegir',
    crowdfundingQuestions: '¿Tienes preguntas sobre el crowdfunding? Contáctame directamente.',
    
    // Author
    authorTitle: 'El Autor',
    authorBio: 'Apasionado por los thrillers y la acción desde la infancia, Massimiliano Roberto siempre ha soñado con crear historias que mantengan a los lectores en vilo. MAX DANGER es su novela debut, nacida de años de pasión por la ficción de acción y el deseo de contar una historia que combine adrenalina y emoción.',
    
    // Footer
    contact: 'Contacto',
    allRightsReserved: 'Todos los derechos reservados.',
    visits: 'visitas',
  },
  fr: {
    // Header
    synopsis: 'Synopsis',
    theBook: 'Le Livre',
    crowdfunding: 'Crowdfunding',
    theAuthor: 'L\'Auteur',
    acknowledgments: 'Remerciements',
    supportNow: 'Soutenir',
    
    // Hero
    presents: 'présente',
    heroDescription: 'Quand un homme n\'a plus rien à perdre et décide d\'agir, il vaut mieux ne pas se mettre en travers de son chemin. Un thriller d\'action époustouflant qui vous tiendra en haleine jusqu\'à la dernière ligne.',
    supportCrowdfunding: 'Soutenir le Crowdfunding',
    discoverMore: 'En Savoir Plus',
    comingSoon: 'Bientôt Disponible',
    thriller: 'Thriller',
    action: 'Action',
    
    // Synopsis
    theStory: 'L\'Histoire',
    synopsisTitle: 'Synopsis',
    synopsisText: 'Max est un homme qui vit entre l\'adrénaline et les secrets. Entre exploits extrêmes et missions dangereuses, un événement inattendu va changer la donne. Un monde obscur d\'intrigues internationales l\'attend, où la survie exige ingéniosité, courage et sang-froid. Qui est vraiment Max ? Et jusqu\'où est-il prêt à aller pour protéger ceux qui comptent ? Un thriller d\'action haute tension qui tient le lecteur en haleine.',
    
    // About/Book
    officialTrailer: 'Bande-Annonce Officielle',
    trailerDescription: 'Quand ce que vous devez sauver n\'a pas de prix, tout est en jeu. Face au danger, beaucoup fuient. Seuls quelques-uns tiennent bon. Parmi eux, un homme à l\'aise dans le danger. Et il le maîtrise.',
    explosiveAction: 'Action Explosive',
    explosiveActionDesc: 'Des scènes palpitantes qui vous couperont le souffle, des combats intenses et des évasions haletantes dans un monde de danger.',
    grippingPlot: 'Intrigue Captivante',
    grippingPlotDesc: 'Une histoire de survie, de trahison et de rédemption qui vous tiendra collé aux pages jusqu\'à la dernière ligne.',
    unforgettableCharacters: 'Personnages Inoubliables',
    unforgettableCharactersDesc: 'Max Danger et ses compagnons : des héros imparfaits luttant pour ce qui compte dans un monde qui a tout perdu.',
    bookQuote: '"Dans un monde réduit en cendres, Max Danger est l\'homme que tous craignent et que beaucoup recherchent. Mais le vrai danger n\'est pas ce qui le poursuit... c\'est ce qui se cache en lui."',
    fromIntroduction: '— De l\'introduction du roman',
    
    // Crowdfunding
    crowdfundingActive: 'Crowdfunding Actif',
    support: 'Soutenir',
    crowdfundingDescription: 'Faites partie de cette aventure. Choisissez votre niveau de soutien et aidez-moi à amener Max Danger dans les librairies.',
    reader: 'Lecteur',
    readerDesc: 'Une copie numérique du roman',
    readerFeature1: 'eBook au format ePub et PDF',
    readerFeature2: 'Accès anticipé à la lecture',
    readerFeature3: 'Remerciement dans le livre',
    supporter: 'Supporter',
    supporterDesc: 'Copie papier + numérique',
    supporterFeature1: 'Copie papier signée',
    supporterFeature2: 'eBook dans tous les formats',
    supporterFeature3: 'Marque-page exclusif',
    supporterFeature4: 'Remerciement spécial',
    mostPopular: 'Le Plus Populaire',
    patron: 'Mécène',
    patronDesc: 'Édition collector',
    patronFeature1: 'Édition limitée numérotée',
    patronFeature2: 'Poster de la couverture',
    patronFeature3: 'Votre nom dans le roman',
    patronFeature4: 'Tous les bonus précédents',
    choose: 'Choisir',
    crowdfundingQuestions: 'Des questions sur le crowdfunding ? Contactez-moi directement.',
    
    // Author
    authorTitle: 'L\'Auteur',
    authorBio: 'Passionné par les thrillers et l\'action depuis l\'enfance, Massimiliano Roberto a toujours rêvé de créer des histoires qui tiennent les lecteurs en haleine. MAX DANGER est son premier roman, né d\'années de passion pour la fiction d\'action et du désir de raconter une histoire qui allie adrénaline et émotion.',
    
    // Footer
    contact: 'Contact',
    allRightsReserved: 'Tous droits réservés.',
    visits: 'visites',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
