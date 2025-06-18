import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Thermometer, Lightbulb, CheckCircle } from 'lucide-react';
import { RecipeStep } from '../types/Recipe';

interface RecipeStepsProps {
  steps: RecipeStep[];
}

export const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggleStepComplete = (stepIndex: number) => {
    const newCompletedSteps = new Set(completedSteps);
    if (newCompletedSteps.has(stepIndex)) {
      newCompletedSteps.delete(stepIndex);
    } else {
      newCompletedSteps.add(stepIndex);
    }
    setCompletedSteps(newCompletedSteps);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gradient-to-r from-amber-500 to-red-500 p-4">
        <div className="flex items-center justify-between text-white mb-2">
          <h2 className="text-2xl font-bold">Cooking Steps</h2>
          <span className="text-sm font-medium">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Navigation */}
      <div className="p-4 border-b bg-gray-50">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => goToStep(index)}
              className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all ${
                index === currentStep
                  ? 'border-amber-500 bg-amber-500 text-white'
                  : completedSteps.has(index)
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : 'border-gray-300 bg-white text-gray-600 hover:border-amber-300'
              }`}
            >
              {completedSteps.has(index) ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                index + 1
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Current Step Content */}
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {steps[currentStep].title}
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {steps[currentStep].duration && (
                <div className="flex items-center gap-1 text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  {steps[currentStep].duration}
                </div>
              )}
              {steps[currentStep].temperature && (
                <div className="flex items-center gap-1 text-sm text-red-700 bg-red-100 px-3 py-1 rounded-full">
                  <Thermometer className="h-4 w-4" />
                  {steps[currentStep].temperature}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => toggleStepComplete(currentStep)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              completedSteps.has(currentStep)
                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <CheckCircle className="h-4 w-4" />
            {completedSteps.has(currentStep) ? 'Completed' : 'Mark Complete'}
          </button>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {steps[currentStep].description}
          </p>
        </div>

        {steps[currentStep].tips && steps[currentStep].tips!.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              <h4 className="font-semibold text-blue-900">Pro Tips</h4>
            </div>
            <ul className="space-y-1">
              {steps[currentStep].tips!.map((tip, index) => (
                <li key={index} className="text-blue-800 text-sm flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium transition-all hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous Step
          </button>
          
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg font-medium transition-all hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Step
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};