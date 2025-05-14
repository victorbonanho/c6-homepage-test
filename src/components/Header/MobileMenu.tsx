import * as React from "react";
import { Menu, MenuItem, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface MobileMenuProps {
  items: Array<{
    label: string;
    sectionId: string;
  }>;
}

const MobileMenu = ({ items }: MobileMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    handleMenuClose();
  };

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        aria-controls="mobile-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        sx={{ display: { md: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "mobile-menu-button",
        }}
        container={anchorEl ? anchorEl.ownerDocument.body : undefined}
      >
        {items.map((item, index) => (
          <MenuItem key={index} onClick={() => handleScrollTo(item.sectionId)}>
            <Typography variant="body1" component="span">
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MobileMenu;
