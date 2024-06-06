import {useSetRecoilState} from "recoil";
import {isSheetDetailViewState, sheetDetailState, sheetListState} from "../recoil/sheetState";
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

  const displayConnectSheetList = async (page:number, limit:number) => {
    const sheet = await ConnectSheetList(page, limit).then(
      (res) => {
        if (!!res?.data?.data) {
          return res.data.data;
        } else if (!!res?.data) {
          return res.data;
        } else {
          return null;
        }
      }
    ).catch(
      (e) => {
        console.error(e)
        return null;
      }
    )
    setSheetList(sheet);
  }

  return {handlerOpenView, handlerCloseView, displayConnectSheetList}
}

export default SheetContainer;
