import { DEFAULT_BRAND_NAME, FLOW_EDITOR_COLUMN_WIDTH } from "~/constants/base";
import capitalize from "~/utils/capitalize";
import { useFlowEditor } from "~/contexts/FlowEditorContext";
import StandardMessageOutline from "./MessageOutline";

interface MessageStepProps {
  step: {
    id: string;
    type: string;
    message: string;
  };
  isTerminal?: boolean;
}

export default function MessageStep({
  step,
  isTerminal = false,
}: MessageStepProps) {
  const { setSelectedStepId } = useFlowEditor();

  const handleClick = () => {
    setSelectedStepId(step.id);
  };

  return (
    <div className="flex flex-col items-start flow-col-margin">
      <div
        className="relative step-message-brand text-xs cursor-pointer"
        style={{ width: FLOW_EDITOR_COLUMN_WIDTH, height: 59 }}
        onClick={handleClick}
      >
        <StandardMessageOutline
          borderColor={isTerminal ? undefined : "#d5d6d7"}
          background={isTerminal ? "#111827" : undefined}
        />

        <div className="py-2.5 px-3 absolute inset-0 space-y-2">
          <div className="flex items-center justify-between">
            <div
              className={`text-[11px] ${
                isTerminal ? "text-blue-300" : "text-[#1A76FC]"
              } font-medium`}
            >
              {step.type === "message"
                ? `${DEFAULT_BRAND_NAME} ${capitalize(step.type)}`
                : step.type}
            </div>
            <div className="text-[10px] font-mono text-gray-400">{step.id}</div>
          </div>
          <div
            className={`truncate max-h-6 overflow-hidden ${
              isTerminal ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {step.message}
          </div>
        </div>
      </div>
    </div>
  );
}
