import React, {useState} from 'react';
import SheetListItem from "./item/list/SheetListItem";
import {useNavigate, useParams} from "react-router";
import {useRecoilValue} from "recoil";
import {sheetListState} from "../../recoil/sheetState";
import SheetContainer from "../../hooks/SheetContainer";
import SheetType from "../../type/SheetType";

const SheetContentsComponent = () => {
  const sheetList = useRecoilValue(sheetListState);
  return (
    <div className={`m-auto justify-center mt-5`}>
      <div className={`flex flex-wrap`} style={{minHeight: '70vh'}}>
        {
          sheetList?.map((data: SheetType|null, index: number) =>
            <SheetListItem key={index} data={data}/>
          )
        }
        {/*<SheetListItem data={data}/>*/}
        {/*<SheetListItem/>*/}
        {/*<SheetListItem/>*/}
        {/*<SheetListItem/>*/}
        {/*<SheetListItem/>*/}
        {/*<SheetListItem/>*/}
        {/*<SheetListItem/>*/}
        {/*<SheetListItem/>*/}
        {/*<SheetListItem/>*/}
        {/*<SheetListItem/>*/}
      </div>
    </div>
  );
}

export default SheetContentsComponent;
