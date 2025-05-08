
import React, { useState } from 'react';
import Header from './Header';
import BottomNav from './BottomNav';
import Dashboard from './Dashboard';
import SpendAnalytics from './SpendAnalytics';
import BudgetTracker from './BudgetTracker';
import SavingsGoals from './SavingsGoals';
import LearningHub from './LearningHub';

const Layout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Render the active component based on the selected tab
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'spend':
        return <SpendAnalytics />;
      case 'budget':
        return <BudgetTracker />;
      case 'goals':
        return <SavingsGoals />;
      case 'learn':
        return <LearningHub />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-area p-4">
        {renderActiveComponent()}
      </div>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Layout;
