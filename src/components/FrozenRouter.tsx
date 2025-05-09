"use client";

import { useContext, useRef, ReactNode } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface FrozenRouterProps {
  children: ReactNode;
}

export default function FrozenRouter({ children }: FrozenRouterProps) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;
  
  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}