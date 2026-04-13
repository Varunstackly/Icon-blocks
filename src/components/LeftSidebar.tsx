"use client";

import React, { useState } from 'react';
import { 
  Search, Mic, Type, Image as ImageIcon, MousePointer2, 
  Video, Grid, Minus, AppWindow, Columns, Heading, LifeBuoy,
  ChevronDown, Circle
} from 'lucide-react';
import { useCanvas, BlockType } from '@/context/CanvasContext';

const blockCategories = [
  {
    title: 'Basic Blocks',
    blocks: [
      { name: 'Text', icon: <Type className="w-[18px] h-[18px] mb-1.5 text-[#517AA5]" strokeWidth={1.5} /> },
      { name: 'Image', icon: <ImageIcon className="w-[18px] h-[18px] mb-1.5 text-[#517AA5]" strokeWidth={1.5} /> },
      { name: 'Button', icon: <MousePointer2 className="w-[18px] h-[18px] mb-1.5 text-[#517AA5]" strokeWidth={1.5} /> },
    ]
  },
  {
    title: 'Basic Blocks',
    blocks: [
      { name: 'Video', icon: <Video className="w-[18px] h-[18px] mb-1.5 text-[#517AA5]" strokeWidth={1.5} /> },
      { name: 'Cenh', icon: <ImageIcon className="w-[18px] h-[18px] mb-1.5 text-[#517AA5]" strokeWidth={1.5} /> },
      { name: 'Divider', icon: <Minus className="w-[18px] h-[18px] mb-1.5 text-[#517AA5]" strokeWidth={1.5} /> },
    ]
  },
  {
    title: 'Basic Blocks',
    blocks: [
      { name: 'Section', icon: <AppWindow className="w-[18px] h-[18px] mb-1.5 text-[#517AA5]" strokeWidth={1.5} /> },
      { name: 'Columns', icon: <Columns className="w-[18px] h-[18px] mb-1.5 text-[#517AA5]" strokeWidth={1.5} /> },
      { name: 'Header', icon: <Heading className="w-[18px] h-[18px] mb-1.5 text-[#517AA5]" strokeWidth={1.5} /> },
    ]
  }
];

const LeftSidebar = () => {
  const [activeTab, setActiveTab] = useState('Blocks');
  const [openCategories, setOpenCategories] = useState<number[]>([0, 1, 2]);
  const { addBlock, deviceMode } = useCanvas();

  const toggleCategory = (idx: number) => {
    setOpenCategories(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <aside className="w-full lg:w-[185px] bg-[#1A2B4C] text-white flex flex-col h-full shrink-0 relative lg:z-20 lg:rounded-tr-[2.5rem] lg:mt-[-10px] lg:pt-[10px] pl-4 pr-4 shadow-[2px_0_10px_rgba(0,0,0,0.1)]">
      
      {/* Tabs */}
      <div className="flex items-center pt-8 pb-4">
        <button 
          onClick={() => setActiveTab('Blocks')}
          className={`pb-1 text-sm font-semibold cursor-pointer ${activeTab === 'Blocks' ? 'text-white border-b-2 border-white' : 'text-[#8495A5] border-b-2 border-transparent hover:text-white'}`}
        >
          Blocks
        </button>
        <span className="text-[#4E627C] mx-2 mb-1">|</span>
        <button 
          onClick={() => setActiveTab('Pages')}
          className={`pb-1 text-sm font-medium cursor-pointer ${activeTab === 'Pages' ? 'text-white border-b border-[#4E627C]' : 'text-[#8495A5] border-b border-[#4E627C] hover:text-white'}`}
        >
          Pages
        </button>
      </div>

      {/* Search */}
      <div className="py-2 mb-4">
        <div className="bg-[#F6F4EB] rounded-[10px] flex items-center px-3 py-2">
          <Search className="w-4 h-4 text-[#517AA5] mr-2 shrink-0" strokeWidth={2} />
          <input 
            type="text" 
            placeholder="Search Blocks..." 
            className="bg-transparent border-none outline-none w-full text-xs font-medium text-[#517AA5] placeholder:text-[#517AA5]/70"
          />
          <Mic className="w-4 h-4 text-[#517AA5] ml-1 shrink-0" strokeWidth={2} />
        </div>
      </div>

      {/* Sidebar Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pb-6 pr-2 -mr-2">
        {activeTab === 'Blocks' ? (
          /* Blocks Content */
          <>
            {blockCategories.map((cat, idx) => {
              const isOpen = openCategories.includes(idx);
              return (
                <div key={idx} className="mb-6">
                  <div 
                    className="flex items-center justify-between cursor-pointer mb-3.5"
                    onClick={() => toggleCategory(idx)}
                  >
                    <span className="font-semibold text-[15px]">{cat.title}</span>
                    <ChevronDown 
                      className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                      strokeWidth={2} 
                    />
                  </div>
                  
                  {isOpen && (
                    <>
                      <div className="grid grid-cols-3 gap-2">
                        {cat.blocks.map((block, bIdx) => (
                          <div 
                            key={bIdx} 
                            onClick={() => addBlock(block.name as BlockType)}
                            className="bg-[#FAF8ED] rounded-xl flex flex-col items-center justify-center pt-2 pb-1.5 cursor-pointer shadow-sm border border-[#E8E6DB] hover:ring-2 ring-[#517AA5] transition-all"
                          >
                            {block.icon}
                            <span className="text-[10px] font-semibold text-[#517AA5]">{block.name}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          /* Pages Content */
          <div className="flex flex-col gap-3">
            <div className="bg-[#1A2B4C] border border-[#4E627C] rounded-lg p-3 cursor-pointer hover:bg-[#1f345c] transition-colors">
              <span className="text-sm font-medium text-white">Home Page</span>
            </div>
            <div className="bg-[#1A2B4C] border border-[#4E627C] rounded-lg p-3 cursor-pointer hover:bg-[#1f345c] transition-colors">
              <span className="text-sm font-medium text-[#8495A5]">About Us</span>
            </div>
            <div className="bg-[#1A2B4C] border border-[#4E627C] rounded-lg p-3 cursor-pointer hover:bg-[#1f345c] transition-colors">
              <span className="text-sm font-medium text-[#8495A5]">Contact</span>
            </div>
            <button className="text-sm font-semibold text-[#517AA5] border border-dashed border-[#517AA5] rounded-lg py-2 mt-4 hover:bg-[#517AA5]/10 transition-colors">
              + Add New Page
            </button>
          </div>
        )}
      </div>

      {/* Help Button */}
      <div className="pt-3 pb-14 bg-[#1A2B4C]">
        <button className="flex items-center justify-between w-full bg-[#F5F2DF] text-[#517AA5] rounded-xl px-4 py-3 hover:bg-[#ebe8d6] transition-colors shadow-sm">
          <div className="flex items-center gap-2 font-medium">
            <LifeBuoy className="w-[18px] h-[18px] opacity-70" strokeWidth={2} />
            <span className="text-[15px] font-semibold">Help</span>
          </div>
          <Circle className="w-[18px] h-[18px] opacity-70" strokeWidth={2} />
        </button>
      </div>

    </aside>
  );
};

export default LeftSidebar;
