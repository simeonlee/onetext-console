import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import NullStepSpace from "~/components/NullStepSpace";
import ReplyStack from "~/components/ReplyStack";
import TriggerStack from "~/components/TriggerStack";
import FlowEditorRightNav from "~/components/nav/FlowEditorRightNav";
import {
  FlowEditorProvider,
  useFlowEditor,
} from "~/contexts/FlowEditorContext";
import {
  APP_DESKTOP_TOP_NAV_HEIGHT as topNavHeight,
  APP_DESKTOP_RIGHT_NAV_WIDTH as rightNavWidth,
  FLOW_EDITOR_COLUMN_GAP,
} from "~/constants/base";
import MessageStep from "~/components/MessageStep";

const inter = Inter({ subsets: ["latin"] });

function FlowEditor() {
  const { selectedStepId, setSelectedStepId, flowData } = useFlowEditor();

  const flowEditorRef = useRef<HTMLDivElement>(null);

  const initialStep =
    flowData?.steps?.find((step) => step.id === flowData.initialStepID) ||
    ({} as any);

  const terminalDoneStep =
    flowData?.steps?.find((step) => step.id === "done") || ({} as any);

  const terminalCancelStep =
    flowData?.steps?.find((step) => step.id === "cancel") || ({} as any);

  // De-select step by clicking anywhere outside of a step
  const handleOutsideClick = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest(".step")) {
      setSelectedStepId(null);
    }
  };

  useEffect(() => {
    flowEditorRef.current?.addEventListener("click", handleOutsideClick);
    return () => {
      flowEditorRef.current?.removeEventListener("click", handleOutsideClick);
    };
  }, [flowEditorRef]);

  return (
    <main className={`${inter.className}`}>
      <div
        className="flex"
        style={{
          height: `calc(100vh - ${topNavHeight}px)`,
        }}
      >
        <div
          ref={flowEditorRef}
          className="overflow-scroll pt-12 pb-56 px-20 2xl:px-24 w-full"
          style={{ width: `calc(100vw - ${rightNavWidth}px)` }}
        >
          <div className="flow-header">
            <div className="text-sm font-medium text-[#1A76FC]">Flows</div>
            <div className="text-[32px] font-display">Flow Editor</div>
          </div>

          <div className="w-fit">
            <div className="flow-row">
              <TriggerStack />
            </div>
            <div className="flow-row">
              <MessageStep step={initialStep} />
            </div>
            <div className="flow-row">
              <ReplyStack step={initialStep} />
            </div>
            <div className="flow-row">
              <MessageStep step={initialStep} />
              <MessageStep step={terminalCancelStep} isTerminal />
            </div>
            <div className="flow-row">
              <ReplyStack step={initialStep} />
            </div>
            <div className="flow-row">
              <MessageStep step={terminalDoneStep} isTerminal />
              <MessageStep step={initialStep} />
            </div>
            <div className="flow-row">
              <NullStepSpace />
              <ReplyStack step={initialStep} />
            </div>
            <div className="flow-row">
              <NullStepSpace />
              <MessageStep step={terminalDoneStep} isTerminal />
              <MessageStep step={terminalDoneStep} isTerminal />
            </div>
          </div>
        </div>

        {selectedStepId && <FlowEditorRightNav />}
      </div>
    </main>
  );
}

const FlowEditorWithProvider = () => (
  <FlowEditorProvider>
    <FlowEditor />
  </FlowEditorProvider>
);

export default FlowEditorWithProvider;
