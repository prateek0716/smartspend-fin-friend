
// Sample data types
export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
};

export type Budget = {
  id: string;
  category: string;
  allocated: number;
  spent: number;
};

export type SavingsGoal = {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  color: string;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  duration: string;
  xp: number;
  completed: boolean;
  locked: boolean;
  icon: string;
};

// Sample data
export const sampleTransactions: Transaction[] = [
  { 
    id: '1', 
    date: '2025-05-06', 
    description: 'Salary Credit', 
    amount: 122000, 
    category: 'Income', 
    type: 'income' 
  },
  { 
    id: '2', 
    date: '2025-05-05', 
    description: 'Swiggy Order', 
    amount: 850, 
    category: 'Food', 
    type: 'expense' 
  },
  { 
    id: '3', 
    date: '2025-05-04', 
    description: 'Uber Ride', 
    amount: 450, 
    category: 'Transport', 
    type: 'expense' 
  },
  { 
    id: '4', 
    date: '2025-05-03', 
    description: 'Amazon Shopping', 
    amount: 3500, 
    category: 'Shopping', 
    type: 'expense' 
  },
  { 
    id: '5', 
    date: '2025-05-02', 
    description: 'Netflix', 
    amount: 649, 
    category: 'Entertainment', 
    type: 'expense' 
  },
  { 
    id: '6', 
    date: '2025-05-01', 
    description: 'Electricity Bill', 
    amount: 2800, 
    category: 'Utilities', 
    type: 'expense' 
  },
  { 
    id: '7', 
    date: '2025-04-30', 
    description: 'Medical Checkup', 
    amount: 1500, 
    category: 'Health', 
    type: 'expense' 
  },
  { 
    id: '8', 
    date: '2025-04-29', 
    description: 'Movie Tickets', 
    amount: 800, 
    category: 'Entertainment', 
    type: 'expense' 
  },
];

export const sampleBudgets: Budget[] = [
  { id: '1', category: 'Food', allocated: 15000, spent: 10500 },
  { id: '2', category: 'Transport', allocated: 8000, spent: 6000 },
  { id: '3', category: 'Entertainment', allocated: 5000, spent: 3500 },
  { id: '4', category: 'Shopping', allocated: 10000, spent: 8500 },
  { id: '5', category: 'Utilities', allocated: 7000, spent: 5200 },
  { id: '6', category: 'Health', allocated: 5000, spent: 1500 },
];

export const sampleSavingsGoals: SavingsGoal[] = [
  {
    id: '1',
    name: 'Emergency Fund',
    targetAmount: 300000,
    currentAmount: 120000,
    targetDate: '2025-12-31',
    color: '#9b87f5',
  },
  {
    id: '2',
    name: 'Trip to Goa',
    targetAmount: 50000,
    currentAmount: 25000,
    targetDate: '2025-10-15',
    color: '#FF9800',
  },
  {
    id: '3',
    name: 'New Laptop',
    targetAmount: 120000,
    currentAmount: 40000,
    targetDate: '2026-02-28',
    color: '#2196F3',
  },
];

export const sampleLearningModules: Module[] = [
  {
    id: '1',
    title: 'Financial Foundations',
    description: 'Learn the basics of personal finance and money management',
    duration: '5 min',
    xp: 100,
    completed: true,
    locked: false,
    icon: 'book-open',
  },
  {
    id: '2',
    title: 'Budgeting Basics',
    description: 'Create and maintain a personal budget that works',
    duration: '7 min',
    xp: 150,
    completed: true,
    locked: false,
    icon: 'pie-chart',
  },
  {
    id: '3',
    title: 'Saving Strategies',
    description: 'Practical tips to save more of your income',
    duration: '5 min',
    xp: 100,
    completed: false,
    locked: false,
    icon: 'piggy-bank',
  },
  {
    id: '4',
    title: 'Credit Cards Explained',
    description: 'How to use credit cards responsibly',
    duration: '8 min',
    xp: 200,
    completed: false,
    locked: false,
    icon: 'credit-card',
  },
  {
    id: '5',
    title: 'Intro to Investments',
    description: 'Getting started with basic investment concepts',
    duration: '10 min',
    xp: 250,
    completed: false,
    locked: true,
    icon: 'trending-up',
  },
];

// Category colors mapping
export const categoryColors: Record<string, string> = {
  Income: '#4CAF50',
  Food: '#FF9800',
  Transport: '#2196F3',
  Shopping: '#E91E63',
  Entertainment: '#9C27B0',
  Utilities: '#3F51B5',
  Health: '#009688',
};

// Financial summary data
export const financialSummary = {
  totalBalance: 212500,
  monthlyIncome: 122000,
  monthlyExpenses: 32000,
  savingsRate: 15,
  financialHealthScore: 78,
};

// Functions for formatting currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};
