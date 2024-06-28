import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";
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
} from "~/constants/base";
import MessageStep from "~/components/MessageStep";

const inter = Inter({ subsets: ["latin"] });

function FlowEditor() {
  const { selectedStepId, setSelectedStepId, flowData } = useFlowEditor();

  const flowEditorRef = useRef<HTMLDivElement>(null);

  const initialStep =
    flowData?.steps?.find((step) => step.id === flowData.initialStepID) ||
    ({} as any);

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
          style={{
            width: `calc(100% - ${
              selectedStepId ? rightNavWidth + "px" : "0px"
            })`,
          }}
        >
          <div className="flow-header">
            <div className="text-sm font-medium text-[#1A76FC]">Flows</div>
            <div className="text-[32px] font-display">Flow Editor</div>
          </div>

          <div className="w-fit">
            <div className="flow-row">
              <TriggerStack />
            </div>

            {/* render initial step */}
            <div className="flow-row">
              <MessageStep step={initialStep} />
            </div>
            <div className="flow-row">
              <ReplyStack step={initialStep} />
            </div>

            {/* render next steps */}

            <div>
              <div className="flow-row">
                {initialStep.events.map((event: any) => {
                  const nextStep = flowData?.steps?.find(
                    (step) => step.id === event.nextStepID
                  );
                  if (!nextStep) return;
                  const isTerminal = !nextStep?.events;
                  return (
                    <MessageStep
                      key={`${event.nextStepID}-${Math.random()
                        .toString(36)
                        .substr(2, 9)}`}
                      step={nextStep}
                      isTerminal={isTerminal}
                    />
                  );
                })}
              </div>

              <div className="flow-row">
                {initialStep.events.map((event: any) => {
                  const nextStep = flowData?.steps?.find(
                    (step) => step.id === event.nextStepID
                  );
                  const isTerminal = !nextStep?.events;
                  return (
                    !isTerminal && (
                      <ReplyStack
                        key={`${event.nextStepID}-${Math.random()
                          .toString(36)
                          .substr(2, 9)}`}
                        step={nextStep}
                      />
                    )
                  );
                })}
              </div>
            </div>

            {/* render next next steps */}

            <div>
              <div className="flow-row">
                {initialStep.events.flatMap((event: any) => {
                  const nextStep = flowData?.steps?.find(
                    (step) => step.id === event.nextStepID
                  );

                  if (!nextStep?.events) return [];

                  return nextStep.events.map((event: any) => {
                    const nextNextStep = flowData?.steps?.find(
                      (step) => step.id === event.nextStepID
                    );
                    if (!nextNextStep) return;
                    const isTerminal = !nextNextStep?.events;

                    return (
                      <MessageStep
                        key={`${event.nextStepID}-${Math.random()
                          .toString(36)
                          .substr(2, 9)}`}
                        step={nextNextStep}
                        isTerminal={isTerminal}
                      />
                    );
                  });
                })}
              </div>

              <div className="flow-row">
                {initialStep.events.flatMap((event: any) => {
                  const nextStep = flowData?.steps?.find(
                    (step) => step.id === event.nextStepID
                  );

                  const isTerminal = !nextStep?.events;

                  if (isTerminal)
                    return (
                      <NullStepSpace
                        key={`${event.nextStepID}-${Math.random()
                          .toString(36)
                          .substr(2, 9)}`}
                      />
                    );

                  return (
                    !isTerminal &&
                    nextStep.events.map((event: any) => {
                      const nextNextStep = flowData?.steps?.find(
                        (step) => step.id === event.nextStepID
                      );

                      const isTerminal = !nextNextStep?.events;

                      if (isTerminal)
                        return (
                          <NullStepSpace
                            key={`${event.nextStepID}-${Math.random()
                              .toString(36)
                              .substr(2, 9)}`}
                          />
                        );

                      return (
                        !isTerminal && (
                          <ReplyStack
                            key={`${event.nextStepID}-${Math.random()
                              .toString(36)
                              .substr(2, 9)}`}
                            step={nextNextStep}
                          />
                        )
                      );
                    })
                  );
                })}
              </div>
            </div>

            {/* render next next next steps */}

            <div className="flow-row">
              {initialStep.events.flatMap((event: any) => {
                const nextStep = flowData?.steps?.find(
                  (step) => step.id === event.nextStepID
                );

                const isTerminal = !nextStep?.events;

                if (isTerminal)
                  return (
                    <NullStepSpace
                      key={`${event.nextStepID}-${Math.random()
                        .toString(36)
                        .substr(2, 9)}`}
                    />
                  );

                return (
                  !isTerminal &&
                  nextStep.events.flatMap((event: any) => {
                    const nextNextStep = flowData?.steps?.find(
                      (step) => step.id === event.nextStepID
                    );

                    const isTerminal = !nextNextStep?.events;

                    if (isTerminal)
                      return (
                        <NullStepSpace
                          key={`${event.nextStepID}-${Math.random()
                            .toString(36)
                            .substr(2, 9)}`}
                        />
                      );

                    // TODO: I appear to be rendering an extra NullStepSpace here - would squash in recursive refactor

                    return (
                      !isTerminal &&
                      nextNextStep.events.map((event: any) => {
                        const nextNextNextStep = flowData?.steps?.find(
                          (step) => step.id === event.nextStepID
                        );
                        if (!nextNextNextStep) return;
                        const isTerminal = !nextNextNextStep?.events;

                        return (
                          <MessageStep
                            key={`${event.nextStepID}-${Math.random()
                              .toString(36)
                              .substr(2, 9)}`}
                            step={nextNextNextStep}
                            isTerminal={isTerminal}
                          />
                        );
                      })
                    );
                  })
                );
              })}
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
