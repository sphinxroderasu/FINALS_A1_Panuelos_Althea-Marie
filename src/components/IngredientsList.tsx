import React, { useState } from 'react';
import { CheckCircle, Circle, ShoppingCart } from 'lucide-react';
import { Ingredient } from '../types/Recipe';

interface IngredientsListProps {
  ingredients: Ingredient[];
}

export const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id);
    } else {
      newCheckedItems.add(id);
    }
    setCheckedItems(newCheckedItems);
  };

  const groupedIngredients = ingredients.reduce((groups, ingredient) => {
    const category = ingredient.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(ingredient);
    return groups;
  }, {} as Record<string, Ingredient[]>);

  const categoryNames = {
    broth: 'Broth Base',
    toppings: 'Toppings & Garnish',
    noodles: 'Noodles',
    aromatics: 'Aromatics & Seasoning'
  };

  const categoryColors = {
    broth: 'border-l-amber-500 bg-amber-50',
    toppings: 'border-l-emerald-500 bg-emerald-50',
    noodles: 'border-l-blue-500 bg-blue-50',
    aromatics: 'border-l-purple-500 bg-purple-50'
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl">
      <div className="mb-6 flex items-center gap-3">
        <ShoppingCart className="h-6 w-6 text-amber-600" />
        <h2 className="text-2xl font-bold text-gray-900">Ingredients</h2>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
          {checkedItems.size}/{ingredients.length} checked
        </span>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedIngredients).map(([category, categoryIngredients]) => (
          <div key={category} className={`rounded-xl border-l-4 p-4 ${categoryColors[category as keyof typeof categoryColors]}`}>
            <h3 className="mb-3 font-semibold text-gray-900">
              {categoryNames[category as keyof typeof categoryNames]}
            </h3>
            <div className="space-y-2">
              {categoryIngredients.map((ingredient) => (
                <div
                  key={ingredient.id}
                  className="flex cursor-pointer items-start gap-3 rounded-lg p-2 transition-colors hover:bg-white/60"
                  onClick={() => toggleItem(ingredient.id)}
                >
                  {checkedItems.has(ingredient.id) ? (
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  ) : (
                    <Circle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  )}
                  <div className="flex-1">
                    <div className={`flex items-baseline gap-2 ${checkedItems.has(ingredient.id) ? 'line-through opacity-60' : ''}`}>
                      <span className="font-medium text-gray-900">{ingredient.amount} {ingredient.unit}</span>
                      <span className="text-gray-700">{ingredient.name}</span>
                    </div>
                    {ingredient.notes && (
                      <p className="mt-1 text-sm text-gray-600 italic">{ingredient.notes}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};