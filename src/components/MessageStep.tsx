import { DEFAULT_BRAND_NAME } from "~/constants/base";
import capitalize from "~/utils/capitalize";
import { useFlowEditor } from "~/contexts/FlowEditorContext";

interface MessageStepStackProps {
  step: {
    id: string;
    type: string;
    message: string;
  };
}

export default function MessageStepStack({ step }: MessageStepStackProps) {
  const { setSelectedStepId } = useFlowEditor();

  const handleClick = () => {
    setSelectedStepId(step.id);
  };

  return (
    <div className="flex flex-col items-start">
      <div
        className="step step-message-brand text-xs space-y-2 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          <div className="text-[11px] text-[#1A76FC] font-medium">
            {step.type === "message"
              ? `${DEFAULT_BRAND_NAME} ${capitalize(step.type)}`
              : step.type}
          </div>
          <div className="text-[10px] font-mono text-gray-400">{step.id}</div>
        </div>
        <div className="text-gray-900 truncate max-h-6 overflow-hidden">
          {step.message}
        </div>
      </div>
    </div>
  );
}
