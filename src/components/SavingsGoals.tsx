
import React from 'react';
import { sampleSavingsGoals, formatCurrency } from '@/utils/sampleData';
import { Calendar } from 'lucide-react';

const SavingsGoals: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Goals Header */}
      <div className="finance-card bg-gradient-to-br from-finance-primary/80 to-finance-tertiary text-white">
        <h3 className="text-lg font-medium mb-2">Your Savings Goals</h3>
        <p className="text-sm">
          Set goals, track progress, and celebrate achievements
        </p>
      </div>
      
      {/* Goals List */}
      <div className="space-y-4">
        {sampleSavingsGoals.map((goal) => {
          const progressPercent = (goal.currentAmount / goal.targetAmount) * 100;
          const targetDate = new Date(goal.targetDate);
          
          return (
            <div key={goal.id} className="finance-card">
              <div className="flex justify-between">
                <h4 className="font-medium">{goal.name}</h4>
                <span 
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ 
                    backgroundColor: `${goal.color}20`,
                    color: goal.color 
                  }}
                >
                  {Math.round(progressPercent)}% Complete
                </span>
              </div>
              
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">
                  {formatCurrency(goal.currentAmount)} / {formatCurrency(goal.targetAmount)}
                </span>
              </div>
              
              <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full"
                  style={{ 
                    width: `${progressPercent}%`,
                    backgroundColor: goal.color
                  }}
                />
              </div>
              
              <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                <Calendar size={12} />
                <span>Target: {targetDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Auto-Save Section */}
      <div className="finance-card bg-finance-light border border-finance-primary/30">
        <h4 className="font-medium">Set up Auto-Save</h4>
        <p className="text-sm text-muted-foreground mt-1">
          Automatically move money to your goals when salary is credited
        </p>
        
        <div className="flex items-center mt-4">
          <div className="flex-1">
            <div className="text-sm font-medium">Salary Date Rule</div>
            <div className="text-xs text-muted-foreground">
              Move 15% when salary is credited
            </div>
          </div>
          <div>
            <button className="bg-finance-primary text-white rounded-full px-4 py-1 text-sm font-medium">
              Set Up
            </button>
          </div>
        </div>
      </div>
      
      {/* Add New Goal */}
      <div className="flex justify-center mt-6">
        <button className="bg-finance-primary text-white px-6 py-2 rounded-full font-medium">
          + Create New Goal
        </button>
      </div>
    </div>
  );
};

export default SavingsGoals;
