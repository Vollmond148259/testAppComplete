import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";

export default function AddCommentForm({ publishNewComment }) {
  const [comment, setComment] = useState(null);
  const [userName, setUserName] = useState(null);
  const [open, setOpen] = useState(false);
  const openedArticle = useSelector((state) => state.articles.article);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setUserName(null);
    setComment(null);
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        add comment
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Comments should not contain swear words, please remember this
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            label="user name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            label="comment"
            type="text"
            fullWidth
            multiline
            maxRows={6}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {userName && comment ? (
            <Button
              onClickCapture={() => {
                publishNewComment({
                  text: comment,
                  user: userName,
                  article: openedArticle.id,
                });
              }}
              onClick={handleClose}>
              Add
            </Button>
          ) : (
            <Button disabled>Add</Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
