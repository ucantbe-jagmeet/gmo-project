import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { IUser } from "../@types";

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("userRegistered", "true");
    localStorage.setItem("user", JSON.stringify(user));
    setUser(initialState);
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
    <Container className="flex items-center justify-center  h-screen bg-blue-50 ">
      <div className="w-full h-full  max-w-md p-6 bg-white rounded mx-auto shadow-md flex  justify-center flex-col">
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-12 h-12 bg-blue-500">
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" className="mt-4">
            Sign in
          </Typography>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="bg-blue-500 hover:bg-blue-600"
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "No signup" : "Signup"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
