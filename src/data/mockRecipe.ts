import { Recipe } from '../types/Recipe';

export const mockRecipe: Recipe = {
  id: 'artisan-ramen-bowl',
  title: 'Artisan Tonkotsu Ramen Bowl',
  description: 'A rich, creamy pork bone broth ramen with perfectly cooked noodles, tender chashu, and traditional toppings. This authentic recipe creates restaurant-quality ramen at home.',
  servings: 4,
  prepTime: '2 hours',
  cookTime: '12 hours',
  difficulty: 'Hard',
  cuisine: 'Japanese',
  image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  tags: ['Japanese', 'Comfort Food', 'Soup', 'Pork', 'Authentic'],
  ingredients: [
    {
      id: 'pork-bones',
      name: 'Pork bones',
      amount: '2',
      unit: 'lbs',
      category: 'broth',
      notes: 'Mix of trotters and neck bones'
    },
    {
      id: 'chicken-carcass',
      name: 'Chicken carcass',
      amount: '1',
      unit: 'whole',
      category: 'broth'
    },
    {
      id: 'pork-belly',
      name: 'Pork belly',
      amount: '1',
      unit: 'lb',
      category: 'toppings',
      notes: 'For chashu'
    },
    {
      id: 'ramen-noodles',
      name: 'Fresh ramen noodles',
      amount: '4',
      unit: 'portions',
      category: 'noodles'
    },
    {
      id: 'soft-boiled-eggs',
      name: 'Eggs',
      amount: '4',
      unit: 'large',
      category: 'toppings',
      notes: 'For ajitsuke tamago'
    },
    {
      id: 'green-onions',
      name: 'Green onions',
      amount: '4',
      unit: 'stalks',
      category: 'toppings'
    },
    {
      id: 'nori',
      name: 'Nori sheets',
      amount: '4',
      unit: 'sheets',
      category: 'toppings'
    },
    {
      id: 'bamboo-shoots',
      name: 'Bamboo shoots',
      amount: '1',
      unit: 'cup',
      category: 'toppings'
    },
    {
      id: 'garlic',
      name: 'Garlic',
      amount: '1',
      unit: 'head',
      category: 'aromatics'
    },
    {
      id: 'ginger',
      name: 'Fresh ginger',
      amount: '2',
      unit: 'inches',
      category: 'aromatics'
    },
    {
      id: 'miso-paste',
      name: 'White miso paste',
      amount: '3',
      unit: 'tbsp',
      category: 'broth'
    },
    {
      id: 'soy-sauce',
      name: 'Soy sauce',
      amount: '1/4',
      unit: 'cup',
      category: 'broth'
    }
  ],
  steps: [
    {
      id: 'prepare-bones',
      stepNumber: 1,
      title: 'Prepare the Bones',
      description: 'Rinse pork bones and chicken carcass under cold water. Place in a large pot and cover with water. Bring to a boil and cook for 10 minutes to remove impurities.',
      duration: '15 minutes',
      tips: ['This step removes blood and impurities for a cleaner broth', 'Use the largest pot you have available']
    },
    {
      id: 'blanch-bones',
      stepNumber: 2,
      title: 'Blanch and Clean',
      description: 'Drain the bones and rinse thoroughly under cold running water. Scrub away any remaining blood or impurities with a brush.',
      duration: '10 minutes',
      tips: ['Clean bones are essential for a clear, rich broth']
    },
    {
      id: 'start-broth',
      stepNumber: 3,
      title: 'Begin the Broth',
      description: 'Place cleaned bones back in the pot and cover with fresh water by 2 inches. Add garlic and ginger. Bring to a rolling boil, then reduce to maintain a strong simmer.',
      duration: '10-12 hours',
      temperature: 'Rolling boil to strong simmer',
      tips: ['Keep the pot uncovered to allow evaporation and concentration', 'Add hot water as needed to maintain level', 'The broth should be cloudy and rich after 8+ hours']
    },
    {
      id: 'prepare-chashu',
      stepNumber: 4,
      title: 'Prepare Chashu Pork',
      description: 'While broth simmers, roll pork belly tightly and tie with kitchen twine. Sear all sides in a hot pan until golden brown.',
      duration: '20 minutes',
      tips: ['Searing adds depth of flavor', 'Keep the roll tight for even cooking']
    },
    {
      id: 'braise-chashu',
      stepNumber: 5,
      title: 'Braise the Chashu',
      description: 'Add seared pork belly to a separate pot with soy sauce, mirin, sake, and sugar. Simmer gently for 2-3 hours until tender.',
      duration: '2-3 hours',
      tips: ['Low and slow cooking creates melt-in-your-mouth texture', 'Save the braising liquid for flavor']
    },
    {
      id: 'prepare-eggs',
      stepNumber: 6,
      title: 'Make Ajitsuke Tamago',
      description: 'Soft-boil eggs for exactly 6.5 minutes. Transfer to ice bath, then peel carefully. Marinate in soy sauce mixture for at least 4 hours.',
      duration: '30 minutes prep, 4+ hours marinating',
      tips: ['Room temperature eggs prevent cracking', 'The marinade penetrates for rich flavor']
    },
    {
      id: 'strain-broth',
      stepNumber: 7,
      title: 'Strain and Season Broth',
      description: 'After 10-12 hours, strain the broth through a fine mesh strainer. Discard solids. Season with miso paste and adjust with soy sauce and salt.',
      duration: '20 minutes',
      tips: ['The broth should coat the back of a spoon', 'Taste and adjust seasoning gradually']
    },
    {
      id: 'prepare-toppings',
      stepNumber: 8,
      title: 'Prepare Final Toppings',
      description: 'Slice chashu pork, halve marinated eggs, julienne bamboo shoots, and finely chop green onions. Cut nori sheets in half.',
      duration: '15 minutes',
      tips: ['Warm the chashu slightly before serving', 'Keep toppings organized for quick assembly']
    },
    {
      id: 'cook-noodles',
      stepNumber: 9,
      title: 'Cook the Noodles',
      description: 'Bring a large pot of water to boil. Cook ramen noodles according to package directions (usually 2-3 minutes). Drain immediately.',
      duration: '3-4 minutes',
      tips: ['Fresh noodles cook very quickly', 'Have everything else ready before cooking noodles']
    },
    {
      id: 'assemble-bowls',
      stepNumber: 10,
      title: 'Assemble the Ramen Bowls',
      description: 'Divide hot noodles among 4 warmed bowls. Ladle hot broth over noodles. Arrange chashu, egg halves, bamboo shoots, and nori attractively. Garnish with green onions.',
      duration: '5 minutes',
      tips: ['Warm the bowls in advance', 'Serve immediately while hot', 'Arrange toppings with care for presentation']
    }
  ]
};