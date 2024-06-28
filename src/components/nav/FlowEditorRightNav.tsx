import {
  APP_DESKTOP_TOP_NAV_HEIGHT as topNavHeight,
  APP_DESKTOP_RIGHT_NAV_WIDTH as rightNavWidth,
} from "~/constants/base";
import { useFlowEditor } from "~/contexts/FlowEditorContext";
import pizzaOrderFlow from "~/pages/pizzaOrderFlow.json";
import { useState } from "react";
import TextInput from "../TextInput";
import Label from "../Label";
import TextArea from "../TextArea";

export default function FlowEditorRightNav() {
  const { selectedStepId } = useFlowEditor();
  const selectedStep = pizzaOrderFlow.steps.find(
    (step) => step.id === selectedStepId
  );

  const [stepId, setStepId] = useState(selectedStep?.id || "");
  const [message, setMessage] = useState(selectedStep?.message || "");

  return (
    <div
      className="hidden md:block relative overflow-y-scroll scrollbar-none ot-border-l ot-black"
      style={{
        height: `calc(100vh - ${topNavHeight}px)`,
        width: `${rightNavWidth}px`,
      }}
    >
      <div className="px-5 transition-all pt-3 pb-5 overflow-y-scroll scrollbar-none">
        <h4 className="text-[11px] text-gray-400 py-2 mb-3">
          {selectedStep?.type === "message" ? "Message Editor" : "Step Editor"}
        </h4>
        {selectedStep ? (
          <div className="space-y-6">
            <div className="text-[13px] ot-black">
              <Label size="sm">Step ID</Label>
              <TextInput
                id="stepId"
                placeholder="Enter Step ID..."
                value={stepId}
                onChange={(e) => setStepId(e.target.value)}
                hoverToEdit
              />
            </div>

            <div className="text-xs text-gray-500">
              <Label size="sm">Message</Label>
              <TextArea
                id="stepMessage"
                placeholder="Enter Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                hoverToEdit
              />
            </div>

            {selectedStep.events && (
              <div className="text-[12px] text-gray-500">
                <h6 className="ot-black font-medium mb-2">User Intentions</h6>
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
