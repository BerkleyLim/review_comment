import React from 'react';
import {Button} from "@mui/material";

const SheetSearchComponent = () => {
  return (
    <div className={`flex flex-row justify-end w-full`}>
      <input type={`text`} placeholder={`검색어 입력`} className={`border border-blue-500 w-1/6 p-2`}/>
      <Button variant={`outlined`}>검색</Button>
    </div>
  );
}

export default SheetSearchComponent;
