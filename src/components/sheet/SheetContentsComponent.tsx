import React from 'react';
import SheetListItem from "./item/SheetListItem";

const SheetContentsComponent = () => {
  return (
    <div className={`m-auto justify-center mt-5`}>
      <div className={`flex flex-wrap`} style={{minHeight: '70vh'}}>
        <SheetListItem/>
        <SheetListItem/>
        <SheetListItem/>
        <SheetListItem/>
        <SheetListItem/>
        <SheetListItem/>
        <SheetListItem/>
        <SheetListItem/>
        <SheetListItem/>
        <SheetListItem/>
      </div>
    </div>
  );
}

export default SheetContentsComponent;
