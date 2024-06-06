import React from 'react';
import SheetListItem from "./item/list/SheetListItem";
import {useRecoilValue} from "recoil";
import {sheetListState} from "../../recoil/sheetState";
import SheetType from "../../type/SheetType";

const SheetContentsComponent = () => {
  const sheetList: SheetType[] | [] = useRecoilValue(sheetListState);
  return (
    <div className="flex flex-row mx-auto mt-5">
      <div className="flex flex-wrap justify-center" style={{minHeight: '70vh'}}>
        {
          sheetList?.map((data: SheetType | null, index: number) =>
            <SheetListItem key={index} data={data}/>
          )
        }
      </div>
    </div>
  );
}

export default SheetContentsComponent;
