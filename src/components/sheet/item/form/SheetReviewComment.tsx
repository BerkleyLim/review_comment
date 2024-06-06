import React from 'react';
import {Button, Container, Grid, Paper, Rating, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const SheetReviewComment = () => {
  return (
    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
      <Container maxWidth="md">
        <Paper style={{ padding: 20, marginTop: 20 }}>
          <Typography variant="h4" gutterBottom>
            상품 리뷰 작성하기
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="제목"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="내용"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                평점:
              </Typography>
              <Rating />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                제출하기
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Typography>
  );
}

export default SheetReviewComment;
