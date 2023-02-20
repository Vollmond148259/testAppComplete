import { styled, alpha } from "@mui/material/styles";
import { Card, Avatar } from "@mui/material";
const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: "300px",
  backgroundColor: theme.pallete.background.paper,
  overflow: "hidden",

  ".MuiCardHeader-root": {
    paddingBottom: 0,
  },
  ".MuiCardHeader-title": {
    fontSize: "18px",
    fontWeight: 500,
  },
  "&:hover": {
    backgroundColor: alpha(theme.pallete.background.paper, 0.55),
  },
}));
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.pallete.background.avatar,
}));
export { StyledCard, StyledAvatar };
