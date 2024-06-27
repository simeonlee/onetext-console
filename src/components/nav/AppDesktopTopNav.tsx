import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import { APP_DESKTOP_TOP_NAV_HEIGHT as topNavHeight } from "~/constants/base";

export const AppDesktopTopNav = () => {
  return (
    <div
      className="hidden md:flex items-center justify-between px-5 md:px-6 ot-border-b ot-black text-xs font-medium"
      style={{ height: `${topNavHeight}px` }}
    >
      <div className="h-full flex items-center justify-start flex-grow space-x-10">
        <div className="mr-3">
          <Logo />
        </div>
        <Link href="/customers/support">Customer Support</Link>
        <Link href="/campaigns/launch">Flows</Link>
        <Link href="/analytics">Analytics</Link>
        <Link href="/linked-accounts">Linked Accounts</Link>
      </div>

      <div className="h-full flex items-center justify-end flex-grow">
        <Link href="/account">Account</Link>
      </div>
    </div>
  );
};

export default AppDesktopTopNav;
