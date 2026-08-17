export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'degustation' | 'veggy' | 'sea' | 'sweet' | 'drinks';
  subCategory?: string;
  isSignature?: boolean;
  isVegetarian?: boolean;
  image?: string;
  pairing?: string;
}

export interface MenuCategory {
  id: 'degustation' | 'veggy' | 'sea' | 'sweet' | 'drinks';
  title: string;
  subtitle: string;
  description?: string;
  note?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'degustation',
    title: 'Menu Dégustation 07 Services',
    subtitle: 'L\'Expérience Signature par le Chef Rabah Ourrad',
    description: 'Un voyage gastronomique d\'exception orchestré en 7 temps poétiques.',
    note: 'Ce menu inclut : Eau plate, Eau gazeuse, Jus maison, Boisson gazeuse, Café & Thé'
  },
  {
    id: 'veggy',
    title: 'Veggy\'s Side',
    subtitle: 'Inspirations du Potager & de la Terre',
    description: 'Une mise en valeur végétale magnifiée par des textures et vinaigrettes parfumées.'
  },
  {
    id: 'sea',
    title: 'From The Sea',
    subtitle: 'Créations Marines & Fraîcheur Méditerranéenne',
    description: 'Pêche locale et trésors marins travaillés avec créativité et finesse.'
  },
  {
    id: 'sweet',
    title: 'Sweet Side & Drinks',
    subtitle: 'Fin de Repas Gourmande & Élixir Raffiné',
    description: 'Desserts d\'auteur élaborés minute et sélection de boissons chaudes et froides.'
  }
];

export const DEGUSTATION_ITEMS: MenuItem[] = [
  {
    id: 'deg-1',
    name: '01. Carpaccio de betterave',
    description: 'Émulsion de betterave acidulée, diamants de céleri compressé, vinaigrette framboise, dés de betterave au four, pignons de pin, Feta de lait de chèvre.',
    price: '1er Service',
    category: 'degustation',
    isSignature: true,
    isVegetarian: true,
    image: '/src/assets/images/carpaccio_betterave_1786580992345.jpg',
    pairing: 'Jus d\'hibiscus frais infusé à la menthe'
  },
  {
    id: 'deg-2',
    name: '02. Tarte tatin oignon',
    description: 'Pâte feuilletée croustillante, oignons rouges caramélisés avec délicatesse, purée d\'oignon brûlée aux accents fumés.',
    price: '2ème Service',
    category: 'degustation',
    isVegetarian: true,
    pairing: 'Infusion maison thym & agrumes'
  },
  {
    id: 'deg-3',
    name: '03. Crevettes dynamite',
    description: 'Crevette géante en tempura ultra-croustillante, sauce piquante Thaï maison, réduction de bisque de crevettes intense, crispy oignons.',
    price: '3ème Service',
    category: 'degustation',
    isSignature: true,
    image: '/src/assets/images/crevettes_dynamite_1786581015355.jpg',
    pairing: 'Pina Colada OR aux notes de coco et ananas frais'
  },
  {
    id: 'deg-4',
    name: '04. Brochette de lasagne',
    description: 'Viande hachée sélectionnée au goût chorizo, feuille de pasta faite main à l\'atelier, sabayon Carbonara onctueux.',
    price: '4ème Service',
    category: 'degustation',
    pairing: 'Eau gazeuse artisanale citronnée'
  },
  {
    id: 'deg-5',
    name: '05. Plat de côte braisé',
    description: 'Viande braisée longuement jusqu\'à pures fondance, purée Mousseline soyeuse, sauce ragoût signature du Chef, oignons pickles acidulés.',
    price: '5ème Service',
    category: 'degustation',
    isSignature: true,
    pairing: 'Nectar de grenade glacé'
  },
  {
    id: 'deg-6',
    name: '06. Pre dessert',
    description: 'Intermède rafraîchissant autour de la fraise compressée et des aromates du jardin.',
    price: '6ème Service',
    category: 'degustation',
    pairing: 'Émulsion verveine & miel'
  },
  {
    id: 'deg-7',
    name: '07. Soufflé exotique',
    description: 'Soufflé léger au fruit de la passion et mangue, gel passion-orange, sorbet rafraîchissant aux fruits exotiques.',
    price: '7ème Service',
    category: 'degustation',
    isSignature: true,
    pairing: 'Café solo moulu minute ou Thé à la menthe maison'
  }
];

export const VEGGY_ITEMS: MenuItem[] = [
  {
    id: 'veg-1',
    name: 'Tarte tatin oignon',
    description: 'Pâte feuilletée, oignon rouge caramélisé, purée d\'oignon brûlée.',
    price: '2 000 DZD',
    category: 'veggy',
    isVegetarian: true
  },
  {
    id: 'veg-2',
    name: 'Cœur de Romaine',
    description: 'Cœur de romaine plancha, dressing César du Chef, poulet mariné façon OR, tomates cerises confites, émulsion de laitue.',
    price: '1 900 DZD',
    category: 'veggy'
  },
  {
    id: 'veg-3',
    name: 'Citrouille & Feta',
    description: 'Mille-feuilles de Butternut squash, Feta de chèvres algérienne maison KHAZANA, croustillant de dioul traditionnel.',
    price: '2 100 DZD',
    category: 'veggy',
    isSignature: true,
    isVegetarian: true
  },
  {
    id: 'veg-4',
    name: 'Aubergine miso',
    description: 'Aubergine gratinée au caramel de miso, moutabel d\'aubergine, émulsion yaourt grec et réduction de sauce grenade.',
    price: '2 000 DZD',
    category: 'veggy',
    isSignature: true,
    isVegetarian: true
  },
  {
    id: 'veg-5',
    name: 'Carpaccio de betterave',
    description: 'Émulsion de betterave acidulée, diamants de céleri compressé, vinaigrette framboise, dés de betterave au four, pignons de pin, miettes de pistache.',
    price: '1 900 DZD',
    category: 'veggy',
    isVegetarian: true,
    image: '/src/assets/images/carpaccio_betterave_1786580992345.jpg'
  }
];

export const SEA_ITEMS: MenuItem[] = [
  {
    id: 'sea-1',
    name: 'Ceviche fruits de mer',
    description: 'Quinoa assaisonné, rosaces de poulpe mi-cuit, daurade fumée, moules fraîches, petites crevettes, Leche de tigre péruvienne acidulée.',
    price: '2 300 DZD',
    category: 'sea',
    isSignature: true
  },
  {
    id: 'sea-2',
    name: 'Crevettes dynamite',
    description: 'Crevette en tempura croustillante, sauce piquante Thaï, réduction bisque de crevettes savoureuse, crispy oignons.',
    price: '2 500 DZD',
    category: 'sea',
    isSignature: true,
    image: '/src/assets/images/crevettes_dynamite_1786581015355.jpg'
  },
  {
    id: 'sea-3',
    name: 'Tagliatelles sépia',
    description: 'Tagliatelles de sépia sans pâte, bourghoul aux herbes aromatiques, consommé de tentacules de sépia, champignons shiitake, avocat.',
    price: '2 400 DZD',
    category: 'sea'
  },
  {
    id: 'sea-4',
    name: 'Brochette de poisson du jour',
    description: 'Pêche locale du jour, purée de chou-fleur, chou-fleur pickles, poudre harissa fumée, huile de charbon, beurre blanc au yuzu.',
    price: '2 300 DZD',
    category: 'sea'
  },
  {
    id: 'sea-5',
    name: 'Tuna two ways',
    description: 'Ventrèche de thon snackée à la plancha, mousseline au pimenton de la vera, chips de nori, tartare de thon à l\'huile aromatique.',
    price: '2 200 DZD',
    category: 'sea',
    isSignature: true
  }
];

export const SWEET_ITEMS: MenuItem[] = [
  {
    id: 'swt-1',
    name: 'Fondant chocolat noir piquant',
    description: 'Cœur coulant chocolat noir piquant, glace artisanale maïs et vanille, chantilly vanille, gel de mangue acidulé.',
    price: '1 900 DZD',
    category: 'sweet',
    isSignature: true
  },
  {
    id: 'swt-2',
    name: 'Soufflé exotique',
    description: 'Soufflé aérien au fruit de la passion et mangue, gel passion-orange, sorbet exotique fait maison.',
    price: '1 900 DZD',
    category: 'sweet'
  },
  {
    id: 'swt-3',
    name: 'Pêche & poire',
    description: 'Poires pochées aux épices douces, carpaccio de pêches, sorbet pêche-romarin, chantilly fève Tonka, moelleux cannelle de Ceylan.',
    price: '1 900 DZD',
    category: 'sweet'
  },
  {
    id: 'swt-4',
    name: 'Coupe fraise au aromate',
    description: 'Fraise compressée à la vanille de Madagascar, émulsion fraise-yuzu, crème anglaise verveine-miel, génoise pistache-sauge, espuma de laurier, citron confit, tuile menthe, sorbet fraise-framboise.',
    price: '1 900 DZD',
    category: 'sweet',
    isSignature: true
  }
];

export const DRINKS_HOT: MenuItem[] = [
  { id: 'drk-h1', name: 'Café solo', description: 'Expresso pur pur arabica sélectionné', price: '450 DZD', category: 'drinks', subCategory: 'Hot Drinks' },
  { id: 'drk-h2', name: 'Café Largo', description: 'Café allongé aux arômes intenses', price: '450 DZD', category: 'drinks', subCategory: 'Hot Drinks' },
  { id: 'drk-h3', name: 'Thé maison', description: 'Thé vert à la menthe fraîche parfumée', price: '450 DZD', category: 'drinks', subCategory: 'Hot Drinks' },
  { id: 'drk-h4', name: 'Infusion maison', description: 'Mélange apaisant verveine, thym et fleurs', price: '350 DZD', category: 'drinks', subCategory: 'Hot Drinks' },
  { id: 'drk-h5', name: 'Capuccino & co', description: 'Mousse de lait veloutée et cacao pur', price: '500 DZD', category: 'drinks', subCategory: 'Hot Drinks' }
];

export const DRINKS_COLD: MenuItem[] = [
  { id: 'drk-c1', name: 'Pina colada OR', description: 'Création rafraîchissante coco & ananas sans alcool', price: '600 DZD', category: 'drinks', subCategory: 'Cold Drinks', isSignature: true },
  { id: 'drk-c2', name: 'Hibiscus menthe', description: 'Infusion glacée de karkadé et menthe poivrée', price: '500 DZD', category: 'drinks', subCategory: 'Cold Drinks' },
  { id: 'drk-c3', name: 'Citron chia thym', description: 'Citronnade artisanale au thym frais et graines de chia', price: '500 DZD', category: 'drinks', subCategory: 'Cold Drinks' },
  { id: 'drk-c4', name: 'Mangue et géranium', description: 'Nectar de mangue parfumée à l\'eau de géranium', price: '600 DZD', category: 'drinks', subCategory: 'Cold Drinks', isSignature: true },
  { id: 'drk-c5', name: 'Mojito shaker', description: 'Citron vert, menthe pilée, eau gazeuse & sucre de canne', price: '600 DZD', category: 'drinks', subCategory: 'Cold Drinks' },
  { id: 'drk-c6', name: 'Eau Plate 1 L', description: 'Eau minérale pure', price: '400 DZD', category: 'drinks', subCategory: 'Cold Drinks' },
  { id: 'drk-c7', name: 'Eau gazeuse 25cl', description: 'Fines bulles rafraîchissantes', price: '300 DZD', category: 'drinks', subCategory: 'Cold Drinks' },
  { id: 'drk-c8', name: 'Hamoud Beida', description: 'Spécialité locale emblématique au citron', price: '300 DZD', category: 'drinks', subCategory: 'Cold Drinks' },
  { id: 'drk-c9', name: 'Selecto', description: 'Boisson mythique algérienne à l\'essence de pomme', price: '300 DZD', category: 'drinks', subCategory: 'Cold Drinks' }
];
