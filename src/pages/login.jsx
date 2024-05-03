import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  textAlign: "center",
  boxShadow: "none",
  borderRadius: 0,
  color: theme.palette.text.secondary,
  fontSize: "20px",
}));

export default function Login() {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" py={8}>
      <Box gridColumn="span 3"></Box>
      <Box gridColumn="span 3" display="flex" sx={{ alignItems: "center" }}>
        <img
          src="https://onecenter.vn/wp-content/uploads/2022/07/iphone-12-pro-max-2.png"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box gridColumn="span 3" gap={1} display="grid">
        <Box
          display="grid"
          component="form"
          gap={1}
          p={4}
          sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}
          >
            INSTAGRAM
          </Typography>
          <TextField
            id="outlined-basic"
            label="Phone number, username, or email"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            size="small"
          />
          <Button variant="contained" size="small">
            Log in
          </Button>
          <Divider
            sx={{
              margin: "10px 0",
            }}
          >
            OR
          </Divider>
          <Link
            display="flex"
            href="#"
            underline="none"
            sx={{
              textAlign: "center",
              justifyContent: "center",
              margin: "5px 0",
            }}
          >
            <FacebookIcon
              sx={{
                margin: "0 5px",
              }}
            />
            Log in with Facebook
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{
              fontSize: "12px",
              color: "#000",
              margin: "5px 0 0",
            }}
          >
            Forgot password?
          </Link>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Typography variant="p" component="div" mx={1}>
            Don't have an account?
          </Typography>
          <Link href="/signup" underline="none">
            Sign up
          </Link>
        </Box>
        <Box px={4}>
          <Typography variant="p" component="div" sx={{ margin: "10px 0" }}>
            Get the app.
          </Typography>
          <Box
            width={"100%"}
            height={40}
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            my={2}
            gap={1}
          >
            <Box gridColumn="span 6">
              <Link href="#" underline="none">
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                  width={"100%"}
                  height={40}
                ></img>
              </Link>
            </Box>
            <Box gridColumn="span 6">
              <Link href="#" underline="none">
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                  width={"100%"}
                  height={40}
                ></img>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box gridColumn="span 3"></Box>
    </Box>
  );
}
