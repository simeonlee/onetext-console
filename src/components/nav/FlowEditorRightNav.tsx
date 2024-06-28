import {
  APP_DESKTOP_TOP_NAV_HEIGHT as topNavHeight,
  APP_DESKTOP_RIGHT_NAV_WIDTH as rightNavWidth,
} from "~/constants/base";
import { useFlowEditor } from "~/contexts/FlowEditorContext";
import pizzaOrderFlow from "~/constants/pizzaOrderFlow.json";
import { useState } from "react";
import TextInput from "../TextInput";
import Label from "../Label";
import TextArea from "../TextArea";

export default function FlowEditorRightNav() {
  const { setSelectedStepId, updateStepId, updateStepMessage } =
    useFlowEditor();

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
                placeholder="Step ID"
                value={stepId}
                onChange={(value) => {
                  setStepId(value);
                  updateStepId(selectedStepId || "", value);
                }}
                className="font-mono"
                hoverToEdit
              />
            </div>

            <div className="text-xs text-gray-500">
              <Label size="sm">Message</Label>
              <TextArea
                id="stepMessage"
                placeholder="Enter Message..."
                value={message}
                onChange={(value) => {
                  setMessage(value);
                  updateStepMessage(selectedStepId || "", value);
                }}
                hoverToEdit
              />
            </div>

            {selectedStep.events && (
              <div className="text-[12px] text-gray-500">
                <Label size="sm" className="mb-2.5">
                  Customer Intentions
                </Label>

                <div className="space-y-3">
                  {selectedStep.events.map((event, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded-xl ot-border border-purple-100 hover:border-purple-200 px-2.5 py-2.5 leading-[18px] bg-white hover:bg-purple-100 subtle-shadow -mx-2"
                      onClick={() => setSelectedStepId(event.nextStepID)}
                    >
                      <div className="rounded-full high-res-border border-purple-100 bg-white text-[11px] text-purple-400 w-fit px-2.5 py-0.5 flex items-center justify-center leading-[18px] mb-2.5 -ml-[1px]">
                        {event.intent.split(":")[0]}
                      </div>
                      <Label size="sm" className="mb-1">
                        Next Step
                      </Label>
                      <div className="font-mono text-[11px]">
                        {event.nextStepID}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <h5 className="text-xs text-neutral-300">Select a step to edit...</h5>
        )}
      </div>
    </div>
  );
}
