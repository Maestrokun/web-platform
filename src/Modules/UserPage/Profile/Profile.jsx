import { Avatar, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { BOOKS } from "../../../constant/book";

const Profile = () => {
  return (
    <div>
      <Typography fontSize="18px" fontWeight={600} m={2}>
        Welcome back,
      </Typography>
      {/* <Grid
        container
        sx={{
          m: 2,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          height: "15%",
          width: "95%",
        }}
      >
        <Grid item sx={{ mx: "10px" }}>
          <Avatar sx={{ backgroundColor: "#9e9eff" }}>MO</Avatar>
        </Grid>
        <Grid item>
          <Stack>
            <Typography fontSize="18px">Moshood Olabisi</Typography>
          </Stack>
        </Grid>
      </Grid> */}
      {BOOKS.map((book) => (
        <Card
          sx={{
            backgroundColor: "#9e9eff",
            width: "60%",
            height: "30%",
            ml: 2,
            mt: 2,
            borderRadius: "10px",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
            }}
          >
            <Grid item xs={3}>
              <Card
                sx={{
                  m: 1,
                  backgroundColor: "#f5f5f5",
                  width: "200px",
                  height: "250px",
                  broderRadius: "10px",
                }}
              >
                {book.icon}
              </Card>
            </Grid>
            <Grid item xs={9}>
              <Stack mt={2}>
                <Typography
                  fontSize="20px"
                  fontWeight={600}
                  color="#fff"
                  mt={1}
                >
                  {book.title}
                </Typography>
                <Typography mt={1} color="#fff">
                  {book.synopsis}
                </Typography>
                <Typography mt={6}>Year: {book.year}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      ))}
    </div>
  );
};

export default Profile;
