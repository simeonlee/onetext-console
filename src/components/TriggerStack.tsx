// Omitting props for demo
interface TriggerStackProps {}

export default function TriggerStack({}: TriggerStackProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="step step-trigger text-xs space-y-2">
        <div className="text-[11px] text-gray-400 font-medium">Trigger</div>
        <div className="text-xs">
          <span className="text-[#ACAEB0]">When someone joins</span>{" "}
          <span className="text-gray-900 font-medium">
            Customers who&apos;ve expressed pizza intent
          </span>
        </div>
      </div>

      <div className="h-6 w-[272px] flex">
        <div className="flex-grow h-full" />
        <div className="flex-grow h-full border-l-2 border-gray-200" />
      </div>
    </div>
  );
}