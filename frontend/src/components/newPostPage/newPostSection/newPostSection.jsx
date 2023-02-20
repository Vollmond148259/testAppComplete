import { useState } from "react";
import PropTypes from "prop-types";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import CustomLink from "../../../elements/customLink";
function NewPostSection({ publishNewArticle }) {
  const loading = useSelector((state) => state.articles.loading);
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100vh" }}>
      <Paper
        sx={{
          backgroundColor: "#1876d1",
          padding: "20px",
          minWidth: { xs: "350px", sm: "500px", md: "600px" },
        }}>
        <Typography
          variant="h6"
          color="white"
          sx={{ textTransform: "upperCase" }}>
          Create article
        </Typography>
        <Stack mt={2} direction="column" spacing={2}>
          <TextField
            fullWidth
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: "16px" }}
          />
          <TextField
            placeholder="Text"
            sx={{ backgroundColor: "white", borderRadius: "16px" }}
            fullWidth
            onChange={(e) => {
              setText(e.target.value);
            }}
            variant="outlined"
            multiline
            maxRows={5}
          />
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <CustomLink to="/">
              <Button variant="outlined">Cancel</Button>
            </CustomLink>
            {title && text ? (
              <LoadingButton
                loading={loading}
                onClick={() => {
                  publishNewArticle({
                    title: title,
                    text: text,
                  });
                }}
                variant="outlined">
                Create
              </LoadingButton>
            ) : (
              <Button disabled variant="outlined">
                Create
              </Button>
            )}
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
NewPostSection.propTypes = {
  publishNewArticle: PropTypes.func,
};
export default NewPostSection;
