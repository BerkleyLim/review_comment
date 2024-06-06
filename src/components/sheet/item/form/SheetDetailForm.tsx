import React from 'react';
import styles from "../../../../css/sheet.module.css";
import Typography from "@mui/material/Typography";
import {useRecoilValue} from "recoil";
import SheetType from "../../../../type/SheetType";
import {sheetDetailState} from "../../../../recoil/sheetState";
import {Rating} from "@mui/material";

const SheetDetailForm = () => {
  const sheetDetail = useRecoilValue<SheetType | null>(sheetDetailState);
  return (
    <Typography id="transition-modal-description" component="div" sx={{mt: 2}}>
      <div className={`${styles?.sheetDetail}`}>
        <div className={`${styles?.commonContentDetailContainer}`}>
          <img src={sheetDetail?.img} alt="" className={`${styles?.album}`} width={'200px'}/>
          <div className={`${styles?.detailContainer}`}>
            <div className="">장르 : {sheetDetail?.genre}</div>
            <div className="">발매날짜 : {sheetDetail?.releaseDate}년</div>
            <div className="">앨범명 : {sheetDetail?.albumName}</div>
            <div className="">전체 평점 : <Rating defaultValue={2.5} precision={0.1} /> ({2.5}점)</div>
          </div>
        </div>
        <div className={`${styles?.detailContentsComponent}`}>
          {sheetDetail?.contents}
        </div>
      </div>
    </Typography>
  );
}

export default SheetDetailForm;
