import axios from "axios";

const SheetService = () => {
  const ConnectSheetList = async (page:number, limit:number) => {
    return await axios.get(`http://localhost:3001/music`, {
      params: {
        _page: page,
        _limit: limit
      }
    })
      .then((res) => {
        return res
      })
      .catch((e) => {
        console.error(e)
        return null;
      })
  }
  return { ConnectSheetList }
}

export default SheetService;
