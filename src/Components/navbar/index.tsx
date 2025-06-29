import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [productMenuOpenInDrawer, setProductMenuOpenInDrawer] =
    React.useState(false);
  const [serviceMenuOpenInDrawer, setServiceMenuOpenInDrawer] =
    React.useState(false);
  const [desktopMenuType, setDesktopMenuType] = React.useState<string | null>(
    null
  );

  const open = Boolean(anchorEl);

  const navigationItems = [
    { name: "Home", path: "/home" },
    { name: "Global Presence", path: "/globalPresence" },
    { name: "Products", isMenu: true },
    { name: "Services", isMenu: true },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Blog", path: "/blog" },
  ];

  const productMenuItems = [
    { name: "All", path: "/products/all" },
    { name: "Tablet", path: "/products/tablet" },
    { name: "Capsule", path: "/products/capsule" },
    { name: "Injection", path: "/products/injection" },
    { name: "Suspension/Syrup", path: "/products/syrup-suspension" },
    { name: "Eye / Eardrops", path: "/products/eye-ear-drops" },
    { name: "Cream", path: "/products/cream" },
    { name: "Other", path: "/products/other" },
  ];

  const serviceMenuItems = [
    {
      name: "Contract Manufacturing",
      path: "/services/ContractManufacturing",
    },
    { name: "Institutional Tenders", path: "/services/InstitutionalTenders" },
    { name: "OTC Products", path: "/services/otcProducts" },
    { name: "Generic Medicines", path: "/services/genericMedicines" },
    { name: "QC-QA", path: "/services/qc-qa" },
  ];

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    menuType: string
  ) => {
    setAnchorEl(event.currentTarget);
    setDesktopMenuType(menuType);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDesktopMenuType(null);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
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

  const desktopMenuItems =
    desktopMenuType === "Products" ? productMenuItems : serviceMenuItems;

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Contact Info */}
      <Container maxWidth="xl">
        <Box sx={{ width: "92%", margin: "auto" }}>
          <Box
            className={`flex items-center gap-4 text-[#023350] text-sm ${
              isMobile ? "hidden" : "flex-row items-center"
            }`}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Image src="/vector.png" alt="" width={15} height={15} />
              <Typography variant="body2" sx={{ fontWeight: "540" }}>
                info@example.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Image src="/vector2.png" alt="" width={15} height={15} />
              <Typography variant="body2" sx={{ fontWeight: "540" }}>
                +2 123 654 7898
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Image src="/vector1.png" alt="" width={15} height={15} />
              <Typography variant="body2" sx={{ fontWeight: "540" }}>
                Need Help?
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Main Toolbar */}
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            width: "96%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
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

          {/* Navigation (aligned to end) */}
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ color: "#023350", ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              sx={{ display: "flex", gap: 2, alignItems: "center", ml: "auto" }}
            >
              {navigationItems.map((item) =>
                item.isMenu ? (
                  <Typography
                    key={item.name}
                    sx={{
                      cursor: "pointer",
                      color:
                        router.pathname === item.path ? "#23A397" : "#023350",
                      fontWeight: "500",
                      "&:hover": { color: "#03A297" },
                    }}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                      handleClick(event, item.name)
                    }
                  >
                    {item.name}
                  </Typography>
                ) : (
                  <Typography
                    key={item.name}
                    sx={{
                      cursor: "pointer",
                      color:
                        router.pathname === item.path ? "#03A297" : "#023350",
                      fontWeight: router.pathname === item.path ? "900" : "500",
                      "&:hover": { color: "#03A297" },
                    }}
                    onClick={() => handleMenuItemClick(item.path)}
                  >
                    {item.name}
                  </Typography>
                )
              )}
              <Button
                sx={{
                  backgroundColor: "#23A397",
                  color: "white",
                  borderRadius: 2,
                  padding: "10px 20px",
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  ":hover": { backgroundColor: "#002B5B" },
                }}
                onClick={() => handleMenuItemClick("/contact")}
              >
                Contact Us{" "}
                <Image src="/calling.png" alt="" width={18} height={20}></Image>
              </Button>
            </Box>
          )}
        </Toolbar>

        {/* Dropdown (Desktop) */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open && !isMobile}
          onClose={handleClose}
        >
          {desktopMenuType &&
            desktopMenuItems.map((item) => (
              <MenuItem
                key={item.name}
                onClick={() => handleMenuItemClick(item.path)}
              >
                {item.name}
              </MenuItem>
            ))}
        </Menu>

        {/* Drawer (Mobile) */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: isMobile ? "80vw" : 250,
              height: "100vh",
              backgroundColor: "whitesmoke",
            }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 1,
                boxShadow: "rgba(0,0,0,0.56)",
              }}
            >
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <List>
              {navigationItems.map((item) =>
                item.isMenu ? (
                  <React.Fragment key={item.name}>
                    <ListItem
                      // button
                      onClick={
                        item.name === "Products"
                          ? handleProductMenuClickInDrawer
                          : handleServiceMenuClickInDrawer
                      }
                    >
                      <ListItemText primary={item.name} />
                      {item.name === "Products" ? (
                        productMenuOpenInDrawer ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : serviceMenuOpenInDrawer ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItem>
                    <Collapse
                      in={
                        item.name === "Products"
                          ? productMenuOpenInDrawer
                          : serviceMenuOpenInDrawer
                      }
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {(item.name === "Products"
                          ? productMenuItems
                          : serviceMenuItems
                        ).map((subItem) => (
                          <ListItem
                            // button
                            key={subItem.name}
                            sx={{ pl: 4 }}
                            onClick={() => handleMenuItemClick(subItem.path)}
                          >
                            <ListItemText primary={subItem.name} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                ) : (
                  <ListItem
                    // button
                    key={item.name}
                    onClick={() => handleMenuItemClick(item.path)}
                  >
                    <ListItemText primary={item.name} />
                  </ListItem>
                )
              )}
              <ListItem
                // button
                onClick={() => handleMenuItemClick("/contact")}
              >
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
}
