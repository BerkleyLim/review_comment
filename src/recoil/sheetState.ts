// 로그인 모달창 띄우기
import {atom} from "recoil";
import SheetType from "../type/SheetType";

/**
 * 모달 창 여닫이 여부
 */
export const isSheetDetailViewState = atom({
  key: 'isSheetDetailView',
  default: false,
});

/**
 * 전체 리스트 갯수
 */
export const sheetListState = atom({
  key: 'sheetList',
  default: [] as SheetType[] | [],
})

/**
 * 모달에 사용할 상세 리스트
 */
export const sheetDetailState = atom({
  key: 'sheetDetail',
  default: {} as SheetType | null
})

/**
 * 총 페이지네이션 갯수
 */
export const sheetPageTotalState = atom({
  key: 'sheetPageTotal',
  default: 10
})

/**
 * 편집 / 읽기 모드
 */
export const isModalEditModeState = atom({
  key: 'isModalEditMode',
  default: false
})


/**
 * 추가 / 수정 모드
 */
export const isModalCreateState = atom({
  key: 'isModalCreate',
  default: false
})
