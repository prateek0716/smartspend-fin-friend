
import React from 'react';
import { sampleTransactions, categoryColors, formatCurrency } from '@/utils/sampleData';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const SpendAnalytics: React.FC = () => {
  // Filter only expense transactions
  const expenses = sampleTransactions.filter(transaction => transaction.type === 'expense');
  
  // Calculate spending by category
  const spendingByCategory = expenses.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += amount;
    return acc;
  }, {} as Record<string, number>);

  // Convert to array for chart data
  const chartData = Object.entries(spendingByCategory).map(([category, amount]) => ({
    name: category,
    value: amount,
  }));

  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, transaction) => sum + transaction.amount, 0);

  // Sort transactions by date descending
  const sortedTransactions = [...expenses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Spending Overview */}
      <div className="finance-card">
        <h3 className="text-lg font-medium mb-4">Monthly Spending</h3>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={categoryColors[entry.name] || '#9b87f5'} 
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-2 mt-4">
          {chartData.map((entry, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: categoryColors[entry.name] || '#9b87f5' }} 
                />
                <span className="text-sm">{entry.name}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium">{formatCurrency(entry.value)}</span>
                <span className="text-xs text-muted-foreground">
                  {Math.round((entry.value / totalExpenses) * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div className="finance-card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Recent Transactions</h3>
          <button className="text-xs text-finance-primary font-medium">
            View All
          </button>
        </div>
        
        <div className="space-y-3">
          {sortedTransactions.slice(0, 5).map((transaction) => (
            <div key={transaction.id} className="flex justify-between items-center border-b border-border pb-3 last:border-0">
              <div>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: categoryColors[transaction.category] || '#9b87f5' }} 
                  />
                  <p className="font-medium">{transaction.description}</p>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </span>
                  <span 
                    className="text-xs px-2 rounded-full" 
                    style={{ 
                      backgroundColor: categoryColors[transaction.category] + '20',
                      color: categoryColors[transaction.category]
                    }}
                  >
                    {transaction.category}
                  </span>
                </div>
              </div>
              <span className="text-sm font-medium text-finance-red">
                - {formatCurrency(transaction.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpendAnalytics;
