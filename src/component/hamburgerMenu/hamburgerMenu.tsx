"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import style from "./hamburgerMenu.module.scss"
import { useState } from "react";

const menuList = [
    {name:'Home', link:'/'},{name:'About',link:'/about'},
    {
    name:'Services',
    link:'/services'},
    {name:'Gallery',link:'/gallery'},
    {name:'Projects',link:'/projects'},
    {name:'Contact us',link:'/contact'}
  ]
  

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected,setSelected] = useState(0)
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={style.hamburgerContainer}>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {open ? <CloseIcon />:<MenuIcon />}
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        classes={{
          root: style.menu,
          paper:style.material_paper
        }}
       
       
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuList.map((item,index)=>{
            return  (
                <div className={`${style.menu_list} ${selected == index? style.selected_item:''} `} key={'list'+ index} onClick={()=>setSelected(index)} >
                <Link href={item.link}>
                <MenuItem  onClick={handleClose}>{item.name}</MenuItem>
                </Link>
                </div>
            )
        })}
      </Menu>
    </div>
  );
}
