import React, { FC } from "react";
import MobileContents from "./mobile/MobileContents";
import PcContents from "./pc/PcContents";
import { useMediaQueryContext } from "./common/Provider/MediaQueryProvider";

const MainComponent: FC = () => {
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();

  return (
    <>
      {isMobileSite && <MobileContents />}
      {/* {isTabletSite && <TabletContents />} */}
      {isTabletSite && <PcContents />}
      {isPcSite && <PcContents />}
    </>
  );
};

export default MainComponent;
