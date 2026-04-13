"use client";

import React from 'react';
import { ChevronDown, Minus, Menu, Equal } from 'lucide-react';
import { useCanvas } from '@/context/CanvasContext';

const RightSidebar = () => {
  const [activeTab, setActiveTab] = React.useState('Divider');
  const [isDividerOpen, setIsDividerOpen] = React.useState(true);
  const { blocks, selectedBlockId, updateBlock, deviceMode } = useCanvas();
  const selectedBlock = blocks.find(b => b.id === selectedBlockId);

  // If nothing is selected, or it's not a Divider, we can still show the UI but maybe faded out
  // or simply only show settings if a block is selected. For now, let's show settings conditionally.
  const isDivider = selectedBlock && selectedBlock.type === 'Divider';

  const handleStyleChange = (style: 'solid' | 'dashed' | 'dotted') => {
    if (selectedBlockId) updateBlock(selectedBlockId, { style });
  };

  const handleThicknessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedBlockId) updateBlock(selectedBlockId, { thickness: parseInt(e.target.value) });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedBlockId) updateBlock(selectedBlockId, { color: e.target.value });
  };

  return (
    <aside className="w-full lg:w-[230px] bg-[#FAF9F5] h-full shrink-0 border-l border-[#DCDAD4] flex flex-col z-20 pt-10 px-6">

      {/* Tabs */}
      <div className="flex items-center pb-2 mb-8 mt-2">
        <button
          onClick={() => setActiveTab('Divider')}
          className={`font-bold text-[18px] pb-1.5 px-0 cursor-pointer ${activeTab === 'Divider' ? 'text-[#1C2C4A]' : 'text-[#7B8497] font-medium'}`}
        >
          Divider
        </button>
        <span className="text-[#A2AAB8] text-[22px] mx-5 font-light pb-1">|</span>
        <button
          onClick={() => setActiveTab('Style')}
          className={`font-bold text-[18px] pb-1.5 px-0 cursor-pointer ${activeTab === 'Style' ? 'text-[#1C2C4A]' : 'text-[#7B8497] font-medium'}`}
        >
          Style
        </button>
      </div>

      <div className={`flex-1 ${!isDivider ? 'opacity-50 pointer-events-none' : ''}`}>

        {activeTab === 'Divider' ? (
          <>
            {/* Divider Setting */}
            <div
              className="flex items-center justify-between mb-8 cursor-pointer group"
              onClick={() => setIsDividerOpen(!isDividerOpen)}
            >
              <span className="text-[14px] font-semibold text-[#55637A]">Divider Setting</span>
              <ChevronDown
                className={`w-[18px] h-[18px] text-[#55637A] transition-transform ${isDividerOpen ? 'rotate-180' : ''}`}
                strokeWidth={2}
              />
            </div>

            {isDividerOpen && (
              <>
                {/* Style selection */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[14px] font-semibold text-[#55637A]">Style</span>
                    <div className="flex items-center gap-2">
                      <button className="w-6 h-6 bg-[#1C2C4A] text-white rounded-[4px] flex items-center justify-center">
                        <Equal className="w-[14px] h-[14px]" strokeWidth={4} />
                      </button>
                      <button className="w-6 h-6 text-[#1C2C4A] rounded flex items-center justify-center hover:bg-gray-100">
                        <Menu className="w-[18px] h-[18px]" strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  {/* Segmented Control */}
                  <div className="flex border border-[#A6B2C8] rounded-[2px] shadow-sm overflow-hidden h-9">
                    {/* Box 1: Left */}
                    <button
                      onClick={() => handleStyleChange('dashed')}
                      className={`flex-1 border-r border-[#A6B2C8] flex items-center px-2 relative transition-colors cursor-pointer ${selectedBlock?.props.style === 'dashed' ? 'bg-[#F9F7E8]' : 'bg-transparent'}`}
                    >
                      <div className="w-full flex items-center">
                        <div className="w-1/2 h-[1px] bg-[#A6B2C8]"></div>
                        <div className="w-1/2 h-[3px] bg-[#1C2C4A]"></div>
                      </div>
                    </button>

                    {/* Box 2: Center */}
                    <button
                      onClick={() => handleStyleChange('solid')}
                      className={`flex-1 border-r border-[#A6B2C8] flex items-center px-1.5 relative transition-colors cursor-pointer ${selectedBlock?.props.style === 'solid' ? 'bg-[#F9F7E8]' : 'bg-transparent'}`}
                    >
                      <div className="w-full flex items-center">
                        <div className="w-1/4 h-[1px] bg-[#A6B2C8]"></div>
                        <div className="w-2/4 h-[3px] bg-[#1C2C4A]"></div>
                        <div className="w-1/4 h-[1px] bg-[#A6B2C8]"></div>
                      </div>
                    </button>

                    {/* Box 3: Right */}
                    <button
                      onClick={() => handleStyleChange('dotted')}
                      className={`flex-1 flex items-center px-2 relative transition-colors cursor-pointer ${selectedBlock?.props.style === 'dotted' ? 'bg-[#F9F7E8]' : 'bg-transparent'}`}
                    >
                      <div className="w-full flex items-center">
                        <div className="w-1/2 h-[3px] bg-[#1C2C4A]"></div>
                        <div className="w-1/2 h-[1px] bg-[#A6B2C8]"></div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Thickness */}
                <div className="mb-10">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[14px] font-semibold text-[#55637A]">Thickness</span>
                    <div className="bg-white border border-[#A6B2C8] rounded-[4px] px-2.5 py-1 shadow-sm">
                      <span className="text-[12px] font-bold text-[#55637A]">{selectedBlock?.props.thickness || 1} px</span>
                    </div>
                  </div>
                  {/* Slider Control */}
                  <div className="w-full flex items-center relative mt-2 mb-1">
                    <div className="w-full h-[5px] bg-[#E8E6DB] rounded-full absolute left-0 right-0 z-0"></div>
                    <div 
                      className="h-[5px] bg-[#1C2C4A] rounded-full absolute left-0 z-1" 
                      style={{ width: `${((selectedBlock?.props.thickness || 1) / 10) * 100}%` }}
                    ></div>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={selectedBlock?.props.thickness || 1}
                      onChange={handleThicknessChange}
                      className="w-full h-[5px] bg-transparent appearance-none cursor-pointer z-10 m-0 
                        [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:w-[14px] 
                        [&::-webkit-slider-thumb]:h-[14px] 
                        [&::-webkit-slider-thumb]:bg-[#F8A811] 
                        [&::-webkit-slider-thumb]:rounded-sm 
                        [&::-webkit-slider-thumb]:border-[1.5px] 
                        [&::-webkit-slider-thumb]:border-[#A6B2C8]
                        [&::-webkit-slider-thumb]:shadow-sm
                        [&::-moz-range-thumb]:w-[14px] 
                        [&::-moz-range-thumb]:h-[14px] 
                        [&::-moz-range-thumb]:bg-[#F8A811] 
                        [&::-moz-range-thumb]:rounded-sm
                        [&::-moz-range-thumb]:border-[1.5px] 
                        [&::-moz-range-thumb]:border-[#A6B2C8]
                        [&::-moz-range-thumb]:shadow-sm" 
                    />
                  </div>
                </div>

                {/* Color */}
                <div className="flex items-center justify-between mb-8 cursor-pointer relative">
                  <span className="text-[14px] font-semibold text-[#55637A]">Color</span>
                  <div className="w-10 h-7 border border-[#A6B2C8] bg-white rounded-[4px] flex items-center justify-center shadow-sm relative overflow-hidden">
                    <div
                      className="w-[10px] h-[10px] rounded-full"
                      style={{ backgroundColor: selectedBlock?.props.color || '#F8A811' }}
                    ></div>
                    <input
                      type="color"
                      value={selectedBlock?.props.color || '#F8A811'}
                      onChange={handleColorChange}
                      className="absolute inset-0 w-[150%] h-[150%] opacity-0 cursor-pointer -top-1 -left-1"
                    />
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col gap-4">
            <span className="text-[14px] font-semibold text-[#55637A]">Global Block Styles</span>
            <div className="bg-white border border-[#DCDAD4] rounded-[8px] p-4">
              <span className="text-[13px] text-[#7B8497]">No global style properties available for this block.</span>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
};

export default RightSidebar;
