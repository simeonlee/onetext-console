import React, { ChangeEvent } from "react";
import classNames from "classnames";
import Label from "~/components/Label";

interface TextInputProps {
  id?: string;
  size?: "sm" | "lg";
  label?: string;
  labelSize?: "sm" | "md";
  value: string | number;
  onChange: (value: any) => void;
  className?: string;
  containerClassName?: string;
  hasError?: boolean;
  optional?: boolean;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  name?: string;
  autoComplete?: string;
  required?: boolean;
  editable?: boolean;
  hoverToEdit?: boolean;
  min?: string;
  step?: string;
}

/**
 * ForwardRef allows us to handle the ref prop passed to the component
 * which allows us to have the first input of a page selected on page load
 */

const TextInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = (
  {
    id,
    size = "sm",
    label,
    labelSize = "md",
    value,
    onChange,
    className,
    containerClassName,
    hasError = false,
    optional = false,
    placeholder = "",
    type = "text",
    disabled = false,
    required = false,
    editable = true,
    hoverToEdit = false,
    min,
    step,
    ...props
  },
  ref
) => {
  const defaultClasses = classNames(
    "w-full rounded-lg outline-none",
    "disabled:opacity-[0.35] disabled:pointer-events-none",
    {
      "border-red-200 focus:ring-red-200": hasError,
      "px-3 py-2 text-sm": size === "sm",
      "px-3 py-4 text-md": size === "lg",
      "pointer-events-none": editable === false,
      "subtle-shadow ot-border focus:border-blue-200": !hoverToEdit,
      "!py-1.5 !p-2 !-my-1.5 !-m-2 rounded-lg text-gray-600 transition-all":
        hoverToEdit,
      "!text-[13px] !leading-[24px]": hoverToEdit,
      "ot-ring ot-black focus:text-gray-900 hover:text-gray-900":
        editable && hoverToEdit,
    }
  );
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <div className={containerClassName}>
      {label || optional ? (
        <div className="flex items-center justify-between space-x-[5px] mb-3">
          {label && (
            <Label id={id} className="mb-0" size={labelSize}>
              {label}
            </Label>
          )}
          {optional && (
            <span className="text-xs font-normal text-zinc-300">optional</span>
          )}
        </div>
      ) : null}
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        className={mergedClasses}
        autoComplete="off"
        type={type}
        ref={ref}
        min={min}
        step={step}
        disabled={disabled}
        required={required}
        style={{
          width: hoverToEdit ? "calc(100% + 16px)" : "100%",
          transition: "padding-left 0.15s ease-out",
        }}
        {...props}
      />
    </div>
  );
};

export default React.forwardRef(TextInput);
