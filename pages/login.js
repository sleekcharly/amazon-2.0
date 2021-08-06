import {
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";
import Layout from "../components/Layout";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import axios from "axios";
import dynamic from "next/dynamic";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password
      });
      alert("Success login");
    } catch (err) {
      alert(err.response.data ? err.response.data.message : err.message);
    }
  };
  return (
    <Layout title="Login">
      <form className={classes.form} onSubmit={submitHandler}>
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              inputProps={{ type: "email" }}
            ></TextField>
          </ListItem>

          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: "password" }}
              onChange={e => setPassword(e.target.value)}
            ></TextField>
          </ListItem>

          <ListItem>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
          </ListItem>

          <ListItem>
            Don't have an account? &nbsp;
            <NextLink href="'/register" passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}

// to make the Login componenet a dynamic component and prevent MUI server side rendering error
export default dynamic(() => Promise.resolve(Login), { ssr: false });
