import React from "react";
import { Box, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from "next/image";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 20px",
          width: "80%",
          margin: "0 auto",
          alignItems:"center"
        }}
      >
        {/* Logo and Brand */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Image
            src="/Link.png"
            alt="logo"
            width={220}
            height={220}
            style={{ marginRight: 8, cursor: "pointer" }}
            priority
            onClick={() => router.push("/home")}
          />
        </Box>
        {/* Navigation Texts */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            padding: "10px 20px",
            width:"100%",
            alignItems:"center"
          }}
        >
          <Typography sx={{ cursor: "pointer" , color:"#23A397" , fontWeight:"bold" }} onClick={() => router.push("/home")}>Home</Typography>
          <Typography sx={{ cursor: "pointer" }}>Global presence</Typography>
          <Typography
            sx={{ cursor: "pointer"}}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Products
          </Typography>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>All</MenuItem>
            <MenuItem onClick={handleClose}>Tablet</MenuItem>
            <MenuItem onClick={handleClose}>Capsule</MenuItem>
            <MenuItem onClick={handleClose}>Injection</MenuItem>
            <MenuItem onClick={handleClose}>Suspension/Syrup</MenuItem>
            <MenuItem onClick={handleClose}>Eye / Eardrops</MenuItem>
            <MenuItem onClick={handleClose}>Cream</MenuItem>
            <MenuItem onClick={handleClose}>Other</MenuItem>

          </Menu>
          <Typography sx={{ cursor: "pointer" , display:"flex" , alignItems:"center"}}>Services</Typography>
          <Typography sx={{ cursor: "pointer" }}>Gallery</Typography>
          <Typography sx={{ cursor: "pointer" }}>About</Typography>
          <Typography sx={{ cursor: "pointer" }}>Blog</Typography>
          <Button sx={{ backgroundColor: "#23A397" , color:"white" , borderRadius:2 , padding:"10px 20px" , cursor:"pointer"}}>Contact Us</Button>
        </Box>
      </Toolbar>
    </Box>
  );
}
