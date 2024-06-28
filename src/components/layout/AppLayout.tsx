import React, { ReactNode } from "react";
import AppDesktopLeftNav from "~/components/nav/AppDesktopLeftNav";
import AppDesktopTopNav from "~/components/nav/AppDesktopTopNav";
import {
  APP_DESKTOP_TOP_NAV_HEIGHT as topNavHeight,
  APP_DESKTOP_LEFT_NAV_WIDTH as leftNavWidth,
} from "~/constants/base";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <AppDesktopTopNav />
      <div
        className="flex"
        style={{
          height: `calc(100vh - ${topNavHeight}px)`,
        }}
      >
        <AppDesktopLeftNav />
        <div style={{ width: `calc(100vw - ${leftNavWidth}px)` }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
