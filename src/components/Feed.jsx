import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

export const Feed = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
