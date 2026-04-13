"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type BlockType = 'Divider' | 'Text' | 'Image' | 'Button' | 'Video' | 'Grid' | 'Section' | 'Columns' | 'Header';
export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface BlockData {
  id: string;
  type: BlockType;
  props: {
    // Shared props
    title?: string;
    
    // Divider specific props
    style?: 'solid' | 'dashed' | 'dotted';
    thickness?: number; // 1 to 10 px
    color?: string;     // Hex code like '#F7B32B', '#C1C9D4'

    // Placeholder for text
    content?: string;
  };
}

interface CanvasContextType {
  blocks: BlockData[];
  selectedBlockId: string | null;
  addBlock: (type: BlockType) => void;
  updateBlock: (id: string, props: Partial<BlockData['props']>) => void;
  removeBlock: (id: string) => void;
  setSelectedBlockId: (id: string | null) => void;
  deviceMode: DeviceMode;
  setDeviceMode: (mode: DeviceMode) => void;
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

const safeUUID = () => {
  return typeof crypto !== 'undefined' && crypto.randomUUID 
    ? crypto.randomUUID() 
    : Math.random().toString(36).substring(2, 9);
};

export const CanvasProvider = ({ children }: { children: ReactNode }) => {
  const [blocks, setBlocks] = useState<BlockData[]>([
    {
      id: 'default-divider',
      type: 'Divider',
      props: {
        style: 'dashed',
        thickness: 1,
        color: '#F8A811'
      }
    }
  ]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>('default-divider');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');

  const addBlock = (type: BlockType) => {
    const newBlock: BlockData = {
      id: safeUUID(),
      type,
      props: {
        title: type,
        ...(type === 'Divider' ? { style: 'solid', thickness: 1, color: '#F8A811' } : {}),
        ...(type === 'Text' ? { content: 'Enter text here...' } : {})
      }
    };
    
    setBlocks(prev => [...prev, newBlock]);
    setSelectedBlockId(newBlock.id);
  };

  const updateBlock = (id: string, propsToUpdate: Partial<BlockData['props']>) => {
    setBlocks(prev => 
      prev.map(block => 
        block.id === id 
          ? { ...block, props: { ...block.props, ...propsToUpdate } }
          : block
      )
    );
  };

  const removeBlock = (id: string) => {
    setBlocks(prev => prev.filter(block => block.id !== id));
    if (selectedBlockId === id) {
      setSelectedBlockId(null);
    }
  };

  return (
    <CanvasContext.Provider 
      value={{ 
        blocks, 
        selectedBlockId, 
        addBlock, 
        updateBlock, 
        removeBlock, 
        setSelectedBlockId,
        deviceMode,
        setDeviceMode
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
  const context = useContext(CanvasContext);
  if (context === undefined) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }
  return context;
};
