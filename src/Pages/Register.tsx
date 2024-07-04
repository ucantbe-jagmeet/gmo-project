import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { IUser } from "../@types";
import { useNavigate } from "react-router-dom";

const initialState: IUser = {
  name: "",
  phone: "",
  email: "",
};

const Register: React.FC = () => {
  const [user, setUser] = useState<IUser>({
    name: "",
    phone: "",
    email: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("userRegistered", "true");
    localStorage.setItem("user", JSON.stringify(user));
    setUser(initialState);

    setTimeout(() => {
      navigate("/");
    }, 10);
  };

  useEffect(() => {
    if (
      user.name.length > 0 &&
      user.phone.length > 0 &&
      user.email.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 3,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Sign up
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={user.name}
            onChange={handleChange}
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="tel"
            value={user.phone}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={user.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "No signup" : "Signup"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
