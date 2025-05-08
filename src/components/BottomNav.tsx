
import React from 'react';
import { Home, PieChart, Wallet, BookOpen, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  name: string;
  icon: React.ReactNode;
  active: boolean;
};

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems: NavItem[] = [
    { 
      name: 'Home', 
      icon: <Home size={20} />, 
      active: activeTab === 'home' 
    },
    { 
      name: 'Spend', 
      icon: <PieChart size={20} />, 
      active: activeTab === 'spend' 
    },
    { 
      name: 'Budget', 
      icon: <BarChart size={20} />, 
      active: activeTab === 'budget' 
    },
    { 
      name: 'Goals', 
      icon: <Wallet size={20} />, 
      active: activeTab === 'goals' 
    },
    { 
      name: 'Learn', 
      icon: <BookOpen size={20} />, 
      active: activeTab === 'learn' 
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around p-2 z-10">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={cn(
            'flex flex-col items-center justify-center p-2 rounded-md transition-colors',
            item.active 
              ? 'text-finance-primary' 
              : 'text-muted-foreground hover:text-foreground'
          )}
          onClick={() => setActiveTab(item.name.toLowerCase())}
        >
          {item.icon}
          <span className="text-xs mt-1">{item.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
