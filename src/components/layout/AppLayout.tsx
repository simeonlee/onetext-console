import React, { ReactNode } from "react";
import AppDesktopLeftNav from "~/components/nav/AppDesktopLeftNav";
import AppDesktopTopNav from "~/components/nav/AppDesktopTopNav";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <AppDesktopTopNav />
      <div className="flex h-[calc(100vh-64px)] w-[calc(100vw-192px)]">
        <AppDesktopLeftNav />
        <div className="overflow-y-scroll scrollbar-none">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
