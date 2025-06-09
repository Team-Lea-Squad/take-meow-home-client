import SubTab from "@/components/SubTab";
import CommonButton from "@/components/CommonButton";
import CommonBorderButton from "@/components/CommonBorderButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <SubTab />
      <CommonButton title="테스트버튼" isDisabled />
      <CommonButton title="테스트버튼" isPoint />
      <CommonButton title="테스트버튼" />
      <CommonButton title="테스트버튼" isLoading />
      <CommonBorderButton title="버튼" isBlack />
      <CommonBorderButton title="버튼" isPrimary />
      <CommonBorderButton title="버튼" />
    </div>
  );
}
