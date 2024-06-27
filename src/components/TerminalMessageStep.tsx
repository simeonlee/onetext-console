// TerminalMessageStep would be a typified step available in the subleft nav

import { DEFAULT_BRAND_NAME } from "~/constants/base";
import capitalize from "~/utils/capitalize";

interface TerminalMessageStepProps {
  type: "done" | "cancel";
  step: {
    id: string;
    type: string;
    message: string;
  };
}

export default function TerminalMessageStep({
  type,
  step,
}: TerminalMessageStepProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="step step-message-terminal text-xs space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-[11px] text-blue-300 font-medium">
            {step.type === "message"
              ? `${DEFAULT_BRAND_NAME} ${capitalize(step.type)}`
              : step.type}
          </div>
          <div className="text-[11px] font-mono text-gray-200">{step.id}</div>
        </div>
        <div className="text-white">{step.message}</div>
      </div>
    </div>
  );
}
