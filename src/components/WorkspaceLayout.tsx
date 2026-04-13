"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import MainCanvas from '@/components/MainCanvas';
import { useCanvas } from '@/context/CanvasContext';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

export default function WorkspaceLayout() {
  const { deviceMode } = useCanvas();
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  
  const isDesktop = deviceMode === 'desktop';

  return (
    <>
      <Navbar />
      
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden h-full w-full relative">
        
        {/* Mobile/Tablet Backdrop */}
        {!isDesktop && (isLeftOpen || isRightOpen) && (
          <div 
            className="absolute inset-0 bg-black/40 z-30 transition-opacity" 
            onClick={() => { setIsLeftOpen(false); setIsRightOpen(false); }}
          />
        )}

        {/* Floating Toggle Buttons (Visible only when not Desktop Mode) */}
        {!isDesktop && (
          <>
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1A2B4C] text-white p-2 rounded-r-lg z-20 shadow-md flex items-center justify-center cursor-pointer border border-l-0 border-[#4E627C]"
              onClick={() => setIsLeftOpen(true)}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FAF9F5] text-[#1C2C4A] p-2 rounded-l-lg z-20 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] border border-r-0 border-[#DCDAD4] flex items-center justify-center cursor-pointer"
              onClick={() => setIsRightOpen(true)}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Left Toolbar Parent */}
        <div className={`
          ${isDesktop 
            ? 'static shrink-0 h-full w-[185px] translate-x-0' 
            : `absolute inset-y-0 left-0 z-40 shrink-0 h-full w-[260px] transition-transform duration-300 ease-in-out ${isLeftOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-[100%]'}`
          }
        `}>
          <div className="h-full relative flex w-full">
            <LeftSidebar />
            {!isDesktop && isLeftOpen && (
              <button 
                className="absolute top-4 right-4 bg-white/10 text-white p-1 rounded-full z-50 hover:bg-white/20 shadow-sm"
                onClick={() => setIsLeftOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
        
        {/* Center Canvas */}
        <div className="flex-1 w-full min-w-0 h-full bg-[#EBEBE6]">
          <MainCanvas />
        </div>
        
        {/* Right Properties Parent */}
        <div className={`
          ${isDesktop 
            ? 'static shrink-0 h-full w-[230px] translate-x-0' 
            : `absolute inset-y-0 right-0 z-40 shrink-0 h-full w-[280px] transition-transform duration-300 ease-in-out ${isRightOpen ? 'translate-x-0 shadow-[-10px_0_20px_rgba(0,0,0,0.1)]' : 'translate-x-[100%]'}`
          }
        `}>
          <div className="h-full relative flex flex-col items-start w-full">
            {!isDesktop && isRightOpen && (
              <button 
                className="absolute top-4 left-4 bg-black/5 text-[#55637A] p-1 rounded-full z-50 hover:bg-black/10 shadow-sm"
                onClick={() => setIsRightOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <RightSidebar />
          </div>
        </div>
        
      </div>
    </>
  );
}
