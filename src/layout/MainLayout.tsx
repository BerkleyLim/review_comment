import React from 'react';
import LeftMenuList from "../components/layout/item/LeftMenuList";
import RightComponent from "../components/layout/item/RightComponent";

// MainLayout 고정으로 박음
const MainLayout = () => {
  return (
    <div className={`h-full flex`}>
      {/* 메뉴바 */}
      <LeftMenuList/>
      {/* 컨텐츠 */}
      <RightComponent/>
    </div>
  );
}

export default MainLayout;
