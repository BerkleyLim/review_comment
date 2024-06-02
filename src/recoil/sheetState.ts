
// 로그인 모달창 띄우기
import {atom} from "recoil";

export const isSheetDetailViewState = atom({
  key: 'isSheetDetailView',
  default: false,
});

export const sheetListState = atom({
  key: 'sheetList',
  default: [],
})
