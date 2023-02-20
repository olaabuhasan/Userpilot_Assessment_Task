import React from "react";
import { EmptyPageComponent, Layout, LeftSideMenu } from "components";

export const EmptyPage = () => {
  return (
    <Layout leftChild={<LeftSideMenu />} rightChild={<EmptyPageComponent />} />
  );
};
