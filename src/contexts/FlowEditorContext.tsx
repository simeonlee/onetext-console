// src/contexts/FlowEditorContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import pizzaOrderFlow from "~/constants/pizzaOrderFlow.json";

interface FlowEditorContextType {
  selectedStepId: string | null;
  setSelectedStepId: (id: string | null) => void;
  flowData: typeof pizzaOrderFlow;
  setFlowData: (data: typeof pizzaOrderFlow) => void;
  updateStepId: (id: string, newStepId: string) => void;
  updateStepMessage: (id: string, newMessage: string) => void;
}

const FlowEditorContext = createContext<FlowEditorContextType | undefined>(
  undefined
);

interface FlowEditorProviderProps {
  children: ReactNode;
}

export const FlowEditorProvider = ({ children }: FlowEditorProviderProps) => {
  const [flowData, setFlowData] = useState(pizzaOrderFlow);
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);

  const updateStepId = (stepId: string, newStepId: string) => {
    setFlowData((prevFlowData) => {
      const updatedSteps = prevFlowData.steps.map((step) =>
        step.id === stepId ? { ...step, id: newStepId } : step
      );
      return { ...prevFlowData, steps: updatedSteps };
    });

    // Ensure that updating `stepId` also updates `selectedStepId` if they are the same
    if (selectedStepId === stepId) {
      setSelectedStepId(newStepId);
    }
  };

  const updateStepMessage = (stepId: string, newMessage: string) => {
    setFlowData((prevFlowData) => {
      const updatedSteps = prevFlowData.steps.map((step) =>
        step.id === stepId ? { ...step, message: newMessage } : step
      );
      return { ...prevFlowData, steps: updatedSteps };
    });
  };

  return (
    <FlowEditorContext.Provider
      value={{
        selectedStepId,
        setSelectedStepId,
        flowData,
        setFlowData,
        updateStepId,
        updateStepMessage,
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
