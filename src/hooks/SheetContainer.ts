import {useSetRecoilState} from "recoil";
import {
  isModalEditModeState,
  isSheetDetailViewState,
  sheetDetailState,
  sheetListState,
  sheetPageTotalState
} from "../recoil/sheetState";
import SheetService from "../services/SheetService";
import SheetType from "../type/SheetType";

const SheetContainer = () => {
  const { ConnectSheetList } = SheetService();

  const setIsSheetDetailView = useSetRecoilState(isSheetDetailViewState);
  const setSheetDetail = useSetRecoilState(sheetDetailState);

  const setSheetList = useSetRecoilState(sheetListState);
  const setSheetPageTotal = useSetRecoilState(sheetPageTotalState);

  const setIsModalEditMode = useSetRecoilState(isModalEditModeState);

  /**
   * 모달 생성
   * @param data 상세보기
   */
  const handlerOpenView = (data:SheetType|null) => {
    setIsSheetDetailView(true);
    if (!!data) {
      setSheetDetail(data);

    } else {
      setIsModalEditMode(true);
    }
  }

  /**
   * 모달 닫기
   */
  const handlerCloseView = () => setIsSheetDetailView(false);

  /**
   * 게시판 리스트
   * @param page 시작페이지
   * @param limit 최대 갯수
   */
  const displayConnectSheetList = async (page:number, limit:number) => {
    return await ConnectSheetList(page, limit).then(
      (res) => {
        console.log(res)
        if(!!res?.data?.data) {
          setSheetList(res?.data?.data)
          setSheetPageTotal(res?.data.last)
        }
      }
    ).catch(
      (e) => {
        console.error(e)
      }
    )
  }

  const createConnectSheet = () => {

  }

  return {handlerOpenView, handlerCloseView, displayConnectSheetList}
}

export default SheetContainer;
