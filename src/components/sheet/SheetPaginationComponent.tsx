import React, {useEffect, useState} from 'react';
import {Pagination, Stack} from "@mui/material";
import {useNavigate, useParams} from "react-router";
import {useRecoilValue} from "recoil";
import {sheetListState} from "../../recoil/sheetState";
import SheetContainer from "../../hooks/SheetContainer";

const SheetPaginationComponent = () => {
  const navigate = useNavigate();
  const { pathname } = useParams();
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
      const page = (Number(pathname) - 1) * 10;
      const limit = 10;
      await displayConnectSheetList(page, limit);
    }
    fetch();
  }, []);
  return (
    <Stack spacing={2}>
      {/*<Pagination count={10} color="primary" />*/}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary" />
    </Stack>
  );
}

export default SheetPaginationComponent;
