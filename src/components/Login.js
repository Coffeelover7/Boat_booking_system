import React, { useState } from "react";
import './Login.css';
import {
  Container,
  Tabs,
  Tab,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
} from "@mui/material";
import { Facebook, Twitter, Google, GitHub } from "@mui/icons-material";

function Login() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container
    className="d-flex justify-content-center align-items-center vh-100"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
      <Card style={{ width: "50%" }}>
        <CardContent>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            centered
            sx={{ mb: 3 }}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>

          <div
            role="tabpanel"
            hidden={activeTab !== 0}
            className="d-flex flex-column"
          >
            <div className="text-center mb-3">
              <p>Sign in with:</p>

              <div className="d-flex justify-content-center mb-3">
                <Button
                  color="inherit"
                  className="m-1"
                  style={{ color: "#0eee19" }}
                >
                  <Facebook />
                </Button>

                <Button
                  color="inherit"
                  className="m-1"
                  style={{ color: "#0eee19" }}
                >
                  <Twitter />
                </Button>

                <Button
                  color="inherit"
                  className="m-1"
                  style={{ color: "#0eee19" }}
                >
                  <Google />
                </Button>

                <Button
                  color="inherit"
                  className="m-1"
                  style={{ color: "#0eee19" }}
                >
                  <GitHub />
                </Button>
              </div>

              <p>or:</p>
            </div>

            <TextField label="Email address" fullWidth sx={{ mb: 4 }} />
            <TextField
              label="Password"
              type="password"
              fullWidth
              sx={{ mb: 4 }}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <FormControlLabel
                control={<Checkbox name="flexCheck" color="primary" />}
                label="Remember me"
              />
              <br />
              <a href="#!">Forgot password?</a>
            </div>

            <Button variant="contained" className="mb-4 w-100" color="success" fullWidth>
              Login
            </Button>
            <p className="text-center">
              Not a member? <a href="#!">Register</a>
            </p>
          </div>

          <div
            role="tabpanel"
            hidden={activeTab !== 1}
            className="d-flex flex-column"
          >
            <div className="text-center mb-3">
              <p>Sign up with:</p>

              <div className="d-flex justify-content-center mb-3">
                <Button
                  color="inherit"
                  className="m-1"
                  style={{ color: "#0eee19" }}
                >
                  <Facebook />
                </Button>

                <Button
                  color="inherit"
                  className="m-1"
                  style={{ color: "#0eee19" }}
                >
                  <Twitter />
                </Button>

                <Button
                  color="inherit"
                  className="m-1"
                  style={{ color: "#0eee19" }}
                >
                  <Google />
                </Button>

                <Button
                  color="inherit"
                  className="m-1"
                  style={{ color: "#0eee19" }}
                >
                  <GitHub />
                </Button>
              </div>

              <p>or:</p>
            </div>

            <TextField label="Name" fullWidth sx={{ mb: 4 }} />
            <TextField label="Username" fullWidth sx={{ mb: 4 }} />
            <TextField label="Email" type="email" fullWidth sx={{ mb: 4 }} />
            <TextField
              label="Password"
              type="password"
              fullWidth
              sx={{ mb: 4 }}
            />

            <div className="d-flex justify-content-center mb-4">
              <FormControlLabel
                control={<Checkbox name="flexCheck" color="primary" />}
                label="I have read and agree to the terms"
              />
            </div>

            <Button variant="contained" className="mb-4 w-100" color="success" fullWidth>
              Sign up
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;
