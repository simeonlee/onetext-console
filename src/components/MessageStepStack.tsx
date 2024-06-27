import { DEFAULT_BRAND_NAME } from "~/constants/base";
import capitalize from "~/utils/capitalize";
import CustomerReply from "./CustomerReply";
import Stars01 from "./icons/Stars01";

interface MessageStepStackProps {
  step: {
    id: string;
    type: string;
    message: string;
  };
}

export default function MessageStepStack({ step }: MessageStepStackProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="step step-message-brand text-xs space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-[11px] text-[#1A76FC] font-medium">
            {step.type === "message"
              ? `${DEFAULT_BRAND_NAME} ${capitalize(step.type)}`
              : step.type}
          </div>
          <div className="text-[11px] font-mono text-gray-400">{step.id}</div>
        </div>
        <div>{step.message}</div>
      </div>

      {/* There may be a dependency that scales better than this - opted for a simple formulation for small scope and speed to avoid dependency trial & error, but would want to spend more time doing research or scaling out this algorithm */}

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

      <div className="flex justify-center w-[272px]">
        <div className="rounded-full bg-[#B04FFD] flex items-center justify-center pl-7 pr-8 text-white w-fit py-2.5 space-x-1.5">
          <Stars01 width="12" height="12" />
          <div className="text-xs">Intent Analysis</div>
        </div>
      </div>

      <div className="h-6 w-[272px] flex">
        <div className="flex-grow h-full" />
        <div className="flex-grow h-full border-l-2 border-gray-200" />
      </div>

      <div className="w-[272px] flex justify-center">
        <div className="rounded-full high-res-border border-gray-300 bg-white text-[11px] text-gray-400 w-fit px-2.5 py-0.5 flex items-center justify-center leading-[18px]">
          Affirmative
        </div>
      </div>

      <div className="flex w-fit">
        <div className="h-6 w-[272px] flex">
          <div className="flex-grow h-full" />
          <div className="relative flex-grow h-full">
            <div className="h-3 absolute inset-0 border-l-2 border-b-2 border-gray-200 rounded-bl-[14px]" />
            <div className="h-6 absolute inset-0 border-l-2 border-gray-200" />
          </div>
        </div>

        <div className="h-6 w-[272px] flex">
          <div className="flex-grow h-full">
            <div className="h-2.5" />
            <div className="h-3.5 border-r-2 border-t-2 border-gray-200 rounded-tr-[14px]" />
          </div>
          <div className="flex-grow h-full" />
        </div>
      </div>
    </div>
  );
}
