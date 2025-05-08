
import React from 'react';
import { ArrowUp, ArrowDown, PiggyBank, TrendingUp } from 'lucide-react';
import { financialSummary, formatCurrency } from '@/utils/sampleData';

const Dashboard: React.FC = () => {
  const { totalBalance, monthlyIncome, monthlyExpenses, savingsRate, financialHealthScore } = financialSummary;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Financial Health Score */}
      <div className="finance-card bg-gradient-to-br from-finance-primary/80 to-finance-tertiary text-white">
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium mb-1">Financial Health Score</p>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">{financialHealthScore}/100</h2>
            <div className="text-xs font-medium px-2 py-1 bg-white/20 rounded-full">
              Good
            </div>
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full mt-3">
            <div 
              className="h-full bg-white rounded-full" 
              style={{ width: `${financialHealthScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="finance-card">
        <p className="text-sm text-muted-foreground">Total Balance</p>
        <h3 className="text-2xl font-bold">{formatCurrency(totalBalance)}</h3>
        
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-finance-green">
              <ArrowUp size={16} />
              <p className="text-sm">Income</p>
            </div>
            <p className="text-sm font-medium">{formatCurrency(monthlyIncome)}</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-finance-red">
              <ArrowDown size={16} />
              <p className="text-sm">Expenses</p>
            </div>
            <p className="text-sm font-medium">{formatCurrency(monthlyExpenses)}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <div className="finance-card flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-finance-light flex items-center justify-center mb-2">
            <PiggyBank className="text-finance-primary" size={20} />
          </div>
          <p className="text-sm font-medium">Monthly Savings Rate</p>
          <p className="text-lg font-bold">{savingsRate}%</p>
        </div>
        
        <div className="finance-card flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-finance-light flex items-center justify-center mb-2">
            <TrendingUp className="text-finance-primary" size={20} />
          </div>
          <p className="text-sm font-medium">Investable Amount</p>
          <p className="text-lg font-bold">{formatCurrency(monthlyIncome * savingsRate / 100)}</p>
        </div>
      </div>

      {/* Daily Challenge */}
      <div className="finance-card border-2 border-dashed border-finance-light">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground">Today's Challenge</p>
            <h3 className="font-medium">Review your top 3 expense categories</h3>
            <p className="text-sm text-muted-foreground mt-2">Earn 50 XP</p>
          </div>
          <button className="bg-finance-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
