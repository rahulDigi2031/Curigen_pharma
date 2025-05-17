import React from "react";
import { Box, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
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
      {/* Top Contact Info */}
      <Box sx={{ py: 1, px: 2, display: "flex", justifyContent: "start", width: "80%" , margin:"auto"}}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, color: "#023350", fontSize: "14px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <EmailIcon sx={{ fontSize: "16px", color: "#03A297" }} />
                  <Typography variant="body2">info@example.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <PhoneIcon sx={{ fontSize: "16px", color: "#03A297" }} />
                  <Typography variant="body2">+2 123 654 7898</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <HelpOutlineIcon sx={{ fontSize: "16px", color: "#03A297" }} />
                  <Typography variant="body2">Need Help?</Typography>
              </Box>
          </Box>
      </Box>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 20px",
          width: "80%",
          margin: "0 auto",
          alignItems: "center",
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
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography sx={{ cursor: "pointer", color: "#23A397", fontWeight: "bold" }} onClick={() => router.push("/home")}>Home</Typography>
          <Typography sx={{ cursor: "pointer" }} onClick={() => router.push("/globalPresence")}>Global presence</Typography>
          <Typography
            sx={{ cursor: "pointer" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}>
            Products
          </Typography>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => { handleClose(); router.push('/products/all'); }}>All</MenuItem>
            <MenuItem onClick={() => { handleClose(); router.push('/products/tablet'); }}>Tablet</MenuItem>
            <MenuItem onClick={() => { handleClose(); router.push('/products/capsule'); }}>Capsule</MenuItem>
            <MenuItem onClick={() => { handleClose(); router.push('/products/injection'); }}>Injection</MenuItem>
            <MenuItem onClick={() => { handleClose(); router.push('/products/suspension-syrup'); }}>Suspension/Syrup</MenuItem>
            <MenuItem onClick={() => { handleClose(); router.push('/products/eye-eardrops'); }}>Eye / Eardrops</MenuItem>
            <MenuItem onClick={() => { handleClose(); router.push('/products/cream'); }}>Cream</MenuItem>
            <MenuItem onClick={() => { handleClose(); router.push('/products/other'); }}>Other</MenuItem>

          </Menu>
          <Typography sx={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={()=> router.push("/services")}>Services</Typography>
          <Typography sx={{ cursor: "pointer" }} onClick={()=> router.push("/gallery")}>Gallery</Typography>
          <Typography sx={{ cursor: "pointer" }}>About</Typography>
          <Typography sx={{ cursor: "pointer" }}>Blog</Typography>
          <Button sx={{ backgroundColor: "#23A397", color: "white", borderRadius: 2, padding: "10px 20px", cursor: "pointer", ":hover": { backgroundColor: "#002B5B" } }}>Contact Us</Button>
        </Box>
      </Toolbar>
    </Box>
  );
}
