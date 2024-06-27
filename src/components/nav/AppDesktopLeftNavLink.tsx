import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

interface AppDesktopLeftNavLinkProps {
  href: string;
  className?: string;
  name: string;
  icon: React.ComponentType<any>;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const AppDesktopLeftNavLink: React.FC<AppDesktopLeftNavLinkProps> = ({
  href,
  className,
  name,
  icon: IconComponent,
  onClick,
}) => {
  const router = useRouter();

  // Check if current route matches AppDesktopLeftNavLink's href
  let isActive = router.pathname.split("/")[1] === href.split("/")[1];

  const combinedClassNames = classNames(
    "w-[calc(100%+32px)] flex items-center px-3 -mx-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ot-black hover:text-gray-700 text-xs font-medium",
    {
      "bg-gray-300 text-gray-700": isActive,
    },
    className
  );

  return (
    <div>
      <Link href={href}>
        <div className={combinedClassNames}>
          {/* Omit placeholder icon for now... */}
          {/* <IconComponent width="16" height="16" /> */}
          {/* <div className="whitespace-nowrap select-none ml-2.5">{name}</div> */}
          <div className="whitespace-nowrap select-none">{name}</div>
        </div>
      </Link>
    </div>
  );
};

export default AppDesktopLeftNavLink;
