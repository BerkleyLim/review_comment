import {useSetRecoilState} from "recoil";
import {isSheetDetailViewState, sheetDetailState, sheetListState, sheetPageTotalState} from "../recoil/sheetState";
import SheetService from "../services/SheetService";
import SheetType from "../type/SheetType";

const SheetContainer = () => {
  const { ConnectSheetList } = SheetService();

  const setIsSheetDetailView = useSetRecoilState(isSheetDetailViewState);
  const setSheetDetail = useSetRecoilState(sheetDetailState);
  const handlerOpenView = (data:SheetType|null) => {
    setIsSheetDetailView(true);
    setSheetDetail(data);
  }
  const handlerCloseView = () => setIsSheetDetailView(false);

  const setSheetList = useSetRecoilState(sheetListState);
  const setSheetPageTotal = useSetRecoilState(sheetPageTotalState);

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

  return {handlerOpenView, handlerCloseView, displayConnectSheetList}
}

export default SheetContainer;
