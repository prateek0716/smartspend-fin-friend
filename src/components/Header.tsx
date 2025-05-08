
import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-finance-primary to-finance-secondary bg-clip-text text-transparent">
          SmartSpend
        </h1>
      </div>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-foreground">
        <User size={18} />
      </button>
    </header>
  );
};

export default Header;
