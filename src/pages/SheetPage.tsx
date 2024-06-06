import React from 'react';
import styles from '../css/sheet.module.css'
import SheetSearchComponent from "../components/sheet/SheetSearchComponent";
import SheetContentsComponent from "../components/sheet/SheetContentsComponent";
import SheetModalComponent from "../components/sheet/SheetModalComponent";
import SheetPaginationComponent from "../components/sheet/SheetPaginationComponent";

const SheetPage = () => {
  return (
    <div className={`${styles?.sheetMusicPage}`}>
      <h1 className={`flex flex-row text-3xl w-full pb-2`}>악보 페이지</h1>

      {/* 검색 */}
      <SheetSearchComponent/>

      {/*  리스트 */}
      <SheetContentsComponent/>

      {/* 페이징네이션 */}
      <SheetPaginationComponent/>

      {/*  모달 */}
      <SheetModalComponent/>
    </div>
  );
}

export default SheetPage;
