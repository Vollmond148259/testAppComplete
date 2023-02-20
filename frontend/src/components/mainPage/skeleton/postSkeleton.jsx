import Skeleton from "@mui/material/Skeleton";
import { Grid } from "@mui/material";

function PostSkeleton() {
  return (
    <Grid px={1} container rowSpacing={{ xs: 1.5, md: 4 }} columnSpacing={4}>
      <Grid item xs={12} sm={12} md={6}>
        <Skeleton variant="rounded" height={"170px"} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Skeleton variant="rounded" height={"170px"} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Skeleton variant="rounded" height={"170px"} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Skeleton variant="rounded" height={"170px"} />
      </Grid>
    </Grid>
  );
}
export default PostSkeleton;
