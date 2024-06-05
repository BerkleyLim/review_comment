import React, {useState} from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {useNavigate} from "react-router";

const LeftMenuList = () => {
  // Navigate => 경로 이동
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);

  // 리스트
  const handleClick = (index: number) => {
    // setOpen([index]: true,);
    setOpenIndex(index)
  };

  // 아래는 경로 이동
  const moveRouterPath = (path: string) => {
    navigate(path);
  }

  return (
    <List
      sx={{width: '30%', maxWidth: 240, minHeight: '100vh'}}
      // sx={{ width: '30%', maxWidth: 240, bgcolor: 'primary.main' }}
      // sx={{ width: '30%', maxWidth: 240, bgcolor: 'background.paper' }}
      style={{backgroundColor: '#fff3d4'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" className={`cursor-pointer`}
                       style={{backgroundColor: '#fff3d4'}}
                       onClick={() => moveRouterPath('/')}>
          CLNEWZE
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => handleClick(0)}>
        <ListItemIcon>
          <SendIcon/>
        </ListItemIcon>
        <ListItemText primary="게시판"/>
        {openIndex === 0 ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={openIndex === 0} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{pl: 4}}>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="악보" onClick={() => moveRouterPath('/sheet/1')}/>
          </ListItemButton>
          <ListItemButton sx={{pl: 4}} onClick={() => {
            alert("빠른 시일 내에 개발하겠습니다.")
          }}>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="음반"/>
          </ListItemButton>
          <ListItemButton sx={{pl: 4}} onClick={() => {
            alert("빠른 시일 내에 개발하겠습니다.")
          }}>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="공연"/>
          </ListItemButton>
          <ListItemButton sx={{pl: 4}} onClick={() => {
            alert("빠른 시일 내에 개발하겠습니다.")
          }}>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="일정"/>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick(1)}>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="구독자"/>
        {openIndex === 1 ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={openIndex === 1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{pl: 4}} onClick={() => {
            alert("빠른 시일 내에 개발하겠습니다.")
          }}>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="내가 구독한 사람"/>
          </ListItemButton>
          <ListItemButton sx={{pl: 4}} onClick={() => {
            alert("빠른 시일 내에 개발하겠습니다.")
          }}>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="나를 구독한 사람"/>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick(2)}>
        <ListItemIcon>
          <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary="구독 관리"/>
        {openIndex === 2 ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={openIndex === 2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{pl: 4}} onClick={() => {
            alert("빠른 시일 내에 개발하겠습니다.")
          }}>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="구독 등급"/>
          </ListItemButton>
          <ListItemButton sx={{pl: 4}} onClick={() => {
            alert("빠른 시일 내에 개발하겠습니다.")
          }}>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="구독 수입"/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

export default LeftMenuList;
