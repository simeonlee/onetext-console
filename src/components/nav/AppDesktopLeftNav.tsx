import NavLink from "./AppDesktopLeftNavLink";
import Circle from "~/components/icons/Circle"; // Just using as placeholder icon to save time
import {
  APP_DESKTOP_TOP_NAV_HEIGHT as topNavHeight,
  APP_DESKTOP_LEFT_NAV_WIDTH as leftNavWidth,
} from "~/constants/base";

export default function AppDesktopLeftNav() {
  return (
    <div
      className="hidden md:block relative overflow-y-scroll scrollbar-none ot-border-r ot-black"
      style={{
        height: `calc(100vh - ${topNavHeight}px)`,
        width: `${leftNavWidth}px`,
      }}
    >
      <div className="px-6 transition-all pt-3 pb-4">
        <h4 className="text-[11px] text-gray-400 py-2 mb-0.5">Flows</h4>
        <div className="space-y-1">
          <NavLink
            href="/campaigns/launch"
            name="Launch Campaign"
            icon={Circle}
          />
          <NavLink href="/campaigns" name="Campaigns" icon={Circle} />
          <NavLink
            href="/flows/links/create"
            name="Create Flow Link"
            icon={Circle}
          />
          <NavLink href="/flows/links" name="View Flow Links" icon={Circle} />
          <NavLink
            href="/flows/core/settings"
            name="Core Flow Settings"
            icon={Circle}
          />
          <NavLink
            href="/messages/custom"
            name="Custom Messages"
            icon={Circle}
          />
          <NavLink href="/flows/edit" name="Flow Editor" icon={Circle} />
        </div>
      </div>
    </div>
  );
}
