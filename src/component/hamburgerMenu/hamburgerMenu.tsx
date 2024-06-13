"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import style from "./hamburgerMenu.module.scss"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const menuList = [
    {name:'Home', link:'/'},{name:'About',link:'/about'},
    {
    name:'Services',
    link:'',
    sub_link:[
        {sub_name:'Design & Build',sub_link:''},
        {sub_name:'Shop Fitting',sub_link:''},
        {sub_name:'Project Management',sub_link:''},
        {sub_name:'Maintaince',sub_link:''},
    ]},
    {name:'Gallery',link:'/gallery'},
    {name:'Contact us',link:'/contact'}
  ]
  

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
          <MenuIcon />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
       
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuList.map((item,index)=>{
            return  (
                <div className={style.menu_list} key={'list'+ index}>
                {item.name !== 'Services' ?
                <Link href={item.link}>
                <MenuItem onClick={handleClose}>{item.name}</MenuItem>
                </Link>:
                <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {item.name}
                </AccordionSummary>
                {item.sub_link?.map((val,index)=>{
                    return(
                        <AccordionDetails key={'sub'+ index}  onClick={handleClose}>
                            <Link href="/services">{val.sub_name}</Link>
                        </AccordionDetails>

                    )

                })}
                 </Accordion>
            }
                
                </div>
            )
        })}
      </Menu>
    </div>
  );
}
