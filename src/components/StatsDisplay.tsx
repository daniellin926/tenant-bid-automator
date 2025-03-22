
import { Clock, Building, Users, Wrench, Sparkles } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

const StatItem = ({ icon, value, label, className }: StatItemProps) => (
  <div className={`flex flex-col items-center p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 ${className}`}>
    <div className="mb-2 text-primary/80">{icon}</div>
    <div className="text-xl font-bold">{value}</div>
    <div className="text-xs text-gray-500 text-center">{label}</div>
  </div>
);

const StatsDisplay = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
      <StatItem 
        icon={<Clock size={24} />}
        value="72%"
        label="Time saved on maintenance process"
      />
      <StatItem 
        icon={<Users size={24} />}
        value="800+"
        label="Active properties"
      />
      <StatItem 
        icon={<Wrench size={24} />}
        value="13,500+"
        label="Completed maintenance requests"
      />
      <StatItem 
        icon={<Sparkles size={24} />}
        value="98%"
        label="Customer satisfaction rate" 
      />
    </div>
  );
};

export default StatsDisplay;
