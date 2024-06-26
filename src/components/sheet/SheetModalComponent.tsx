import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useRecoilValue} from "recoil";
import SheetContainer from "../../hooks/SheetContainer";
import SheetType from "../../type/SheetType";
import SheetReviewCommentForm from "./item/form/SheetReviewCommentForm";
import {isModalEditModeState, isSheetDetailViewState, sheetDetailState} from "../../recoil/sheetState";
import SheetDetailForm from "./item/form/SheetDetailForm";
import SheetDetailPreview from "./item/form/SheetDetailPreview";
import SheetReviewCommentList from "./item/form/SheetReviewCommentList";

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const contentStyle = {
  maxHeight: 'calc(95vh - 72px)', // 헤더의 높이를 고려하여 계산합니다.
  overflowY: 'auto',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '10px',
};

const SheetModalComponent = () => {
  const isSheetDetailView = useRecoilValue(isSheetDetailViewState);
  const {handlerCloseView} = SheetContainer();
  const sheetDetail = useRecoilValue<SheetType | null>(sheetDetailState);

  const isModalEditMode = useRecoilValue(isModalEditModeState);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isSheetDetailView}
      onClose={handlerCloseView}
      closeAfterTransition
      slots={{backdrop: Backdrop}}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isSheetDetailView}>
        {
          isModalEditMode ?
            <Box sx={modalStyle}>
              <Box sx={headerStyle}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  {sheetDetail?.artist} - {sheetDetail?.title}
                </Typography>
                <IconButton aria-label="close" onClick={handlerCloseView}>
                  <CloseIcon/>
                </IconButton>
              </Box>

              <Box sx={contentStyle}>
                <Box sx={buttonContainerStyle}>
                  <IconButton aria-label="add">
                    <EditIcon />
                    <Typography>추가</Typography>
                  </IconButton>
                  <IconButton aria-label="cancel">
                    <DeleteIcon />
                    <Typography>취소</Typography>
                  </IconButton>
                </Box>
                <SheetDetailForm/>
              </Box>
            </Box>
            :
            <Box sx={modalStyle}>
              <Box sx={headerStyle}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  {sheetDetail?.artist} - {sheetDetail?.title}
                </Typography>
                <IconButton aria-label="close" onClick={handlerCloseView}>
                  <CloseIcon/>
                </IconButton>
              </Box>

              <Box sx={contentStyle}>
                <Box sx={buttonContainerStyle}>
                  <IconButton aria-label="edit">
                    <EditIcon />
                    <Typography>수정</Typography>
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                    <Typography>삭제</Typography>
                  </IconButton>
                </Box>
                <SheetDetailPreview/>
                {/*<SheetDetailForm/>*/}

                <SheetReviewCommentForm/>

                <SheetReviewCommentList />
              </Box>
            </Box>
        }
      </Fade>
    </Modal>
  );
}

export default SheetModalComponent;
