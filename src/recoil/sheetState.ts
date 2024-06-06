// 로그인 모달창 띄우기
import {atom} from "recoil";
import SheetType from "../type/SheetType";

export const isSheetDetailViewState = atom({
  key: 'isSheetDetailView',
  default: false,
});

export const sheetListState = atom({
  key: 'sheetList',
  default: [] as SheetType[] | [],
})

export const sheetDetailState = atom({
  key: 'sheetDetail',
  default: {} as SheetType | null
})
