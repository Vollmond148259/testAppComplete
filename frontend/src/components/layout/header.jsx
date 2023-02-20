import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./elements/headerElements";
import {
  Box,
  AppBar,
  Stack,
  IconButton,
  Typography,
  Button,
  Container,
} from "@mui/material";
import CustomLink from "../../elements/customLink";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setSearchingValue } from "../../redux/slices/articlesSlice";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

function Header() {
  const { pathname } = useLocation();
  const [hideElements, setHideElements] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    pathname === "/" ? setHideElements(true) : setHideElements(false);
  }, [pathname]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Stack
            padding={1}
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}>
            <Stack direction="row" alignItems={"center"}>
              {!hideElements && (
                <CustomLink to="/">
                  <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="back"
                    sx={{ mr: 2 }}>
                    <ArrowBackIosIcon />
                  </IconButton>
                </CustomLink>
              )}
              <Typography
                variant="h6"
                noWrap
                component="h1"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "block",
                    textTransform: "uppercase",
                  },
                }}>
                <CustomLink to="/">Article app</CustomLink>
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  disabled={!hideElements ? true : false}
                  onChange={(e) => {
                    dispatch(setSearchingValue(e.target.value));
                  }}
                  placeholder="Search article…"
                  inputProps={{ "aria-label": "searchArticle" }}
                />
              </Search>
              <CustomLink to="articles/create">
                <Button variant="outlined">
                  <AddCircleRoundedIcon size="medium" />
                  <Box
                    sx={{ display: { xs: "none", sm: "inline" } }}
                    component="span">
                    Create post
                  </Box>
                </Button>
              </CustomLink>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Header;
