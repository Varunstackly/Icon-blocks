"use client";

import React from 'react';
import {
  ChevronDown, Undo, Redo, Eye, Send,
  X, Monitor, Tablet, Smartphone, Search,
  HelpCircle, Type, Image as ImageIcon, MousePointer2, Minus
} from 'lucide-react';
import { useCanvas } from '@/context/CanvasContext';

const MainCanvas = () => {
  const { blocks, selectedBlockId, setSelectedBlockId, removeBlock, deviceMode, setDeviceMode } = useCanvas();

  return (
    <div className="flex-1 bg-[#EBEBE6] h-full flex flex-col relative overflow-hidden">

      {/* Top Toolbar */}
      <div className="h-14 mt-4 mx-6 px-4 bg-[#F9F9F8] rounded-[14px] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 cursor-pointer font-bold text-[#1C2C4A] text-[15px] ml-1">
          <span>My Website</span>
          <ChevronDown className="w-4 h-4 text-[#1C2C4A]" strokeWidth={2.5} />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center border border-[#DCDAD4] rounded-[20px] bg-white shadow-sm h-[34px]">
            <button onClick={() => alert('Undo action')} className="px-3 cursor-pointer text-[#7B8497] hover:text-[#1C2C4A] transition-colors h-full flex items-center justify-center">
              <Undo className="w-4 h-4" strokeWidth={2.5} />
            </button>
            <div className="w-[1px] h-[18px] bg-[#DCDAD4]" />
            <button onClick={() => alert('Redo action')} className="px-3 cursor-pointer text-[#7B8497] hover:text-[#1C2C4A] transition-colors h-full flex items-center justify-center">
              <Redo className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
          <button onClick={() => alert('Saved Draft')} className="cursor-pointer h-[34px] px-4 text-[13px] font-bold text-[#55637A] border border-[#DCDAD4] rounded-[20px] hover:bg-gray-50 transition-colors shadow-sm bg-white">
            Save Draft
          </button>
          <button onClick={() => alert('Previewing...')} className="cursor-pointer h-[34px] px-4 text-[13px] font-bold text-[#55637A] border border-[#DCDAD4] bg-white rounded-[20px] hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-[#7B8497]" strokeWidth={2.5} />
            Preview
          </button>
          <button onClick={() => alert('Published!')} className="cursor-pointer h-[34px] px-5 text-[13px] font-bold text-white bg-[#1C2C4A] rounded-[20px] hover:bg-[#14233c] transition-colors shadow-sm flex items-center gap-2">
            Publish
            <Send className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Main Canvas Scroll Area */}
      <div className="flex-1 overflow-y-auto px-8 pt-16 pb-32 flex flex-col gap-8 items-center bg-[#EBEBE6] no-scrollbar">

        <div
          className="transition-all duration-300 ease-in-out w-full flex flex-col gap-8"
          style={{
            maxWidth: deviceMode === 'mobile' ? '375px' : deviceMode === 'tablet' ? '768px' : '100%'
          }}
        >
          {blocks.length === 0 && (
            <div className="w-full h-40 border-2 border-dashed border-[#DCDAD4] rounded-[16px] flex items-center justify-center text-[#7B8497] font-medium bg-[#F9F9F8]">
              Click a block from the Left Sidebar to add it here.
            </div>
          )}

          {blocks.map(block => {
            const isSelected = selectedBlockId === block.id;

            // If the block is a Divider, we render the EXACT layout from the reference image.
            if (block.type === 'Divider') {
              return (
                <div
                  key={block.id}
                  onClick={() => setSelectedBlockId(block.id)}
                  className={`bg-[#F9F9F8] border rounded-[16px] flex flex-col pt-6 px-6 pb-8 transition-all cursor-pointer relative shadow-[0_4px_12px_rgba(0,0,0,0.03)] ${isSelected ? 'border-[#2B54A6] ring-1 ring-[#2B54A6]' : 'border-[#DCDAD4] hover:border-[#A2AAB8]'
                    }`}
                >
                  {/* Header content inside Canvas */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#DCDAD4]">
                    <span className="text-[14px] font-bold text-[#1C2C4A] pl-2">Icon Blocks</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); removeBlock(block.id); }}
                      className="text-[#1C2C4A] hover:bg-slate-200 p-1 rounded transition-colors mr-1 z-10"
                    >
                      <X className="w-[18px] h-[18px]" strokeWidth={3} />
                    </button>
                  </div>

                  <div className="mt-8 space-y-6">
                    {/* Section 1 */}
                    <div>
                      <span className="text-[12px] font-bold text-[#4E627C] mb-2 block pl-2">Icon Blocks</span>
                      <div className="w-full h-[52px] bg-white rounded-[12px] border border-[#DCDAD4] shadow-sm flex items-center px-4 justify-between">
                        <span className="text-[14px] font-semibold text-[#4E627C] mr-4 whitespace-nowrap">to - fa.sar</span>
                        <div className="flex-1 flex items-center justify-end overflow-hidden">
                          <div className="w-[120px] shrink-0 h-[1px] bg-[#B5BFCB]"></div>
                          <div className="w-8 shrink-0 h-[2.5px] bg-[#4E627C] mx-1"></div>
                          <div className="w-8 shrink-0 h-[2.5px] bg-[#4E627C] mx-1"></div>
                          <div className="w-8 shrink-0 h-[2.5px] bg-[#4E627C] ml-1"></div>
                          <div className="w-12 shrink-0 h-[1px] bg-[#B5BFCB] ml-2"></div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2 (DYNAMIC DIVIDER SECTION) */}
                    <div>
                      <span className="text-[12px] font-bold text-[#4E627C] mb-2 block pl-2">Divider Icons</span>
                      <div className="w-full h-[52px] bg-white rounded-[12px] border border-[#DCDAD4] shadow-sm flex items-center px-6 overflow-hidden">
                        <div className="flex-1 flex items-center">
                          <div className="w-1/3 shrink-0 h-[1.5px] bg-[#B5BFCB]"></div>
                          {/* THIS LINE IS DYNAMICALLY CONTROLLED BY RIGHT SIDEBAR */}
                          <div
                            className="w-2/3 ml-4 flex-1 h-0"
                            style={{
                              borderBottomStyle: block.props.style || 'dashed',
                              borderBottomWidth: `${block.props.thickness || 1.5}px`,
                              borderBottomColor: block.props.color || '#B5BFCB'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3 */}
                    <div>
                      <span className="text-[12px] font-bold text-[#4E627C] mb-2 block pl-2">Divider Settings</span>
                      <div className="w-full h-[52px] bg-[#FAF9F5] rounded-[12px] border border-[#A6B2C8] bg-opacity-40 shadow-sm flex items-center px-4 gap-3">
                        <div className="w-[44px] h-[22px] rounded-[6px] border border-[#A6B2C8] bg-transparent"></div>
                        <div className="w-[120px] h-[22px] rounded-[6px] border border-[#A6B2C8] bg-transparent"></div>
                        <div className="w-[160px] h-[22px] rounded-[6px] border border-[#A6B2C8] bg-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Fallback generic block rendering for non-Divider blocks.
            return (
              <div
                key={block.id}
                onClick={() => setSelectedBlockId(block.id)}
                className={`bg-[#F9F9F8] border rounded-[16px] flex flex-col pt-4 px-6 pb-8 transition-all cursor-pointer relative shadow-sm w-full ${isSelected ? 'border-[#2B54A6] ring-1 ring-[#2B54A6]' : 'border-[#DCDAD4] hover:border-[#A2AAB8]'
                  }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#DCDAD4] mb-6">
                  <span className="text-[14px] font-bold text-[#1C2C4A] pl-2">{block.type} Block</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); removeBlock(block.id); }}
                    className="text-[#1C2C4A] hover:bg-slate-200 p-1 rounded transition-colors mr-1 z-10 relative"
                  >
                    <X className="w-[18px] h-[18px]" strokeWidth={3} />
                  </button>
                </div>

                <div>
                  {block.type === 'Text' && (
                    <div>
                      <span className="text-[12px] font-bold text-[#4E627C] mb-2 block pl-2">Text Content</span>
                      <div className="w-full min-h-[64px] bg-white rounded-[12px] border border-[#DCDAD4] shadow-sm p-4 text-[#4E627C] font-medium text-[15px]">
                        {block.props.content}
                      </div>
                    </div>
                  )}

                  {block.type !== 'Text' && (
                    <div className="w-full h-24 bg-white rounded-[12px] border border-dashed border-[#DCDAD4] flex items-center justify-center text-[#7B8497] gap-2 font-medium">
                      {block.type === 'Button' ? <MousePointer2 className="w-5 h-5" /> :
                        block.type === 'Image' ? <ImageIcon className="w-5 h-5" /> : <Minus className="w-5 h-5" />}
                      <span>{block.type} Placeholder</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Absolute Bottom Elements */}
      <button className="absolute bottom-6 left-6 bg-[#2B54A6] text-white rounded-lg px-4 py-2.5 flex items-center gap-2 shadow-lg hover:bg-[#254992] transition-colors z-30">
        <HelpCircle className="w-[18px] h-[18px]" strokeWidth={2.5} />
        <span className="text-[15px] font-bold">Help</span>
      </button>

      <div className="absolute bottom-6 right-6 bg-[#2B54A6] rounded-[6px] p-[6px] flex items-center gap-1.5 shadow-lg z-30">
        <button
          onClick={() => setDeviceMode('desktop')}
          className={`p-1.5 rounded transition-colors ${deviceMode === 'desktop' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white bg-transparent'}`}
        >
          <Monitor className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          onClick={() => setDeviceMode('tablet')}
          className={`p-1.5 rounded transition-colors ${deviceMode === 'tablet' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white bg-transparent'}`}
        >
          <Tablet className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          onClick={() => setDeviceMode('mobile')}
          className={`p-1.5 rounded transition-colors ${deviceMode === 'mobile' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white bg-transparent'}`}
        >
          <Smartphone className="w-5 h-5" strokeWidth={2} />
        </button>
        <button className="p-1.5 text-white hover:text-white bg-transparent rounded transition-colors ml-1 border-l border-white/20 pl-2">
          <Search className="w-5 h-5" strokeWidth={2.5} />
        </button>
      </div>

    </div>
  );
};

export default MainCanvas;
