export interface Review {
  id: string;
  author: string;
  badge?: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  highlightedDishes?: string[];
  ownerResponse?: {
    date: string;
    comment: string;
  };
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Abdessamed Hassen',
    badge: '5 avis · 15 photos',
    avatar: 'AH',
    rating: 5,
    date: 'il y a 2 mois',
    comment: 'Une très belle expérience ! L’accueil est chaleureux, le service est professionnel et les plats sont délicieux. L’ambiance est agréable et tout est fait avec une précision incroyable.',
    highlightedDishes: ['Menu Dégustation', 'Service d\'exception'],
    ownerResponse: {
      date: 'il y a 2 mois',
      comment: 'Merci infiniment Abdessamed pour vos magnifiques mots et votre confiance. Le Chef Rabah et toute l’équipe sont très touchés par votre retour. Au plaisir de vous revoir très bientôt chez OR Atelier Culinaire.'
    }
  },
  {
    id: 'rev-2',
    author: 'bencheikh labo',
    badge: 'Local Guide · 6 avis · 22 photos',
    avatar: 'BL',
    rating: 5,
    date: 'il y a 2 mois',
    comment: 'Excellente découverte, un sans fautes rare sur la place d’Alger ! Une note particulière pour Wafid et le dessert à la fraise. Bravo Chef Rabah !',
    highlightedDishes: ['Dessert à la fraise', 'Service par Wafid'],
    ownerResponse: {
      date: 'il y a 2 mois',
      comment: 'Merci beaucoup pour votre retour. Nous sommes ravis que l’expérience vous ait plu, ainsi que la touche sucrée et le service attentionné de Wafid.'
    }
  },
  {
    id: 'rev-3',
    author: 'Eastern Finest',
    badge: 'Local Guide · 80 avis · 20 photos',
    avatar: 'EF',
    rating: 5,
    date: 'il y a 2 mois',
    comment: 'Très belle expérience! Un niveau culinaire inégalé. J’ai été surpris par mon entrée sucrée-salée à l’aubergine et chocolat et le plat! Le houmous, la poitrine d’agneau fondante et les oignons frits étaient juste exquis! Mention spéciale pour Yanis et le service!',
    highlightedDishes: ['Aubergine Miso', 'Agneau braisé', 'Service par Yanis'],
    ownerResponse: {
      date: 'il y a 2 mois',
      comment: 'Merci infiniment pour ce magnifique retour 🙏 Votre mention spéciale pour Yanis nous fait vraiment plaisir 😊 Au plaisir de vous accueillir de nouveau très bientôt chez OR Atelier Culinaire.'
    }
  }
];
