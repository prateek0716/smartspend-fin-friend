
import React from 'react';
import { sampleLearningModules } from '@/utils/sampleData';
import { Star, Lock, ArrowRight, Wallet, Book, TrendingUp, DollarSign, PiggyBank } from 'lucide-react';

const LearningHub: React.FC = () => {
  // Calculate streak (simulated)
  const currentStreak = 3;
  
  // Map for module icons
  const iconMap = {
    Wallet: Wallet,
    Book: Book, 
    TrendingUp: TrendingUp,
    DollarSign: DollarSign,
    PiggyBank: PiggyBank
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Learning Header */}
      <div className="finance-card bg-gradient-to-br from-finance-primary/80 to-finance-tertiary text-white">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-medium mb-1">Learning Hub</h3>
            <p className="text-sm">Build financial knowledge with bite-sized lessons</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  fill={i < currentStreak ? 'white' : 'none'} 
                  className="text-white"
                />
              ))}
            </div>
            <p className="text-xs mt-1">{currentStreak} day streak</p>
          </div>
        </div>
      </div>
      
      {/* XP Progress */}
      <div className="finance-card">
        <div className="flex justify-between">
          <h4 className="font-medium">Your Learning Journey</h4>
          <span className="text-xs px-2 py-0.5 rounded-full bg-finance-light text-finance-primary">
            Level 2
          </span>
        </div>
        
        <div className="mt-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">XP Points</span>
            <span className="font-medium">250 / 500 XP</span>
          </div>
          
          <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-finance-primary rounded-full"
              style={{ width: '50%' }}
            />
          </div>
        </div>
      </div>
      
      {/* Learning Modules */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Modules</h3>
        
        {sampleLearningModules.map((module) => {
          // Use the icon map to get the appropriate icon component
          const ModuleIcon = iconMap[module.icon as keyof typeof iconMap] || Book;
          
          return (
            <div 
              key={module.id} 
              className={`finance-card ${
                module.locked ? 'opacity-70' : ''
              }`}
            >
              <div className="flex gap-3">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    module.completed 
                      ? 'bg-finance-primary text-white' 
                      : 'bg-finance-light text-finance-primary'
                  }`}
                >
                  <ModuleIcon size={20} />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium">{module.title}</h4>
                    {module.locked ? (
                      <Lock size={16} className="text-muted-foreground" />
                    ) : (
                      <span className="text-xs bg-finance-light text-finance-primary px-2 rounded-full flex items-center">
                        {module.xp} XP
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {module.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">
                      {module.duration}
                    </span>
                    
                    {!module.locked && (
                      <button 
                        className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full ${
                          module.completed 
                            ? 'bg-finance-light/50 text-muted-foreground' 
                            : 'bg-finance-primary text-white'
                        }`}
                      >
                        {module.completed ? 'Completed' : 'Start'}
                        {!module.completed && <ArrowRight size={12} />}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningHub;
