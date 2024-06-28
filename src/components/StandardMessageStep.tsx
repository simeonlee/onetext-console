import { DEFAULT_BRAND_NAME, FLOW_EDITOR_COLUMN_WIDTH } from "~/constants/base";
import capitalize from "~/utils/capitalize";
import { useFlowEditor } from "~/contexts/FlowEditorContext";
import StandardMessageOutline from "./MessageOutline";

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
        className="relative step-message-brand text-xs cursor-pointer"
        style={{ width: FLOW_EDITOR_COLUMN_WIDTH, height: 59 }}
        onClick={handleClick}
      >
        <StandardMessageOutline borderColor="#d5d6d7" />

        <div className="py-2.5 px-3 absolute inset-0 space-y-2">
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
    </div>
  );
}
