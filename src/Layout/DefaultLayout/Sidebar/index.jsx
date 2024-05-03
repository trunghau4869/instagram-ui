import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
export default function Sidebar() {
  const [user, setUser] = useState({});
  const [hidenGG, setHidenGG] = useState(false);
  const [hidenBTN, setHidenBTN] = useState(true);
  const handleSignout = () => {
    setUser({});
    setHidenGG(false);
    setHidenBTN(true);
  };
  return (
    <div>
      <h1>Sidebar</h1>
      {/* <button onClick={() => login()}>Sign in with Google</button> */}
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}
      <Box display="flex" sx={{ justifyContent: "center" }}>
        {hidenBTN && (
          <GoogleLogin
            id="ggLogout"
            type="standard"
            theme="filled_blue"
            shape="pill"
            onSuccess={(credentialResponse) => {
              var credentialResponsed = jwtDecode(
                credentialResponse.credential
              );
              setUser(credentialResponsed);
              setHidenGG(true);
              setHidenBTN(false);
              console.log(credentialResponsed);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        )}
      </Box>
      {hidenGG && (
        <Box id="ggID" display="flex" sx={{ justifyContent: "center" }}>
          <div>
            <Box display="flex" gap={1} sx={{ alignItems: "center" }}>
              <h2>Chào </h2>
              <h2> {user.name}</h2>
              <Avatar alt="avatar" src={user.picture} />
            </Box>

            <Button variant="outlined" onClick={handleSignout}>
              Sign out
            </Button>
          </div>
        </Box>
      )}
    </div>
  );
}
