export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  unit: string;
  notes?: string;
  category: 'broth' | 'toppings' | 'noodles' | 'aromatics';
}

export interface RecipeStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  duration?: string;
  temperature?: string;
  tips?: string[];
  image?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  servings: number;
  prepTime: string;
  cookTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  image: string;
  tags: string[];
}