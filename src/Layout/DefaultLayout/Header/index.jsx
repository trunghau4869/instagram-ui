import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  textAlign: "center",
  boxShadow: "none",
  borderRadius: 0,
  color: theme.palette.text.secondary,
  fontSize: "20px",
}));

export default function Header() {
  return (
    <Box sx={{ width: 1 }}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={1}
        sx={{ margin: "40px" }}
      >
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          sx={{ border: "2px solid grey" }}
        >
          <Item>xs=8</Item>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{ border: "2px solid grey" }}
        >
          <Item>xs=4</Item>
        </Box>
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: "#007FFF",
                dark: "#0066CC",
              },
            },
          }}
        >
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            sx={{
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          />
        </ThemeProvider>
        <Box gridColumn="span 8" sx={{ border: "2px solid grey" }}>
          <Item>xs=8</Item>
        </Box>
        <Box gridColumn="span 12" sx={{ border: "2px solid grey" }}>
          <Item>xs=12</Item>
        </Box>
        <Box gridColumn="span 4" sx={{ border: "2px solid grey" }}>
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4" sx={{ border: "2px solid grey" }}>
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4" sx={{ border: "2px solid grey" }}>
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 2" sx={{ border: "2px solid grey" }}>
          <Item>xs=2</Item>
        </Box>
        <Box gridColumn="span 10" sx={{ border: "2px solid grey" }}>
          <Item>xs=10</Item>
        </Box>
      </Box>
    </Box>
  );
}
