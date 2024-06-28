// Component to render a singular vertical straight line
export const DownEdge = () => (
  <div className="flow-col-width flow-col-margin flex h-6">
    <div className="flex-grow h-full" />
    <div className="flex-grow h-full border-l-2 edge" />
  </div>
);

export const DownAndRightEdges = () => (
  <div className="down-and-right flow-col-width-including-padding flex h-6">
    <div className="flex-grow h-full" />
    <div className="relative flex-grow h-full">
      <div className="h-3.5 absolute inset-0 border-l-2 border-b-2 edge rounded-bl-[14px]" />
      <div className="h-6 absolute inset-0 border-l-2 edge" />
    </div>
  </div>
);

export const RightAndDownEdge = () => (
  <div className="right-and-down flow-col-width-including-padding flex h-6">
    <div className="flex-grow h-full">
      <div className="h-3" />
      <div className="h-3 border-r-2 border-t-2 edge rounded-tr-[14px]" />
    </div>
    <div className="flex-grow h-full" />
  </div>
);
