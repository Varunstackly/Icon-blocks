"use client";

import React from 'react';
import { CanvasProvider } from '@/context/CanvasContext';
import WorkspaceLayout from '@/components/WorkspaceLayout';

export default function Home() {
  return (
    <div className="absolute inset-0 flex flex-col font-sans overflow-hidden bg-[#142542]">
      <CanvasProvider>
        <WorkspaceLayout />
      </CanvasProvider>
    </div>
  );
}
