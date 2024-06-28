import React, {
  ChangeEvent,
  ForwardRefRenderFunction,
  useEffect,
  useRef,
} from "react";
import classNames from "classnames";
import Label from "~/components/Label";

interface TextAreaProps {
  id?: string;
  size?: "sm" | "lg";
  label?: string;
  labelSize?: "sm" | "md";
  description?: string;
  value: string;
  onChange: (value: any) => void;
  className?: string;
  containerClassName?: string;
  hasError?: boolean;
  optional?: boolean;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  editable?: boolean;
  hoverToEdit?: boolean;
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  {
    id,
    size = "sm",
    label,
    labelSize = "md",
    description,
    value,
    onChange,
    className,
    containerClassName,
    hasError = false,
    optional = false,
    placeholder = "",
    disabled = false,
    required = false,
    editable = true,
    hoverToEdit = false,
    ...props
  },
  ref
) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const defaultClasses = classNames(
    "w-full rounded-lg outline-none resize-none",
    "disabled:opacity-[0.35] disabled:pointer-events-none",
    {
      "border-red-200 focus:ring-red-200": hasError,
      "px-3 py-2 text-sm": size === "sm",
      "px-3 py-4 text-md": size === "lg",
      "pointer-events-none": editable === false,
      "text-input-subtle-shadow ot-border focus:border-blue-200": !hoverToEdit,
      "!py-1.5 !p-2 !-my-1.5 !-m-2 rounded-lg transition-all": hoverToEdit,
      "!text-[13px] !leading-[24px]": hoverToEdit,
      "ot-ring focus:text-gray-300 hover:text-gray-300":
        editable && hoverToEdit,
    }
  );
  const mergedClasses = classNames(defaultClasses, className);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "inherit";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  return (
    <div className={containerClassName}>
      {label || optional ? (
        <div
          className={`flex items-center justify-between space-x-[5px] ${
            description ? "mb-2.5" : "mb-3"
          }`}
        >
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
      {description && (
        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
      )}
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          onChange(event.target.value)
        }
        className={mergedClasses}
        autoComplete="off"
        ref={textAreaRef}
        disabled={disabled}
        required={required}
        style={{
          width: hoverToEdit ? "calc(100% + 16px)" : "100%",
          minHeight: "3em", // Minimum height of 3 lines
        }}
        {...props}
      />
    </div>
  );
};

export default React.forwardRef(TextArea);
