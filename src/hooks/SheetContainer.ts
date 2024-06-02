import {useSetRecoilState} from "recoil";
import {isSheetDetailViewState} from "../recoil/sheetState";

const SheetContainer = () => {
  const setIsSheetDetailView = useSetRecoilState(isSheetDetailViewState);
  const handlerOpenView = () => setIsSheetDetailView(true);
  const handlerCloseView = () => setIsSheetDetailView(false);

  return {handlerOpenView, handlerCloseView}
}

export default SheetContainer;
