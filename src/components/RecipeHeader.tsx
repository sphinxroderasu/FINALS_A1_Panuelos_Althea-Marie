import React from 'react';
import { Clock, Users, ChefHat, MapPin } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeHeaderProps {
  recipe: Recipe;
}

export const RecipeHeader: React.FC<RecipeHeaderProps> = ({ recipe }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-emerald-100 text-emerald-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2 flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">{recipe.title}</h1>
        <p className="mb-4 text-lg opacity-90">{recipe.description}</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-amber-50 p-3">
            <Clock className="h-5 w-5 text-amber-600" />
            <div>
              <p className="text-sm font-medium text-amber-900">Total Time</p>
              <p className="text-xs text-amber-700">{recipe.prepTime} + {recipe.cookTime}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3">
            <Users className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-sm font-medium text-emerald-900">Serves</p>
              <p className="text-xs text-emerald-700">{recipe.servings} people</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3">
            <ChefHat className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-blue-900">Difficulty</p>
              <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                {recipe.difficulty}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3">
            <MapPin className="h-5 w-5 text-purple-600" />
            <div>
              <p className="text-sm font-medium text-purple-900">Cuisine</p>
              <p className="text-xs text-purple-700">{recipe.cuisine}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};