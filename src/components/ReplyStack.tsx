import CustomerReply from "./CustomerReply";
import { DownAndRightEdges, DownEdge, RightAndDownEdge } from "./Edges";
import Stars01 from "./icons/Stars01";

interface IntentAnalysisStackProps {
  step: {
    id: string;
    type: string;
    message: string;
    events: {
      type: string;
      intent: string;
      nextStepID: string;
    }[];
  };
}

export default function IntentAnalysisStack({
  step,
}: IntentAnalysisStackProps) {
  return (
    <div className="flex flex-col items-start">
      {/* The following renders a singular vertical straight line */}
      <DownEdge />

      {/* Customer Reply */}
      <div className="flow-col-width flow-col-margin flex justify-center">
        <CustomerReply />
      </div>

      {/* The following renders a singular vertical straight line */}
      <DownEdge />

      {/* Intent Analysis */}
      <div className="flow-col-width flow-col-margin flex justify-center">
        <div className="rounded-full bg-purple-100 high-res-border border-purple-200 hover:border-purple-400 flex items-center justify-center pl-7 pr-8 text-purple-400 hover:text-purple-600 w-fit py-2.5 space-x-1.5 cursor-pointer">
          <Stars01 width="12" height="12" />
          <div className="text-xs">Intent Analysis</div>
        </div>
      </div>

      {/* The following renders straight and curved lines connecting intent analysis to the reply intent event chips below */}
      <div className="flex w-fit">
        {step.events.map((_, index) =>
          index === 0 ? <DownAndRightEdges /> : <RightAndDownEdge />
        )}
      </div>

      {/* The following renders reply intent event chips */}
      <div className="flex w-fit">
        {step.events.map((event, index) => (
          <div
            key={index}
            className="flow-col-width flow-col-margin flex justify-center"
          >
            <div className="rounded-full high-res-border border-purple-100 bg-white text-[11px] text-purple-400 w-fit px-2.5 py-0.5 flex items-center justify-center leading-[18px]">
              {event.intent.split(":")[0]}
            </div>
          </div>
        ))}
      </div>

      {/* The following renders straight lines down from each event */}
      <div className="flex w-fit">
        {step.events.map((_, index) => (
          <DownEdge key={index} />
        ))}
      </div>
    </div>
  );
}
