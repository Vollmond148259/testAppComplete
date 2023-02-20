import ListItem from "@mui/material/ListItem";
import * as React from "react";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import theme from "../../../../../styles/theme";
import { getFirstSymbolForAvatar } from "../../../../utils/utils";
export default function Comment({ comment }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: theme.pallete.background.avatar }}>
            {getFirstSymbolForAvatar(comment.user)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={comment.user}
          secondary={<React.Fragment>{comment.text}</React.Fragment>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
