
import React from 'react';
import { KiliIcon } from '../constants';

const Logo: React.FC<{ light?: boolean; useImage?: boolean }> = ({ light, useImage }) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative w-10 h-10 flex items-center justify-center">
        {useImage ? (
          <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200 overflow-hidden">
            <span className="text-[10px] text-ocean font-bold">LOGO</span>
          </div>
        ) : (
          <KiliIcon className={`w-full h-full ${light ? 'text-white' : 'text-[#1E3A8A]'}`} />
        )}
      </div>
      <div className={`flex flex-col leading-tight ${light ? 'text-white' : 'text-[#1E3A8A] dark:text-white'}`}>
        <span className="font-extrabold text-xl tracking-tight font-['Manrope']">
          Kili<span className="text-glacier">Grid</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">Technology</span>
      </div>
    </div>
  );
};

export default Logo;
