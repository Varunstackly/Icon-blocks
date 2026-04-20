"use client";

import React, { useState } from 'react';
import {
  Search, Mic, Type, Image as ImageIcon, MousePointer2,
  Video, Minus, AppWindow, Columns, Heading,
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
  const [subTab, setSubTab] = useState<'all' | 'next'>('all');
  const { addBlock } = useCanvas();

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
      <div className="flex-1 overflow-y-auto no-scrollbar pb-3 pr-2 -mr-2">
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
                            className="bg-[#FAF8ED] rounded-xl flex flex-col items-center justify-center pt-2 pb-1.5 cursor-pointer shadow-sm border border-[#E8E6DB] hover:ring-2 hover:ring-[#517AA5] hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                          >
                            {block.icon}
                            <span className="text-[10px] font-semibold text-[#517AA5]">{block.name}</span>
                          </div>
                        ))}
                      </div>

                      {idx === 0 && (
                        <div className="mt-4 bg-[#F6F4EB] rounded-[8px] p-[3px] flex items-center">
                          <button 
                            onClick={() => setSubTab('all')}
                            className={`flex-[1.5] text-[11px] font-semibold py-[6px] rounded-[6px] transition-colors cursor-pointer ${subTab === 'all' ? 'bg-white text-[#517AA5] shadow-sm' : 'text-[#8495A5] hover:text-[#517AA5] bg-transparent'}`}
                          >
                            All Bosie
                          </button>
                          <button 
                            onClick={() => setSubTab('next')}
                            className={`flex-1 text-[11px] font-semibold py-[6px] rounded-[6px] transition-colors cursor-pointer ${subTab === 'next' ? 'bg-white text-[#517AA5] shadow-sm' : 'text-[#8495A5] hover:text-[#517AA5] bg-transparent'}`}
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          /* Pages Content */
          <div className="flex flex-col gap-3">
            <div className="bg-[#1A2B4C] border border-[#4E627C] rounded-lg p-3 cursor-pointer hover:bg-[#1f345c] hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <span className="text-sm font-medium text-white">Home Page</span>
            </div>
            <div className="bg-[#1A2B4C] border border-[#4E627C] rounded-lg p-3 cursor-pointer hover:bg-[#1f345c] hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <span className="text-sm font-medium text-[#8495A5]">About Us</span>
            </div>
            <div className="bg-[#1A2B4C] border border-[#4E627C] rounded-lg p-3 cursor-pointer hover:bg-[#1f345c] hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <span className="text-sm font-medium text-[#8495A5]">Contact</span>
            </div>
            <button className="text-sm font-semibold text-[#517AA5] border border-dashed border-[#517AA5] rounded-lg py-2 mt-4 hover:bg-[#517AA5]/10 hover:shadow-sm active:scale-95 transition-all duration-300">
              + Add New Page
            </button>
          </div>
        )}
      </div>

      {/* Help Button */}
      <div className="pb-6 bg-[#1A2B4C]">
        <button 
          onClick={() => alert('Help Center opened!')}
          className="cursor-pointer flex items-center justify-between w-full rounded-xl bg-[#F5F2DF] px-4 py-2 text-[#517AA5] shadow-sm hover:bg-[#EBE7Ce] hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-300"
        >
          <div className="flex items-center gap-2">
            <svg width="18" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 3C6 3 5 5 5 7V17C5 20 7 21 9 21H13C16 21 18 19 18 16C18 14 17 13 15 12C17 11 18 10 18 8C18 5 16 3 13 3H9Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-[15px] font-semibold">Help</span>
          </div>

          <Circle className="h-[18px] w-[18px] opacity-70" strokeWidth={2} />
        </button>
      </div>

    </aside>
  );
};

export default LeftSidebar;
