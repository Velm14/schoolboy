import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            School boys
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
