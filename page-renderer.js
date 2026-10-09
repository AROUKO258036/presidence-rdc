(() => {
  'use strict';

  const pages = {
  "presidence": {
    "title": "La Présidence",
    "eyebrow": "Institution",
    "intro": "Découvrez la Présidence de la République, le Chef de l’État, la Première dame, le Cabinet, les symboles et les textes de référence.",
    "kind": "institution",
    "cta": "Le Président",
    "ctaHref": "/president/le-president/"
  },
  "afrique": {
    "title": "Afrique",
    "eyebrow": "Coopération régionale",
    "intro": "Retrouvez les principales ressources relatives aux organisations régionales et à l’action de la RDC sur le continent africain.",
    "kind": "africa",
    "cta": "Union africaine",
    "ctaHref": "/afrique/union_africaine/"
  },
  "programmes": {
    "title": "Programmes",
    "eyebrow": "Action présidentielle",
    "intro": "Accédez aux programmes et initiatives prioritaires présentés par la Présidence de la République.",
    "kind": "program",
    "cta": "Programme présidentiel",
    "ctaHref": "/programme-presidentiel/"
  },
  "medias": {
    "title": "Médias",
    "eyebrow": "Photothèque et vidéos",
    "intro": "Consultez les galeries photo et vidéos institutionnelles de la Présidence de la République.",
    "kind": "gallery",
    "cta": "Galerie photo",
    "ctaHref": "/ressources/galerie/"
  },
  "ressources": {
    "title": "Ressources",
    "eyebrow": "Centre documentaire",
    "intro": "Discours, ordonnances, documents et autres publications institutionnelles de la Présidence.",
    "kind": "documents",
    "cta": "Tous les documents",
    "ctaHref": "/documents/"
  },
  "actualites-une": {
    "title": "À la une",
    "eyebrow": "Actualités",
    "intro": "Les publications mises en avant par la Présidence.",
    "kind": "archive",
    "cta": "Voir toutes les actualités",
    "ctaHref": "/actualites/"
  },
  "actualites": {
    "title": "Toutes les actualités",
    "eyebrow": "Actualités",
    "intro": "Retrouvez les communiqués, déplacements, rencontres et principales publications institutionnelles.",
    "kind": "archive",
    "cta": "Conseil des ministres",
    "ctaHref": "/conseil-de-ministres/"
  },
  "conseil-de-ministres": {
    "title": "Conseil des ministres",
    "eyebrow": "Actualités",
    "intro": "Espace consacré aux réunions et comptes rendus du Conseil des ministres.",
    "kind": "archive",
    "cta": "Toutes les actualités",
    "ctaHref": "/actualites/"
  },
  "president/le-president": {
    "title": "Le Président",
    "eyebrow": "La Présidence",
    "intro": "Présentation institutionnelle du Président de la République et accès à ses principales ressources publiques.",
    "kind": "profile",
    "cta": "Discours et allocutions",
    "ctaHref": "/ressources/discours/"
  },
  "president/premiere-dame": {
    "title": "La Première dame",
    "eyebrow": "La Présidence",
    "intro": "Présentation institutionnelle du Bureau de la Première dame et de ses activités publiques.",
    "kind": "profile",
    "cta": "Actualités",
    "ctaHref": "/actualites/"
  },
  "le-cabinet": {
    "title": "Cabinet du Président",
    "eyebrow": "La Présidence",
    "intro": "Présentation du Cabinet du Président et de ses principaux pôles institutionnels.",
    "kind": "institution",
    "cta": "Écrire à la Présidence",
    "ctaHref": "/ecrire-au-president/"
  },
  "anciens-presidents": {
    "title": "Anciens présidents",
    "eyebrow": "La Présidence",
    "intro": "Repères historiques consacrés aux anciens Présidents de la République démocratique du Congo.",
    "kind": "timeline",
    "cta": "Textes fondateurs",
    "ctaHref": "/textes-fondateurs/"
  },
  "symboles-de-la-republique": {
    "title": "Symboles de la République",
    "eyebrow": "La Présidence",
    "intro": "Espace de présentation des symboles officiels et repères institutionnels de la République.",
    "kind": "symbols",
    "cta": "Textes fondateurs",
    "ctaHref": "/textes-fondateurs/"
  },
  "textes-fondateurs": {
    "title": "Textes fondateurs",
    "eyebrow": "La Présidence",
    "intro": "Accès organisé aux textes institutionnels de référence publiés par la Présidence.",
    "kind": "documents",
    "cta": "Tous les documents",
    "ctaHref": "/documents/"
  },
  "services": {
    "title": "Services",
    "eyebrow": "Présidence de la République",
    "intro": "Programmes, initiatives et services institutionnels présentés par la Présidence.",
    "kind": "services",
    "cta": "Programme présidentiel",
    "ctaHref": "/programme-presidentiel/"
  },
  "afrique/union_africaine": {
    "title": "Union africaine",
    "eyebrow": "Afrique",
    "intro": "Actualités, documents et interventions liés aux activités de la RDC au sein de l’Union africaine.",
    "kind": "africa",
    "cta": "Voir les actualités",
    "ctaHref": "/actualites/"
  },
  "afrique/sadc": {
    "title": "SADC",
    "eyebrow": "Afrique",
    "intro": "Actualités et ressources relatives à la Communauté de développement de l’Afrique australe.",
    "kind": "africa",
    "cta": "Voir les actualités",
    "ctaHref": "/actualites/"
  },
  "afrique/ceeac": {
    "title": "CEEAC",
    "eyebrow": "Afrique",
    "intro": "Actualités et ressources relatives à la Communauté économique des États de l’Afrique centrale.",
    "kind": "africa",
    "cta": "Voir les actualités",
    "ctaHref": "/actualites/"
  },
  "afrique/cae": {
    "title": "CAE",
    "eyebrow": "Afrique",
    "intro": "Actualités et ressources relatives à la Communauté d’Afrique de l’Est.",
    "kind": "africa",
    "cta": "Voir les actualités",
    "ctaHref": "/actualites/"
  },
  "evenements": {
    "title": "Événements",
    "eyebrow": "Agenda",
    "intro": "Agenda institutionnel, rencontres et principaux événements publics.",
    "kind": "events",
    "cta": "Toutes les actualités",
    "ctaHref": "/actualites/"
  },
  "programme-presidentiel": {
    "title": "Programme présidentiel",
    "eyebrow": "Programmes",
    "intro": "Présentation structurée des axes et ressources liés au programme présidentiel.",
    "kind": "program",
    "cta": "Services",
    "ctaHref": "/services/"
  },
  "services/plan-national-du-numerique": {
    "title": "Plan national du numérique",
    "eyebrow": "Programmes",
    "intro": "Page dédiée aux ressources et informations publiques relatives au programme numérique.",
    "kind": "program",
    "cta": "Tous les services",
    "ctaHref": "/services/"
  },
  "services/lutte-contre-la-pauvrete": {
    "title": "Lutte contre la pauvreté",
    "eyebrow": "Programmes",
    "intro": "Page dédiée aux informations et ressources publiques relatives aux initiatives de lutte contre la pauvreté et les inégalités.",
    "kind": "program",
    "cta": "Tous les services",
    "ctaHref": "/services/"
  },
  "ressources/galerie": {
    "title": "Galerie photo",
    "eyebrow": "Médias",
    "intro": "Sélection de photographies institutionnelles organisées par publication et événement.",
    "kind": "gallery",
    "cta": "Vidéothèque",
    "ctaHref": "/ressources/video/"
  },
  "ressources/video": {
    "title": "Vidéothèque",
    "eyebrow": "Médias",
    "intro": "Vidéos institutionnelles, allocutions, cérémonies et reportages de la Présidence.",
    "kind": "video",
    "cta": "Galerie photo",
    "ctaHref": "/ressources/galerie/"
  },
  "ressources/discours": {
    "title": "Discours",
    "eyebrow": "Ressources",
    "intro": "Discours, allocutions et interventions publiques publiés par la Présidence.",
    "kind": "documents",
    "cta": "Documents",
    "ctaHref": "/documents/"
  },
  "ressources/ordonnances": {
    "title": "Ordonnances",
    "eyebrow": "Ressources",
    "intro": "Espace documentaire consacré aux ordonnances publiées par la Présidence.",
    "kind": "documents",
    "cta": "Documents",
    "ctaHref": "/documents/"
  },
  "documents": {
    "title": "Documents",
    "eyebrow": "Ressources",
    "intro": "Centre documentaire du portail : publications, communiqués et ressources institutionnelles.",
    "kind": "documents",
    "cta": "Discours",
    "ctaHref": "/ressources/discours/"
  },
  "ressources/lpda": {
    "title": "LPDA",
    "eyebrow": "Ressources",
    "intro": "Espace de ressources dédié aux publications classées dans la rubrique LPDA.",
    "kind": "documents",
    "cta": "Documents",
    "ctaHref": "/documents/"
  },
  "recherche": {
    "kind": "search",
  },
  "ecrire-au-president": {
    "title": "Écrire au Président",
    "eyebrow": "Contact",
    "intro": "Formulaire de contact institutionnel destiné à orienter votre message vers le service concerné.",
    "kind": "contact",
    "cta": "Retour à l’accueil",
    "ctaHref": "/"
  }
};
  const key = document.body.dataset.page;
  const page = pages[key];
  const target = document.querySelector('[data-page-content]');
  if (!page || !target) return;

  const cards = {
    archive: [
      ['Dernières publications', 'Une grille éditoriale prête à accueillir les articles et communiqués issus de votre base de données ou de votre CMS.'],
      ['Filtres', 'Prévoir un filtre par date, thème ou type de publication sans modifier la structure principale de la page.'],
      ['Pagination', 'Le composant est prévu pour accueillir une pagination ou un chargement progressif.']
    ],
    profile: [
      ['Biographie', 'Bloc de présentation avec portrait, repères biographiques et fonctions officielles.'],
      ['Activités', 'Bloc prévu pour les déplacements, audiences, rencontres et activités publiques.'],
      ['Ressources', 'Accès direct aux discours, documents, vidéos et actualités associés.']
    ],
    institution: [
      ['Organisation', 'Présentation claire de la structure et des principales entités du Cabinet.'],
      ['Départements', 'Cartes modulaires pour présenter les départements et leurs attributions publiques.'],
      ['Contact', 'Accès au formulaire institutionnel et aux informations publiques de contact.']
    ],
    timeline: [
      ['Repères historiques', 'Une chronologie peut être intégrée ici avec portrait, mandat et fiche détaillée.'],
      ['Archives', 'Prévoir des liens vers les documents et ressources historiques disponibles.'],
      ['Navigation', 'Chaque entrée peut ouvrir une fiche dédiée sans surcharger cette page.']
    ],
    symbols: [
      ['Drapeau', 'Carte prévue pour le visuel du drapeau et son contexte institutionnel.'],
      ['Armoiries', 'Carte prévue pour les armoiries et leur présentation officielle.'],
      ['Hymne et devise', 'Bloc réservé aux autres symboles nationaux et textes de référence.']
    ],
    documents: [
    ],
    services: [
      ['Programmes', 'Mise en avant des programmes et initiatives avec une carte par service.'],
      ['Accès rapide', 'Liens directs vers les pages détaillées sans multiplier les éléments dans la navigation principale.'],
      ['Suivi', 'Bloc prévu pour les publications et ressources associées aux programmes.']
    ],
    africa: [
      ['Actualités régionales', 'Zone destinée aux publications relatives à cette organisation ou communauté régionale.'],
      ['Documents', 'Accès aux communiqués, déclarations et textes associés.'],
      ['Médias', 'Espace prévu pour les images et vidéos des sommets et rencontres officielles.']
    ],
    events: [

    ],
    program: [

    ],

    gallery: [
      ['Albums récents', 'Grille responsive prévue pour les albums photos.'],
      ['Événements', 'Classement par déplacement, audience, cérémonie ou événement.'],
      ['Plein écran', 'Les photos pourront s’ouvrir dans une visionneuse sans quitter la page.']
    ],
    video: [
      ['Vidéos récentes', 'Grille responsive pour intégrer les vidéos de la Présidence.'],
      ['Allocutions', 'Catégorie dédiée aux prises de parole et interventions officielles.'],
      ['Reportages', 'Catégorie destinée aux reportages et récapitulatifs vidéo.']
    ],
    search: [],
    contact: []
  };


  const programDetails = {
    "programme-presidentiel": {
      badge: "Programme présidentiel",
      title: "Programme présidentiel",
      lead: "Le programme présidentiel rassemble les priorités portées par le Chef de l’État. Il a été structuré autour de grands secteurs et de piliers d’action, puis décliné dans le programme du Gouvernement.",
      source: "https://presidence.cd/programme-presidentiel",
      sourceLabel: "Voir la source officielle",
      vision: "Fonder un État moderne, vaincre la pauvreté, décrétée grande cause nationale pour construire un Congo fort tourné vers son développement dans la paix et la sécurité, un Congo réconcilié avec lui-même.",
      sectors: [
        {
          number: "01",
          title: "Bonne gouvernance",
          image: "https://presidence.cd/data1/images/bonne.png",
          pillars: [
            "Pacifier le pays",
            "Promouvoir la réconciliation nationale",
            "Consolider la démocratie",
            "Restaurer l'Etat de droit et son autorité",
            "Réhabiliter et redorer l'image de la diplomatie",
            "Lutter contre la corruption et les crimes économiques",
            "Consolider la stabilité macroéconomique, assainir les finances publiques et reformer le système financier"
          ]
        },
        {
          number: "02",
          title: "L'homme",
          image: "https://presidence.cd/data1/images/homme.png",
          pillars: [
            "Faire de l'éducation la clé du changement et le principal ascenseur social",
            "Mettre en place la couverture santé universelle",
            "Promouvoir l'emploi et la formation professionnelle continue",
            "Autonomiser la femme et promouvoir la jeunesse"
          ]
        },
        {
          number: "03",
          title: "Croissance économique durable",
          image: "https://presidence.cd/data1/images/croissance.png",
          pillars: [
            "Améloirer le climat des affaires et promouvoir l'entrepreneuriat",
            "Lutter contre le changement climatique",
            "Relever le défit de l'accès à l'électricité et à l'eau",
            "Aménager le territoire, développer et moderniser les infrastructures",
            "Développer l'agriculture et l'agro-industrie",
            "Diversifier l'économie et développer le commerce, l'industrie ainsi que les PME/PMI",
            "Rendre le secteur des mines et des hydrocarbures attractifs et performants",
            "Développer le tourisme, la culture et les arts"
          ]
        },
        {
          number: "04",
          title: "Société solidaire",
          image: "https://presidence.cd/data1/images/societe.png",
          pillars: [
            "Combattre la pauvreté, l'exclusion et la vulnérabilité"
          ]
        }
      ]
    },

    "services/plan-national-du-numerique": {
      badge: "Programme",
      title: "Plan National du Numérique « Horizon 2025 »",
      lead: "Le Plan National du Numérique est le document de planification stratégique qui porte la transformation numérique de la République Démocratique du Congo.",
      source: "https://presidence.cd/services/1/plan_national_du_numerique_horizon_2025",
      sourceLabel: "Voir la source officielle",
      vision: "Faire du Numérique congolais un levier d'intégration, de bonne gouvernance, de croissance économique et de progrès social.",
      prose: [
        "Le PNN résulte de la réflexion engagée dans le cadre de l’Atelier de Validation du Plan National du Numérique « Horizon 2025 », tenu à Kinshasa en septembre 2019.",
        "Il vise l’appropriation des technologies, le développement de l’économie numérique et la transformation de la société congolaise en une société de l’information.",
        "La stratégie s’organise autour de quatre piliers : Infrastructures, Contenus, Usages applicatifs, Gouvernance et Régulation."
      ],
      pillars: [
        ["01", "Infrastructures", "Modernisation des infrastructures et extension de la couverture des télécommunications et de l’accès au Numérique."],
        ["02", "Contenus", "Production, promotion, hébergement, sécurisation et sauvegarde des contenus numériques."],
        ["03", "Usages applicatifs", "Transformation numérique des administrations, des entreprises et développement des services numériques."],
        ["04", "Gouvernance & Régulation", "Cadre de gouvernance, régulation, confiance numérique et accompagnement de la transformation."]
      ],
      download: "https://presidence.cd/uploads/files/Presentation%20PNN_03_final.pdf",
      downloadLabel: "Télécharger le PNN officiel"
    },

    "services/lutte-contre-la-pauvrete": {
      badge: "Programme présidentiel",
      title: "Programme Présidentiel Accéléré de Lutte Contre la Pauvreté et les Inégalités",
      lead: "Le PPA-LCPI est une initiative présidentielle consacrée à l’amélioration des conditions de vie, en particulier dans les zones rurales et les communautés les plus vulnérables.",
      source: "https://www.presidence.cd/services/2/programme_presidentiel_accelere_de_lutte_contre_la_pauvrete_et_les_inegalites",
      sourceLabel: "Voir la source officielle",
      prose: [
        "La Présidence indique que le programme a été élaboré à l’initiative du Chef de l’État afin d’offrir une perspective de dignité, de promouvoir l’emploi, notamment pour les jeunes, et de lutter contre la précarité et l’exclusion.",
        "Le programme vise à améliorer l’accès des populations rurales aux infrastructures et services socioéconomiques de base, à promouvoir des économies locales et rurales dynamiques et à renforcer les capacités de gestion du développement local."
      ],
      stats: [
        ["63%", "Taux de pauvreté mentionné dans la présentation officielle du programme"],
        ["76%", "Part de la population indiquée comme vivant en insécurité alimentaire"],
        ["≈ 20 M", "Nombre de Congolais que le programme entend sortir de la précarité"]
      ],
      objectives: [
        ["01", "Services essentiels", "Améliorer l’accès des populations rurales aux infrastructures et services socioéconomiques de base."],
        ["02", "Économies locales", "Promouvoir des économies locales et rurales dynamiques."],
        ["03", "Développement local", "Renforcer les capacités de gestion du développement local."]
      ],
      download: "https://www.presidence.cd/uploads/files/PPA-LCPI-Doc-web.pdf",
      downloadLabel: "Télécharger le document officiel"
    }
  };

  function renderProgramDetail(data) {
    const actions = `
      <div class="program-detail__actions">
        ${data.download ? `<a class="program-detail__button program-detail__button--primary" href="${data.download}" target="_blank" rel="noopener">${data.downloadLabel}</a>` : ""}
        <a class="program-detail__button program-detail__button--secondary" href="${data.source}" target="_blank" rel="noopener">${data.sourceLabel}</a>
      </div>`;

    const prose = data.prose?.length
      ? `<div class="program-detail__prose">${data.prose.map(p => `<p>${p}</p>`).join("")}</div>`
      : "";

    const stats = data.stats?.length
      ? `<section class="program-detail__stats" aria-label="Chiffres clés">
          ${data.stats.map(([value,label]) => `
            <article class="program-stat">
              <strong>${value}</strong>
              <span>${label}</span>
            </article>`).join("")}
        </section>`
      : "";

    const objectives = data.objectives?.length
      ? `<section class="program-detail__section">
          <div class="program-detail__section-head">
            <span>Axes d’intervention</span>
            <h2>Les priorités du programme</h2>
          </div>
          <div class="program-detail__cards">
            ${data.objectives.map(([n,title,desc]) => `
              <article class="program-focus-card">
                <span class="program-focus-card__num">${n}</span>
                <h3>${title}</h3>
                <p>${desc}</p>
              </article>`).join("")}
          </div>
        </section>`
      : "";

    const pillars = data.pillars?.length
      ? `<section class="program-detail__section">
          <div class="program-detail__section-head">
            <span>Architecture stratégique</span>
            <h2>Quatre piliers structurants</h2>
          </div>
          <div class="program-detail__cards program-detail__cards--four">
            ${data.pillars.map(([n,title,desc]) => `
              <article class="program-focus-card">
                <span class="program-focus-card__num">${n}</span>
                <h3>${title}</h3>
                <p>${desc}</p>
              </article>`).join("")}
          </div>
        </section>`
      : "";

    const sectors = data.sectors?.length
      ? `<section class="program-detail__section">
          <div class="program-detail__section-head">
            <span>Programme présidentiel</span>
            <h2>Les secteurs et leurs piliers</h2>
          </div>
          <div class="program-sector-list">
            ${data.sectors.map((sector, sectorIndex) => `
              <article class="program-sector">
                <div class="program-sector__identity">
                  <span class="program-sector__number">${sector.number}</span>
                  <img src="${sector.image}" alt="" loading="lazy">
                  <h3>${sector.title}</h3>
                </div>
                <ol class="program-sector__pillars" start="${sectorIndex === 0 ? 1 : sectorIndex === 1 ? 8 : sectorIndex === 2 ? 12 : 20}">
                  ${sector.pillars.map(p => `<li>${p}</li>`).join("")}
                </ol>
              </article>`).join("")}
          </div>
        </section>`
      : "";

    return `<article class="program-detail">
      <header class="program-detail__hero">
        <div class="program-detail__hero-copy">
          <span class="program-detail__badge">${data.badge}</span>
          <h1>${data.title}</h1>
          <p>${data.lead}</p>
          ${actions}
        </div>
        <aside class="program-detail__vision">
          <span>Vision</span>
          <blockquote>${data.vision || "Une action publique structurée autour de priorités documentées."}</blockquote>
        </aside>
      </header>

      ${prose}
      ${stats}
      ${pillars}
      ${objectives}
      ${sectors}
    </article>`;
  }

  function cardGrid(items) {
    return `<div class="inner-grid">${items.map(([t,d], i) => `
      <article class="info-card">
        <span class="info-card__num">0${i+1}</span>
        <h2>${t}</h2>
        <p>${d}</p>
        <span class="info-card__arrow" aria-hidden="true">↗</span>
      </article>`).join('')}</div>`;
  }

  function programOverview() {
    const programmes = [
      ['01', 'Programme présidentiel', 'Présentation des axes et priorités du programme présidentiel.', '/programme-presidentiel/'],
      ['02', 'Plan national du numérique', 'Accéder aux ressources consacrées à la transformation numérique.', '/services/plan-national-du-numerique/'],
      ['03', 'Lutte contre la pauvreté', 'Accéder aux informations relatives aux initiatives de lutte contre la pauvreté.', '/services/lutte-contre-la-pauvrete/']
    ];

    return `<section class="program-overview">
      <div class="program-overview__head">
        <span class="program-overview__eyebrow">Action présidentielle</span>
        <h1>Programmes</h1>
        <p>Accédez aux programmes et initiatives prioritaires présentés par la Présidence de la République.</p>
      </div>
      <div class="inner-grid">
        ${programmes.map(([n,t,d,href]) => `<a class="info-card" href="${href}">
          <span class="info-card__num">${n}</span>
          <h2>${t}</h2>
          <p>${d}</p>
          <span class="info-card__arrow" aria-hidden="true">↗</span>
        </a>`).join('')}
      </div>
    </section>`;
  }

  function searchBlock() {
    return `<section class="search-panel" aria-label=" dans le portail">
      <form class="search-form" onsubmit="event.preventDefault()">
        <div class="search-form__row"><input id="site-search" type="search" placeholder="Actualité, discours, document…"><button type="submit">⌕</button></div>
      </form>
    </section>`;
  }

  function contactBlock() {
    return `<section class="contact-panel">
      <form class="contact-form" onsubmit="event.preventDefault()">
        <div class="field"><label for="nom">Nom complet</label><input id="nom" name="nom" autocomplete="name" required></div>
        <div class="field"><label for="email">Adresse e-mail</label><input id="email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="destinataire">Destinataire</label><select id="destinataire" name="destinataire"><option>Présidence de la République</option></select></div>
        <div class="field field--full"><label for="message">Votre message</label><textarea id="message" name="message" rows="8" required></textarea></div>
        <div class="field field--full"><button class="contact-form-submit" type="submit">Envoyer le message</button></div>
      </form>
    </section>`;
  }

  const body = programDetails[key] ? renderProgramDetail(programDetails[key]) : key === 'programmes' ? programOverview() : page.kind === 'search' ? searchBlock() : page.kind === 'contact' ? contactBlock() : cardGrid(cards[page.kind] || []);

  target.className = 'inner-main';
  target.innerHTML = `
   
    <section class="inner-content">
      ${body}
    </section>`;
})();
