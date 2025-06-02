import React from "react";
import { Box, Button, Menu, MenuItem, Toolbar, Typography, useTheme, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, Collapse, Divider, Container } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Image from "next/image";
import { useRouter } from "next/router";
// import path from "path";

export default function Navbar() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [productMenuOpenInDrawer, setProductMenuOpenInDrawer] = React.useState(false);
  const [serviceMenuOpenInDrawer, setServiceMenuOpenInDrawer] = React.useState(false);
  const [desktopMenuType, setDesktopMenuType] = React.useState<string | null>(null);

  const open = Boolean(anchorEl);

  const navigationItems = [
    { name: 'Home', path: '/home' },
    { name: 'Global presence', path: '/globalPresence' },
    { name: 'Products', isMenu: true },
    { name: 'Services', isMenu: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'AboutUs', path: '/aboutUs' },
    { name: 'Blog', path: '/blog' },
  ];

  const productMenuItems = [
    { name: 'All', path: '/products/all' },
    { name: 'Tablet', path: '/products/tablet' },
    { name: 'Capsule', path: '/products/capsule' },
    { name: 'Injection', path: '/products/injection' },
    { name: 'Suspension/Syrup', path: '/products/syrup-suspension' },
    { name: 'Eye / Eardrops', path: '/products/eye-earDrops' },
    { name: 'Cream', path: '/products/cream' },
    { name: 'Other', path: '/products/other' },
  ];

  const serviceMenuItems = [
    { name: 'Contract Manufacturing', path: '/services/ContractManufacturing' },
    { name: 'Institutional Tenders', path: '/services/InstitutionalTenders' },
    { name: 'OTC PRODUCTS', path: '/services/otcProducts' },
    {name:"genericMedicines" , path:"/services/genericMedicines"},
    { name: 'QC-QA', path:'/services/qc-qa' },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, menuType: string) => {
    setAnchorEl(event.currentTarget);
    setDesktopMenuType(menuType);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDesktopMenuType(null);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleProductMenuClickInDrawer = () => {
    setProductMenuOpenInDrawer(!productMenuOpenInDrawer);
    setServiceMenuOpenInDrawer(false);
  };

  const handleServiceMenuClickInDrawer = () => {
    setServiceMenuOpenInDrawer(!serviceMenuOpenInDrawer);
    setProductMenuOpenInDrawer(false);
  };

  const handleMenuItemClick = (path?: string) => {
    if (path) {
      router.push(path);
    }
    handleClose();
    setDrawerOpen(false);
    setProductMenuOpenInDrawer(false);
    setServiceMenuOpenInDrawer(false);
  };

  const desktopMenuItems = desktopMenuType === 'Products' ? productMenuItems : serviceMenuItems;

  return (
    <Box sx={{ backgroundColor: "transparent", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Top Contact Info */}
        <Container maxWidth="xl">
            <Box sx={{width:"92%" , margin:"auto"}}>
              <Box className={`flex items-center gap-4 text-[#023350] text-sm ${isMobile ? 'hidden' : 'flex-row items-center'}`}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <EmailIcon sx={{ fontSize: "16px", color: "#03A297" }} />
                      <Typography variant="body2" sx={{fontWeight:"540"}}>info@example.com</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <PhoneIcon sx={{ fontSize: "16px", color: "#03A297" }} />
                      <Typography variant="body2" sx={{fontWeight:"540"}}>+2 123 654 7898</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <HelpOutlineIcon sx={{ fontSize: "16px", color: "#03A297" }} />
                      <Typography variant="body2" sx={{fontWeight:"540"}}>Need Help?</Typography>
                  </Box>
              </Box>
          </Box>
        </Container>

        <Container maxWidth="xl">
      <Toolbar className="flex justify-between px-5 w-4/4 mx-auto items-center" sx={{marginLeft:"25px"}}>
        {/* Logo and Brand */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/Link.png"
            alt="logo"
            width={isMobile ? 150 : 220}
            height={isMobile ? 150 : 220}
            style={{ marginRight: 8, cursor: "pointer" }}
            priority
            onClick={() => router.push("/home")}
          />
        </Box>
        {/* Navigation or Menu Icon */}
        {isMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: "#023350" }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box
            className="flex gap-4 items-center mx-auto"
          >
            {navigationItems.map((item) => (
              item.isMenu ? (
                <Typography
                  key={item.name}
                  sx={{ 
                    cursor: "pointer",
                    fontWeight: "bold",
                    "&:hover": {
                      color: "#03A297"
                    }
                  }}
                  id={`basic-button-${item.name.toLowerCase()}`}
                  aria-controls={open && desktopMenuType === item.name ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open && desktopMenuType === item.name ? "true" : undefined}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick(event, item.name)}
                >
                  {item.name}
                </Typography>
              ) : (
                <Typography
                  key={item.name}
                  sx={{
                    cursor: "pointer",
                    color: router.pathname === item.path ? "#23A397" : "#023350",
                    fontWeight: "bold",
                    "&:hover": {
                      color: "#03A297"
                    }
                  }}
                  onClick={() => handleMenuItemClick(item.path)}
                >
                  {item.name}
                </Typography>
              )
            ))}
            <Button sx={{ backgroundColor: "#23A397", color: "white", borderRadius: 2, padding: "10px 20px", cursor: "pointer", ":hover": { backgroundColor: "#002B5B" } }} onClick={() => router.push("/contact")}>Contact Us <span><PhoneOutlinedIcon /></span></Button>
          </Box>
        )}
      </Toolbar>

      {/* Products/Services Dropdown Menu (Desktop) */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open && !isMobile}
        onClose={handleClose}
      >
        {desktopMenuType && desktopMenuItems.map((item) => (
          <MenuItem key={item.name} onClick={() => handleMenuItemClick(item.path)}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {navigationItems.map((item) => (
               item.isMenu ? (
                <React.Fragment key={item.name}>
                   <ListItem component="button" role="listitem" onClick={item.name === 'Products' ? handleProductMenuClickInDrawer : handleServiceMenuClickInDrawer}>
                     <ListItemText primary={item.name} />
                     {item.name === 'Products' ? (productMenuOpenInDrawer ? <ExpandLess /> : <ExpandMore />) : (serviceMenuOpenInDrawer ? <ExpandLess /> : <ExpandMore />)}
                   </ListItem>
                   {item.name === 'Products' && (
                     <Collapse in={productMenuOpenInDrawer} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           {productMenuItems.map((productItem) => (
                              <ListItem component="button" role="listitem" key={productItem.name} onClick={() => handleMenuItemClick(productItem.path)} sx={{ pl: 4 }}>
                                 <ListItemText primary={productItem.name} />
                              </ListItem>
                           ))}
                        </List>
                     </Collapse>
                   )}
                   {item.name === 'Services' && (
                     <Collapse in={serviceMenuOpenInDrawer} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           {serviceMenuItems.map((serviceItem) => (
                              <ListItem component="button" role="listitem" key={serviceItem.name} onClick={() => handleMenuItemClick(serviceItem.path)} sx={{ pl: 4 }}>
                                 <ListItemText primary={serviceItem.name} />
                              </ListItem>
                           ))}
                        </List>
                     </Collapse>
                   )}
                </React.Fragment>
               ) : (
                <ListItem component="button" role="listitem" key={item.name} onClick={() => handleMenuItemClick(item.path)}>
                   <ListItemText primary={item.name} />
                </ListItem>
               )
            ))}
             <ListItem component="button" role="listitem" onClick={() => handleMenuItemClick("/contact")}>
                 <ListItemText primary="Contact Us" />
             </ListItem>
          </List>
        </Box>
      </Drawer>
        </Container>
    </Box>
  );
}