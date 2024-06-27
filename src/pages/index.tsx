import { Inter } from "next/font/google";
import { useState } from "react";
import pizzaOrderFlow from "./pizzaOrderFlow.json";
import MessageStepStack from "~/components/MessageStepStack";
import TerminalMessageStep from "~/components/TerminalMessageStep";
import NullStepSpace from "~/components/NullStepSpace";
import IntentAnalysisStack from "~/components/IntentAnalysisStack";
import TriggerStack from "~/components/TriggerStack";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [flowData, setFlowData] = useState(pizzaOrderFlow);

  const initialStep =
    flowData?.steps?.find((step) => step.id === flowData.initialStepID) ||
    ({} as any);

  const terminalDoneStep =
    flowData?.steps?.find((step) => step.id === "done") || ({} as any);

  const terminalCancelStep =
    flowData?.steps?.find((step) => step.id === "cancel") || ({} as any);

  return (
    <main className={`min-h-screen py-12 px-24 ${inter.className}`}>
      <div className="text-sm font-medium text-[#1A76FC]">Flows</div>
      <div className="text-[32px] mb-10 font-display">Flow Editor</div>

      <div>
        <TriggerStack />
        <MessageStepStack step={initialStep} />
        <IntentAnalysisStack step={initialStep} />
        <div className="flex items-start">
          <MessageStepStack step={initialStep} />
          <TerminalMessageStep type="cancel" step={terminalCancelStep} />
        </div>
        <IntentAnalysisStack step={initialStep} />
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
    </main>
  );
}
