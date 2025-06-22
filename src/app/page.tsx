// import SubTab from "@/components/SubTab";
// import CommonButton from "@/components/CommonButton";
// import CommonBorderButton from "@/components/CommonBorderButton";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";
import AddButler from "@/components/AddButler";
import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <MainTitle mainTitle={mainTitles.homeTitle} userName="냥냥냥" />
      <AddButler />
      <Quiz />
      {/* <SubTab />
      <CommonButton title="테스트버튼" isDisabled />
      <CommonButton title="테스트버튼" isPoint />
      <CommonButton title="테스트버튼" />
      <CommonButton title="테스트버튼" isLoading />
      <CommonBorderButton title="버튼" isBlack />
      <CommonBorderButton title="버튼" isPrimary />
      <CommonBorderButton title="버튼" /> */}
    </div>
  );
}
