import React from 'react';

// Define the props type for the Stat component
type StatProps = {
    unit: string;
    value: number;
    label?: string;
    size?: 'small' | 'large';
};

// Define the Stat component
const Stat: React.FC<StatProps> = ({ unit, value, label, size = 'small' }) => {
    const isLarge = size === 'large';

    return (
        <div
          className={`flex flex-col items-center ${
            isLarge ? 'text-4xl font-bold' : 'text-sm'
          }`}
        >
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">{value}</span>
            <span className="ml-1 font-medium">{unit}</span>
          </div>
          {label && <div className="mt-1 font-medium">{label}</div>}
        </div>
      );
    };

export default Stat;