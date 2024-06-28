import {
  APP_DESKTOP_TOP_NAV_HEIGHT as topNavHeight,
  APP_DESKTOP_RIGHT_NAV_WIDTH as rightNavWidth,
} from "~/constants/base";

export default function FlowEditorRightNav() {
  return (
    <div
      className="hidden md:block relative overflow-y-scroll scrollbar-none ot-border-l ot-black"
      style={{
        height: `calc(100vh - ${topNavHeight}px)`,
        width: `${rightNavWidth}px`,
      }}
    >
      <div className="inline-block">
        <div className="px-6 transition-all pt-3 pb-4">
          <h4 className="text-[11px] text-gray-400 py-2 mb-0.5">Flows</h4>
          <div className="space-y-1"></div>
        </div>
      </div>
    </div>
  );
}
