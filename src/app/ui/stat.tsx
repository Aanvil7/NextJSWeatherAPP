import React from 'react';

type StatProps = {
    unit: string;
    value: number;
    label?: string;
    size?: 'small' | 'large';
};


const Stat: React.FC<StatProps> = ({ unit, value, label, size = 'small' }) => {
    return (
      <div
        className={`flex flex-col items-center ${
          size === 'large' ? 'text-4xl font-bold' : 'text-sm'
        }`}
      >
        <div className="flex items-baseline">
          <span className={`font-bold ${size === 'large' ? 'text-4xl' : 'text-2xl'}`}>
            {value}
          </span>
          <span className="ml-1 font-medium">{unit}</span>
        </div>
        {label && <div className="mt-1 font-medium">{label}</div>}
      </div>
    );
  };
  
  export default Stat;