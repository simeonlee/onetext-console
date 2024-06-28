import { DEFAULT_BRAND_NAME } from "~/constants/base";
import capitalize from "~/utils/capitalize";
import CustomerReply from "./CustomerReply";
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
    <div className="flex flex-col items-start" onClick={handleClick}>
      <div className="step step-message-brand text-xs space-y-2 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="text-[11px] text-[#1A76FC] font-medium">
            {step.type === "message"
              ? `${DEFAULT_BRAND_NAME} ${capitalize(step.type)}`
              : step.type}
          </div>
          <div className="text-[10px] font-mono text-gray-400">{step.id}</div>
        </div>
        <div>{step.message}</div>
      </div>

      {/* There may be a dependency that scales better than the way I'm constructing these edges - opted for a simple formulation for small scope and speed to avoid dependency trial & error, but would want to spend more time doing research or scaling out this algorithm */}

      <div className="h-6 w-[272px] flex">
        <div className="flex-grow h-full" />
        <div className="flex-grow h-full border-l-2 border-gray-200" />
      </div>

      <div className="flex justify-center w-[272px]">
        <CustomerReply />
      </div>

      <div className="h-6 w-[272px] flex">
        <div className="flex-grow h-full" />
        <div className="flex-grow h-full border-l-2 border-gray-200" />
      </div>
    </div>
  );
}
