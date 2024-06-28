import CustomerReplyOutline from "./CustomerReplyOutline";

export default function CustomerReply() {
  return (
    <div className="relative w-fit flex items-center justify-center pl-0.5">
      <CustomerReplyOutline />

      <div className="text-[11px] font-medium text-blue-400 absolute inset-0 flex items-center justify-center pr-[2px]">
        Customer Reply
      </div>
    </div>
  );
}
