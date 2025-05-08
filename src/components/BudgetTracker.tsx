
import React from 'react';
import { sampleBudgets, categoryColors, formatCurrency } from '@/utils/sampleData';
import { AlertCircle } from 'lucide-react';

const BudgetTracker: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Monthly Budget Summary */}
      <div className="finance-card">
        <h3 className="text-lg font-medium mb-4">Monthly Budget Summary</h3>
        
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Budget</span>
            <span className="font-medium">
              {formatCurrency(sampleBudgets.reduce((sum, budget) => sum + budget.allocated, 0))}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Spent So Far</span>
            <span className="font-medium">
              {formatCurrency(sampleBudgets.reduce((sum, budget) => sum + budget.spent, 0))}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Remaining</span>
            <span className="font-medium">
              {formatCurrency(
                sampleBudgets.reduce((sum, budget) => sum + budget.allocated, 0) - 
                sampleBudgets.reduce((sum, budget) => sum + budget.spent, 0)
              )}
            </span>
          </div>
        </div>
        
        {/* Overall progress bar */}
        <div className="mt-4">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-finance-primary rounded-full"
              style={{ 
                width: `${Math.min(
                  (sampleBudgets.reduce((sum, budget) => sum + budget.spent, 0) / 
                  sampleBudgets.reduce((sum, budget) => sum + budget.allocated, 0)) * 100, 
                  100
                )}%` 
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
      
      {/* Category Budgets */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Category Budgets</h3>
        
        {sampleBudgets.map((budget) => {
          const percentSpent = (budget.spent / budget.allocated) * 100;
          const isOverBudget = percentSpent > 85;
          
          return (
            <div 
              key={budget.id} 
              className={`finance-card ${isOverBudget ? 'border-finance-red/30' : ''}`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: categoryColors[budget.category] || '#9b87f5' }} 
                  />
                  <span className="font-medium">{budget.category}</span>
                </div>
                {isOverBudget && (
                  <div className="flex items-center text-xs text-finance-red gap-1">
                    <AlertCircle size={14} />
                    <span>Alert</span>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between text-sm mt-2">
                <span className="text-muted-foreground">
                  {formatCurrency(budget.spent)} of {formatCurrency(budget.allocated)}
                </span>
                <span 
                  className={`font-medium ${
                    isOverBudget ? 'text-finance-red' : 'text-finance-green'
                  }`}
                >
                  {Math.round(percentSpent)}%
                </span>
              </div>
              
              <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    isOverBudget ? 'bg-finance-red' : 'bg-finance-green'
                  }`}
                  style={{ width: `${Math.min(percentSpent, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Add New Budget */}
      <div className="flex justify-center mt-6">
        <button className="bg-finance-primary text-white px-6 py-2 rounded-full font-medium">
          + Add New Budget
        </button>
      </div>
    </div>
  );
};

export default BudgetTracker;
