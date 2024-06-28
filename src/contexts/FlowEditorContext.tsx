// src/contexts/FlowEditorContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface FlowEditorContextType {
  selectedStepId: string | null;
  setSelectedStepId: (id: string | null) => void;
}

const FlowEditorContext = createContext<FlowEditorContextType | undefined>(
  undefined
);

interface FlowEditorProviderProps {
  children: ReactNode;
}

export const FlowEditorProvider = ({ children }: FlowEditorProviderProps) => {
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);

  return (
    <FlowEditorContext.Provider
      value={{
        selectedStepId,
        setSelectedStepId,
      }}
    >
      {children}
    </FlowEditorContext.Provider>
  );
};

export const useFlowEditor = () => {
  const context = useContext(FlowEditorContext);
  if (context === undefined) {
    throw new Error("useFlowEditor must be used within a FlowEditorProvider");
  }
  return context;
};
