import React from "react";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";
import AddressSelector from "@/components/AddressSelector";

const Page = () => {
  return (
    <div className="flex flex-col gap-5">
      <MainTitle mainTitle={mainTitles.selectAddress} />
      <AddressSelector />
    </div>
  );
};

export default Page;
