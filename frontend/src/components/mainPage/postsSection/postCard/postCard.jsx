import { Button } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { StyledAvatar, StyledCard } from "./elements/postCardElements";
import DeleteIcon from "@mui/icons-material/Delete";
import { convertDate } from "../../../utils/utils";
import { useDispatch } from "react-redux";
import { getFirstSymbolForAvatar } from "../../../utils/utils";
import CustomLink from "../../../../elements/customLink";
import { setBlackList } from "../../../../redux/slices/articlesSlice";
import { createPreview } from "../../../utils/utils";
import PropTypes from "prop-types";

function PostCard({ article }) {
  const dispatch = useDispatch();
  return (
    <StyledCard>
      <CardHeader
        action={
          <IconButton
            aria-label="delete"
            onClick={() => {
              dispatch(setBlackList(article));
            }}>
            <DeleteIcon />
          </IconButton>
        }
        avatar={
          <StyledAvatar aria-label="post">
            {getFirstSymbolForAvatar(article.title)}
          </StyledAvatar>
        }
        title={
          <CustomLink to={`articles/${article.id}`}>{article.title}</CustomLink>
        }
        subheader={convertDate(article.date)}
      />

      <CardContent>
        <Typography variant="body">
          {createPreview(article.text)}
          <CustomLink to={`articles/${article.id}`}>
            <Button sx={{ textTransform: "none" }} size="small">
              ...Read More
            </Button>
          </CustomLink>
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </StyledCard>
  );
}

PostCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default PostCard;
