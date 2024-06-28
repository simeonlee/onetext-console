import CustomerReply from "./CustomerReply";
import Stars01 from "./icons/Stars01";
import { FLOW_EDITOR_COLUMN_WIDTH } from "~/constants/base";

interface IntentAnalysisStackProps {
  step: {
    id: string;
    type: string;
    message: string;
  };
}

export default function IntentAnalysisStack({
  step,
}: IntentAnalysisStackProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="h-6 flex" style={{ width: FLOW_EDITOR_COLUMN_WIDTH }}>
        <div className="flex-grow h-full" />
        <div className="flex-grow h-full border-l-2 edge" />
      </div>

      <div
        className="flex justify-center"
        style={{ width: FLOW_EDITOR_COLUMN_WIDTH }}
      >
        <CustomerReply />
      </div>

      <div className="h-6 flex" style={{ width: FLOW_EDITOR_COLUMN_WIDTH }}>
        <div className="flex-grow h-full" />
        <div className="flex-grow h-full border-l-2 edge" />
      </div>

      <div
        className="flex justify-center"
        style={{ width: FLOW_EDITOR_COLUMN_WIDTH }}
      >
        <div className="rounded-full bg-purple-100 high-res-border border-purple-200 hover:border-purple-400 flex items-center justify-center pl-7 pr-8 text-purple-400 hover:text-purple-600 w-fit py-2.5 space-x-1.5 cursor-pointer">
          <Stars01 width="12" height="12" />
          <div className="text-xs">Intent Analysis</div>
        </div>
      </div>

      <div className="flex w-fit">
        <div className="h-6 flex" style={{ width: FLOW_EDITOR_COLUMN_WIDTH }}>
          <div className="flex-grow h-full" />
          <div className="relative flex-grow h-full">
            <div className="h-3.5 absolute inset-0 border-l-2 border-b-2 edge rounded-bl-[14px]" />
            <div className="h-6 absolute inset-0 border-l-2 edge" />
          </div>
        </div>

        <div className="h-6 flex" style={{ width: FLOW_EDITOR_COLUMN_WIDTH }}>
          <div className="flex-grow h-full">
            <div className="h-3" />
            <div className="h-3 border-r-2 border-t-2 edge rounded-tr-[14px]" />
          </div>
          <div className="flex-grow h-full" />
        </div>
      </div>

      <div className="flex w-fit">
        <div
          className="flex justify-center"
          style={{ width: FLOW_EDITOR_COLUMN_WIDTH }}
        >
          <div className="rounded-full high-res-border border-purple-100 bg-white text-[11px] text-purple-400 w-fit px-2.5 py-0.5 flex items-center justify-center leading-[18px]">
            Affirmative
          </div>
        </div>
        <div
          className="flex justify-center"
          style={{ width: FLOW_EDITOR_COLUMN_WIDTH }}
        >
          <div className="rounded-full high-res-border border-purple-100 bg-white text-[11px] text-purple-400 w-fit px-2.5 py-0.5 flex items-center justify-center leading-[18px]">
            Negative
          </div>
        </div>
      </div>

      <div className="flex w-fit">
        <div className="h-6 flex" style={{ width: FLOW_EDITOR_COLUMN_WIDTH }}>
          <div className="flex-grow h-full" />
          <div className="flex-grow h-full border-l-2 edge" />
        </div>
        <div className="h-6 flex" style={{ width: FLOW_EDITOR_COLUMN_WIDTH }}>
          <div className="flex-grow h-full" />
          <div className="flex-grow h-full border-l-2 edge" />
        </div>
      </div>
    </div>
  );
}
