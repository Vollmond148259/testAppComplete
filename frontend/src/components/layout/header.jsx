import { useState, useEffect } from "react";
import { useLocation, redirect } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Stack,
  IconButton,
  Typography,
  InputBase,
  Button,
  Container,
} from "@mui/material";
import CustomLink from "../../elements/customLink";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setSearchingValue } from "../../redux/slices/articlesSlice";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  height: "36px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(() => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "10px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    fontWeight: 500,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: "10px",
    paddingTop: "6px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

export default function Header() {
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
