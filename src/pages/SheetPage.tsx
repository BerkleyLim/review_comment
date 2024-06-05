import React, {useEffect, useState} from 'react';
import styles from '../css/sheet.module.css'
import SheetSearchComponent from "../components/sheet/SheetSearchComponent";
import SheetContentsComponent from "../components/sheet/SheetContentsComponent";
import SheetViewItem from "../components/sheet/item/SheetViewItem";
import {Pagination, Stack} from "@mui/material";
import {useNavigate} from "react-router";
import SheetContainer from "../hooks/SheetContainer";

const SheetPage = () => {
  const navigate = useNavigate();
  const { displayConnectSheetList } = SheetContainer();
  const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 10; // 전체 페이지 수 (10으로 설정함)
  const totalPages = 10; // 전체 페이지 수 (10으로 설정함)

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    // 아래서부터 페이지 변경의 따른 추가 작업 가능
    navigate('/sheet/'+page);

  }

  useEffect(() => {
    const fetch = async () => {
      return await displayConnectSheetList().then(
        (res) => {
          return res;
        }
      ).catch((e) => {
        return null;
      })
    }
    fetch();
  }, [])

  return (
    <div className={`${styles?.sheetMusicPage}`}>
      <h1 className={`flex flex-row text-3xl w-full pb-2`}>악보 페이지</h1>

      {/* 검색 */}
      <SheetSearchComponent/>

      {/*  리스트 */}
      <SheetContentsComponent/>

      {/* 페이징네이션 */}
      <Stack spacing={2}>
        {/*<Pagination count={10} color="primary" />*/}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary" />
      </Stack>

      {/*  모달 */}
      <SheetViewItem/>
    </div>
  );
}

export default SheetPage;
