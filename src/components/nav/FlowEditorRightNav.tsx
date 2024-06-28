import {
  APP_DESKTOP_TOP_NAV_HEIGHT as topNavHeight,
  APP_DESKTOP_RIGHT_NAV_WIDTH as rightNavWidth,
} from "~/constants/base";
import { useFlowEditor } from "~/contexts/FlowEditorContext";
import pizzaOrderFlow from "~/pages/pizzaOrderFlow.json";

export default function FlowEditorRightNav() {
  const { selectedStepId } = useFlowEditor();
  const selectedStep = pizzaOrderFlow.steps.find(
    (step) => step.id === selectedStepId
  );

  return (
    <div
      className="hidden md:block relative overflow-y-scroll scrollbar-none ot-border-l ot-black"
      style={{
        height: `calc(100vh - ${topNavHeight}px)`,
        width: `${rightNavWidth}px`,
      }}
    >
      <div className="px-5 transition-all pt-3 pb-5 overflow-y-scroll scrollbar-none">
        <h4 className="text-[11px] text-gray-400 py-2 mb-0.5">Step Editor</h4>
        {selectedStep ? (
          <div className="space-y-1">
            <h5 className="text-[13px] ot-black">Step ID: {selectedStep.id}</h5>
            <p className="text-[12px] text-gray-500">
              Type: {selectedStep.type}
            </p>
            <p className="text-[12px] text-gray-500">
              Message: {selectedStep.message}
            </p>
            {selectedStep.events && (
              <div className="text-[12px] text-gray-500">
                <p>Subevents:</p>
                <ul className="list-disc list-inside">
                  {selectedStep.events.map((event, index) => (
                    <li key={index}>
                      {event.intent} - Next Step: {event.nextStepID}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <h5 className="text-xs text-gray-400">Select a step to edit...</h5>
        )}
      </div>
    </div>
  );
}
