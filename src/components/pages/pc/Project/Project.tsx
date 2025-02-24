import { Typography, Box, Stack, Button, Grid2 as Grid } from "@mui/material";
import { blue } from "../../common/Constants";
import { Link } from "react-router-dom";

export const Project = () => {
  return (
    <Box
      sx={{
        backgroundColor: blue,
        padding: "20px",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Stack spacing={5}>
        <Typography variant="h3" sx={{ paddingTop: "100px" }}>
          Projects
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={2}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to=""
              color={"info"}
            >
              sample
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to=""
              color={"info"}
            >
              sample
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to=""
              color={"info"}
            >
              sample
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to=""
              color={"info"}
            >
              sample
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
