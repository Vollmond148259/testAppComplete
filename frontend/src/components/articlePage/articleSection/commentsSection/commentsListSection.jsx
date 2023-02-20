import { List, Typography } from "@mui/material";
import Comment from "./comment/comment";
import map from "lodash/map";
import theme from "../../../../styles/theme";
export default function CommentsListSection({ comments }) {
  return (
    <>
      {comments.length !== 0 ? (
        <List
          sx={{
            width: "100%",

            borderRadius: "8px",
            bgcolor: theme.pallete.background.paper,
          }}>
          {map(comments, (comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </List>
      ) : (
        <Typography variant="h5">comments not found</Typography>
      )}
    </>
  );
}
