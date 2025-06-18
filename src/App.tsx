import React from 'react';
import { RecipeHeader } from './components/RecipeHeader';
import { IngredientsList } from './components/IngredientsList';
import { RecipeSteps } from './components/RecipeSteps';
import { mockRecipe } from './data/mockRecipe';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <RecipeHeader recipe={mockRecipe} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients - Takes up 1 column */}
          <div className="lg:col-span-1">
            <IngredientsList ingredients={mockRecipe.ingredients} />
          </div>
          
          {/* Recipe Steps - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <RecipeSteps steps={mockRecipe.steps} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Cook?</h3>
            <p className="text-gray-600 mb-4">
              This authentic tonkotsu ramen recipe will take time but delivers restaurant-quality results. 
              Take your time with each step and enjoy the process!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>🍜 Authentic Japanese Recipe</span>
              <span>👨‍🍳 Chef-Tested Instructions</span>
              <span>⭐ Restaurant Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;