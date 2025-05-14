import { AppBar, Toolbar, Typography, Box, List, Button } from "@mui/material";
import MobileMenu from "./MobileMenu";
import { handleScrollTo } from "../../utils/scrollUtils";

const Header = () => {
  const menuItems = [
    { label: "Início", sectionId: "hero-section" },
    { label: "Como funciona", sectionId: "features-section" },
    { label: "Cotações", sectionId: "cotation-section" },
  ];

  return (
    <AppBar position="sticky">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            width: "90%",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              padding: "0!important",
            }}
          >
            <Typography variant="h6" component="div">
              REAL TIME CURRENCIES
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <List sx={{ display: "flex", gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.sectionId}
                    color="inherit"
                    onClick={() => handleScrollTo(item.sectionId)}
                  >
                    {item.label}
                  </Button>
                ))}
              </List>
            </Box>
            <MobileMenu items={menuItems} />
          </Toolbar>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
