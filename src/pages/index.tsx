import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import pizzaOrderFlow from "./pizzaOrderFlow.json";
import MessageStepStack from "~/components/MessageStepStack";
import TerminalMessageStep from "~/components/TerminalMessageStep";
import NullStepSpace from "~/components/NullStepSpace";
import IntentAnalysisStack from "~/components/IntentAnalysisStack";
import TriggerStack from "~/components/TriggerStack";
import FlowEditorRightNav from "~/components/nav/FlowEditorRightNav";
import {
  FlowEditorProvider,
  useFlowEditor,
} from "~/contexts/FlowEditorContext";
import {
  APP_DESKTOP_TOP_NAV_HEIGHT as topNavHeight,
  APP_DESKTOP_RIGHT_NAV_WIDTH as rightNavWidth,
} from "~/constants/base";

const inter = Inter({ subsets: ["latin"] });

function FlowEditor() {
  const { setSelectedStepId } = useFlowEditor();

  const [flowData, setFlowData] = useState(pizzaOrderFlow);

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
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <main className={`${inter.className}`}>
      <div
        className="flex"
        style={{
          height: `calc(100vh - ${topNavHeight}px)`,
        }}
      >
        <div
          className="overflow-scroll pt-12 pb-56 px-20 2xl:px-24 w-full"
          style={{ width: `calc(100vw - ${rightNavWidth}px)` }}
        >
          <div className="text-sm font-medium text-[#1A76FC]">Flows</div>
          <div className="text-[32px] mb-10 font-display">Flow Editor</div>

          <div className="w-fit">
            <div className="flex items-start">
              <TriggerStack />
            </div>
            <div className="flex items-start">
              <MessageStepStack step={initialStep} />
            </div>
            <div className="flex items-start">
              <IntentAnalysisStack step={initialStep} />
            </div>
            <div className="flex items-start">
              <MessageStepStack step={initialStep} />
              <TerminalMessageStep type="cancel" step={terminalCancelStep} />
            </div>
            <div className="flex items-start">
              <IntentAnalysisStack step={initialStep} />
            </div>
            <div className="flex items-start">
              <TerminalMessageStep type="done" step={terminalDoneStep} />
              <MessageStepStack step={initialStep} />
            </div>
            <div className="flex items-start">
              <NullStepSpace />
              <IntentAnalysisStack step={initialStep} />
            </div>
            <div className="flex items-start">
              <NullStepSpace />
              <TerminalMessageStep type="done" step={terminalDoneStep} />
              <TerminalMessageStep type="done" step={terminalDoneStep} />
            </div>
          </div>
        </div>

        <FlowEditorRightNav />
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
