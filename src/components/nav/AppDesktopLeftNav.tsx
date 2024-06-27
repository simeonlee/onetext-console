import NavLink from "./AppDesktopLeftNavLink";
import Circle from "~/components/icons/Circle"; // Just using as placeholder icon to save time

export default function AppDesktopLeftNav() {
  return (
    <div className="hidden md:block relative overflow-y-scroll scrollbar-none h-screen w-48 ot-border-r ot-black">
      <div className="inline-block">
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
    </div>
  );
}
