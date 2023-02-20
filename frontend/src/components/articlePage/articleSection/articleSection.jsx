import { Typography, Stack, Button, Box } from "@mui/material";
import { useState } from "react";
import theme from "../../../styles/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { convertDate } from "../../utils/utils";
import { TextContainer } from "./elements/articleSectionElements";
import CommentsListSection from "./commentsSection/commentsListSection";
import MobileCommentsListWrapper from "./commentsSection/mobileCommentsListSection";
import AddCommentForm from "./commentsSection/addCommentForm";
import PropTypes from "prop-types";

function ArticleSection({ publishNewComment, article, comments }) {
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [showComments, setShowComments] = useState(false);
  return (
    <>
      <Stack direction="column" spacing={2}>
        <Typography variant="h4">{article.title}</Typography>
        <Typography variant="h5" fontWeight={300}>
          {convertDate(article.date)}
        </Typography>
        <TextContainer
          sx={{
            maxHeight: {
              xs: "430px",
              sm: "550px",
            },
          }}>
          <Typography variant="body">{article.text}</Typography>
        </TextContainer>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent={"flex-end"}
        my={1}
        mb={2}>
        <Button
          onClick={() => {
            setShowComments(!showComments);
          }}
          sx={{ width: "170px" }}
          variant="contained">
          {showComments ? "hide comments" : "show comments"}
        </Button>
        <AddCommentForm publishNewComment={publishNewComment} />
      </Stack>

      {matches ? (
        <MobileCommentsListWrapper
          showComments={showComments}
          setShowComments={setShowComments}>
          <CommentsListSection comments={comments} />
        </MobileCommentsListWrapper>
      ) : (
        <Box>{showComments && <CommentsListSection comments={comments} />}</Box>
      )}
    </>
  );
}
ArticleSection.propTypes = {
  publishNewComment: PropTypes.func,
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      user: PropTypes.string,
      article: PropTypes.string,
    })
  ),
};

export default ArticleSection;
