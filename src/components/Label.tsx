import React, { FC, ReactNode } from "react";
import classNames from "classnames";

interface LabelProps {
  id?: string;
  htmlFor?: string;
  className?: string;
  hasError?: boolean;
  children?: ReactNode;
  size?: "sm" | "md";
  disabled?: boolean;
}

const Label: FC<LabelProps> = ({
  id,
  htmlFor,
  children,
  className,
  size = "md",
  hasError = false,
  disabled = false,
}) => {
  const defaultClasses = classNames("block", {
    "text-xs text-gray-400 font-normal leading-relaxed": size === "sm",
    "text-sm text-gray-900 font-medium": size === "md",
    "mb-1.5": size === "sm" && !className?.includes("mb-"),
    "mb-3": size === "md" && !className?.includes("mb-"),
    "text-red-500": hasError,
    "opacity-[0.35] pointer-events-none": disabled,
  });
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <label htmlFor={htmlFor ?? id} className={mergedClasses}>
      {children}
    </label>
  );
};

export default Label;
