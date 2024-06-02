import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import SheetContainer from "../../../hooks/SheetContainer";

const SheetListItem = () => {
  const {handlerOpenView} = SheetContainer();
  return (
    <Card
      sx={{width: '20%', maxWidth: 200, height: '30vh', maxHeight: 300}}
      className={`relative my-5 mx-5`}
    >
      <CardMedia
        sx={{maxWidth: '100%', height: '10vh', maxHeight: 140}}
        image="/static/images/sheet/1684322911420.jpg"
        title="Glinka"
        className={`cursor-pointer`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          The Lark
        </Typography>
        <Typography variant="body2" color="text.secondary" className={`text-overflow`}>
          글린카(Glinka)가 만든 곡을 발라키레프(Balakiev)가 피아노를 편곡하여 만든 작품 중 하나, 종달새처럼 우루루 지나는 역할을 수행
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={`flex w-full justify-center`} onClick={() => handlerOpenView()}>상세보기</Button>
      </CardActions>
    </Card>
  );
}

export default SheetListItem;
