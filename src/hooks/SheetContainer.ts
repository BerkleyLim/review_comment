import {useSetRecoilState} from "recoil";
import {isSheetDetailViewState} from "../recoil/sheetState";
import SheetService from "../services/SheetService";

const SheetContainer = () => {
  const { ConnectSheetList } = SheetService();
  const setIsSheetDetailView = useSetRecoilState(isSheetDetailViewState);
  const handlerOpenView = () => setIsSheetDetailView(true);
  const handlerCloseView = () => setIsSheetDetailView(false);

  const displayConnectSheetList = async () => {
    return await ConnectSheetList().then(
      (res) => {
        return res;
      }
    ).catch(
      (e) => {
        return null;
      }
    )
  }

  return {handlerOpenView, handlerCloseView, displayConnectSheetList}
}

export default SheetContainer;
