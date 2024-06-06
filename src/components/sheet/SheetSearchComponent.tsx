import React from 'react';
import {Button} from "@mui/material";
import SheetContainer from "../../hooks/SheetContainer";

const SheetSearchComponent = () => {
  const { handlerOpenView } = SheetContainer();
  return (
    <div className={`flex flex-row justify-end w-full`}>
      <Button variant={`outlined`} color={`success`} onClick={() => handlerOpenView(null)}>추가</Button>
      <input type={`text`} placeholder={`검색어 입력`} className={`border border-blue-500 w-1/6 p-2`}/>
      <Button variant={`outlined`}>검색</Button>
    </div>
  );
}

export default SheetSearchComponent;
