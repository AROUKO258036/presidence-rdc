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

  function cardGrid(items) {
    return `<div class="inner-grid">${items.map(([t,d], i) => `
      <article class="info-card">
        <span class="info-card__num">0${i+1}</span>
        <h2>${t}</h2>
        <p>${d}</p>
        <span class="info-card__arrow" aria-hidden="true">↗</span>
      </article>`).join('')}</div>`;
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

  const body = page.kind === 'search' ? searchBlock() : page.kind === 'contact' ? contactBlock() : cardGrid(cards[page.kind] || []);

  target.className = 'inner-main';
  target.innerHTML = `
   
    <section class="inner-content">
      ${body}
    </section>`;
})();
