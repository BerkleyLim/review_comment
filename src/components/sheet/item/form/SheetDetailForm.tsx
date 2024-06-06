import React, { useState } from 'react';
import styles from "../../../../css/sheet.module.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Rating } from "@mui/material";

interface FormData {
  title: string;
  content: string;
  rating: number;
}

const SheetDetailForm  = () => {
  const onSubmit = (formData: FormData) => {

  }
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    rating: 2.5, // 기본 평점 설정
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (newValue: number | null) => {
    if (newValue !== null) {
      setFormData(prevData => ({
        ...prevData,
        rating: newValue,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography id="transition-modal-description" component="div" sx={{mt: 2}}>
        <div className={`${styles?.sheetDetail}`}>
          <div className={`${styles?.commonContentDetailContainer}`}>
            {/* 이미지 및 상세 정보 표시 */}
            <div className={`${styles?.detailContainer}`}>
              <TextField
                fullWidth
                name="title"
                label="제목"
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                name="content"
                label="내용"
                multiline
                rows={4}
                variant="outlined"
                value={formData.content}
                onChange={handleChange}
                required
              />
              <div className="">전체 평점 :
                <Rating
                  name="rating"
                  value={formData.rating}
                  precision={0.1}
                  onChange={(event, newValue) => {
                    handleRatingChange(newValue);
                  }}
                />
                ({formData.rating}점)
              </div>
            </div>
          </div>
          <div className={`${styles?.detailContentsComponent}`}>
            {/* 기존 컨텐츠 표시 */}
            {/* 이 부분에 기존 컨텐츠가 표시될 수 있도록 수정 */}
          </div>
        </div>
      </Typography>
      {/* 제출 버튼 */}
      <button type="submit">제출하기</button>
    </form>
  );
}

export default SheetDetailForm;
