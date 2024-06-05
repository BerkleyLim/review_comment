import axios from "axios";

const SheetService = () => {
  const ConnectSheetList = async () => {
    return await axios.get(`http://localhost:3001/music`)
      .then((res) => {
        console.log(res)
        return res;
      })
      .catch((e) => {
        console.error(e)
        return null;
      })
  }
  return { ConnectSheetList }
}

export default SheetService;
