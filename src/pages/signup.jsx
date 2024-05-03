import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
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

export default function SignUp() {
  return (
    <Box display="flex" py={8} sx={{ justifyContent: "center" }}>
      <Box gap={1} width={350} display="grid">
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
          <Typography variant="b" component="div" my={2}>
            Sign up to see photos and videos from your friends.
          </Typography>
          <Button variant="contained" size="small">
            <FacebookIcon
              sx={{
                margin: "0 5px",
              }}
            />
            Log in with Facebook
          </Button>
          <Divider
            sx={{
              margin: "10px 0",
            }}
          >
            OR
          </Divider>
          <TextField
            id="outlined-basic"
            label="Mobile Number or Email"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
          />
          <Box>
            <Typography variant="p" component="div" my={2}>
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <Link href="#" underline="none">
                Learn More
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="p" component="div" my={2}>
              By signing up, you agree to our{" "}
              <Link href="#" underline="none">
                Terms , Privacy Policy and Cookies Policy .
              </Link>
            </Typography>
          </Box>
          <Button variant="contained" size="small">
            Sign up
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Typography variant="p" component="div" mx={1}>
            Have an account?
          </Typography>
          <Link href="/login" underline="none">
            Log in
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
            my={2}
            gridTemplateColumns="repeat(12, 1fr)"
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
      <Box gridColumn="span 4"></Box>
    </Box>
  );
}
